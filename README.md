# 🏭 Critical Spares Inventory Management System

A real-time inventory management system for tracking critical spare parts with live updates, analytics, and user management.

## 🌟 Features

- **Real-time Updates**: Live inventory changes with Socket.IO
- **User Management**: Role-based access control (Admin/User)
- **Analytics Dashboard**: Charts and reports for inventory insights
- **Bulk Upload**: Excel file import for mass data entry
- **Voice Search**: Speech-to-text search functionality
- **Low Stock Alerts**: Automatic notifications for critical items
- **Data Export**: Excel report generation
- **Mobile Responsive**: Works on all devices

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/Pasupathi2004/TDC_CRITICAL_SPARE.git
   cd TDC_CRITICAL_SPARE
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the backend server**
   ```bash
   npm run server
   ```

4. **Start the frontend (in a new terminal)**
   ```bash
   npm run dev
   ```

5. **Access the application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:3001

### Default Login Credentials
- **Admin**: username: `admin`, password: `admin123`
- **User**: username: `user`, password: `user123`

## 🚀 Deployment

### Option 1: Deploy to Render (Recommended)

1. **Fork/Clone this repository to your GitHub account**

2. **Sign up for Render** at [render.com](https://render.com)

3. **Create a new Web Service**
   - Connect your GitHub repository
   - Choose the repository
   - Set build command: `npm install`
   - Set start command: `npm start`
   - Add environment variables:
     ```
     NODE_ENV=production
     JWT_SECRET=your-secret-key
     JWT_EXPIRES_IN=24h
     FRONTEND_URL=https://your-frontend-url.onrender.com
     ```

4. **Create a Static Site for Frontend**
   - Build command: `npm install && npm run build`
   - Publish directory: `dist`
   - Add environment variable:
     ```
     VITE_API_URL=https://your-backend-url.onrender.com/api
     ```

### Option 2: Deploy to Vercel

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy backend**
   ```bash
   cd server
   vercel
   ```

3. **Deploy frontend**
   ```bash
   vercel --prod
   ```

### Option 3: Deploy to Railway

1. **Sign up for Railway** at [railway.app](https://railway.app)

2. **Connect your GitHub repository**

3. **Railway will automatically detect and deploy your application**

## 📁 Project Structure

```
TDC_CRITICAL_SPARE/
├── server/                 # Backend server
│   ├── config/            # Database configuration
│   ├── data/              # JSON data files
│   ├── middleware/        # Express middleware
│   ├── models/            # Data models
│   ├── routes/            # API routes
│   ├── scripts/           # Utility scripts
│   └── server.js          # Main server file
├── src/                   # Frontend React app
│   ├── components/        # React components
│   ├── context/           # React context providers
│   ├── config/            # API configuration
│   └── types/             # TypeScript types
├── public/                # Static assets
└── package.json           # Dependencies and scripts
```

## 🔧 Configuration

### Environment Variables

**Backend (.env)**
```env
NODE_ENV=production
PORT=3001
JWT_SECRET=your-secret-key
JWT_EXPIRES_IN=24h
FRONTEND_URL=https://your-frontend-url.com
```

**Frontend (.env)**
```env
VITE_API_URL=https://your-backend-url.com/api
```

## 📊 API Endpoints

- `POST /api/auth/login` - User authentication
- `GET /api/inventory` - Get all inventory items
- `POST /api/inventory` - Add new item
- `PUT /api/inventory/:id` - Update item
- `DELETE /api/inventory/:id` - Delete item
- `GET /api/analytics` - Get analytics data
- `GET /api/users` - Get all users (admin only)

## 🔒 Security Features

- JWT-based authentication
- Role-based access control
- CORS protection
- Input validation
- Data integrity checks

## 📈 Real-time Features

- Live inventory updates
- Real-time notifications
- Socket.IO integration
- Live dashboard updates
- Voice search functionality

## 🛠️ Technologies Used

**Backend:**
- Node.js
- Express.js
- Socket.IO
- JSON file storage
- JWT authentication

**Frontend:**
- React 18
- TypeScript
- Vite
- Tailwind CSS
- Chart.js
- Socket.IO Client

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support, email support@example.com or create an issue in the GitHub repository.

---

**Live Demo**: [Your deployed URL here]
**GitHub Repository**: https://github.com/Pasupathi2004/TDC_CRITICAL_SPARE.git