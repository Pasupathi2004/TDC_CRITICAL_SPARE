// Test script for deployment verification
import fetch from 'node-fetch';

const testBackend = async () => {
  console.log('🧪 Testing backend deployment...');
  
  const backendUrl = 'https://tdc-critical-spare.onrender.com';
  
  try {
    // Test health endpoint
    console.log('🏥 Testing health endpoint...');
    const healthResponse = await fetch(`${backendUrl}/health`);
    const healthData = await healthResponse.json();
    console.log('✅ Health check:', healthData);
    
    // Test login with your credentials
    console.log('🔐 Testing login...');
    const loginResponse = await fetch(`${backendUrl}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: 'pasu',
        password: '123'
      })
    });
    
    const loginData = await loginResponse.json();
    console.log('✅ Login response:', loginData);
    
    if (loginData.success) {
      console.log('🎉 Login successful!');
      console.log('🔑 Token:', loginData.token);
      console.log('👤 User:', loginData.user);
    } else {
      console.log('❌ Login failed:', loginData.message);
    }
    
  } catch (error) {
    console.error('🚨 Error:', error.message);
  }
};

testBackend(); 