# 🚀 Quick Deploy to Render (2-3 minutes)

## Step 1: Backend Deployment

1. **Go to [render.com](https://render.com)**
2. **Sign up/Login with GitHub**
3. **Click "New +" → "Web Service"**
4. **Connect Repository**: `https://github.com/Pasupathi2004/TDC_CRITICAL_SPARE.git`
5. **Configure:**
   - **Name**: `tdc-critical-spare-backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: `Free`

6. **Add Environment Variables:**
   ```
   NODE_ENV=production
   JWT_SECRET=your-super-secret-key-2024
   JWT_EXPIRES_IN=24h
   ```

7. **Click "Create Web Service"**
8. **Wait 2-3 minutes for deployment**
9. **Copy the URL**: `https://tdc-critical-spare-backend.onrender.com`

## Step 2: Frontend Deployment

1. **Click "New +" → "Static Site"**
2. **Same Repository**: `https://github.com/Pasupathi2004/TDC_CRITICAL_SPARE.git`
3. **Configure:**
   - **Name**: `tdc-critical-spare-frontend`
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist`
   - **Plan**: `Free`

4. **Add Environment Variable:**
   ```
   VITE_API_URL=https://tdc-critical-spare-backend.onrender.com/api
   ```

5. **Click "Create Static Site"**
6. **Wait 1-2 minutes for deployment**
7. **Your app is live!** 🎉

## Step 3: Test Your Deployment

1. **Visit your frontend URL**
2. **Login with:**
   - Username: `admin`
   - Password: `admin123`
3. **Test all features**

## ✅ Done! Your app is now live and fast!

**Backend URL**: `https://tdc-critical-spare-backend.onrender.com`
**Frontend URL**: `https://tdc-critical-spare-frontend.onrender.com`

## 🔧 Troubleshooting

**If backend fails:**
- Check environment variables
- Ensure JWT_SECRET is set
- Check logs in Render dashboard

**If frontend fails:**
- Verify VITE_API_URL is correct
- Check build logs
- Ensure backend is running first

## 💡 Pro Tips

- **Free tier limits**: 750 hours/month
- **Auto-sleep**: Free tier sleeps after 15 minutes of inactivity
- **Custom domains**: Available on paid plans
- **SSL**: Automatically included 