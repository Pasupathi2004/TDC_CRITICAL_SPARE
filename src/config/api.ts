// API Configuration for different environments
const getApiUrl = () => {
  // Check if we're in production (Vite sets this during build)
  if (import.meta.env.PROD) {
    return import.meta.env.VITE_API_URL || 'https://tdc-critical-spare.onrender.com/api';
  }
  // Development environment
  return 'http://localhost:3001/api';
};

export const API_BASE_URL = getApiUrl();

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: `${API_BASE_URL}/auth/login`,
    REGISTER: `${API_BASE_URL}/auth/register`,
  },
  INVENTORY: {
    LIST: `${API_BASE_URL}/inventory`,
    CREATE: `${API_BASE_URL}/inventory`,
    UPDATE: (id: string) => `${API_BASE_URL}/inventory/${id}`,
    DELETE: (id: string) => `${API_BASE_URL}/inventory/${id}`,
  },
  TRANSACTIONS: {
    LIST: `${API_BASE_URL}/transactions`,
    CREATE: `${API_BASE_URL}/transactions`,
  },
  ANALYTICS: {
    DASHBOARD: `${API_BASE_URL}/analytics/dashboard`,
    REPORTS: `${API_BASE_URL}/analytics/reports`,
  },
  USERS: {
    LIST: `${API_BASE_URL}/users`,
    CREATE: `${API_BASE_URL}/users`,
  },
  HEALTH: API_BASE_URL.replace('/api', '') + '/health',
}; 