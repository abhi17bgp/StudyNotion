# StudyNotion - An Ed-Tech Platform
![StudyNotion Screenshot](https://github.com/abhi17bgp/StudyNotion/blob/main/src/assets/screencapture-studynotion-frontend-abhi17bgps-projects-vercel-app-2025-06-13-19_01_48%20-%20converted_page-0001_page-0001.jpg)

StudyNotion is a full-stack Ed-Tech platform that enables users to create, consume, and rate educational content. Built with the MERN stack (MongoDB, Express.js, React, Node.js), it provides a seamless learning experience for students and a powerful platform for instructors to share their knowledge.

## Features

### For Students
- Browse and enroll in courses
- Wishlist favorite courses
- Secure payment integration with Razorpay
- Rate and review courses
- Personalized dashboard
- Course progress tracking

### For Instructors
- Create and manage courses
- Upload multimedia content (videos, documents)
- View student enrollment statistics
- Receive ratings and feedback
- Instructor dashboard with insights

### Technical Highlights
- JWT authentication with OTP verification
- Cloudinary integration for media storage
- Markdown support for course content
- Responsive UI with Tailwind CSS
- Redux for state management
- RESTful API design

## Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Redux Toolkit
- React Router
- Axios
- Formik & Yup

### Backend
- Node.js
- Express.js
- MongoDB (with Mongoose)
- JSON Web Tokens (JWT)
- Bcrypt for password hashing
- Nodemailer for emails
- Razorpay API for payments
- Cloudinary SDK

## System Architecture

The platform follows a client-server architecture with three main components:

1. **Frontend**: React.js application handling UI/UX
2. **Backend**: Node.js/Express.js server with REST API
3. **Database**: MongoDB for data persistence

   
Frontend (React) → Backend (Node/Express) → Database (MongoDB)
↑
Cloud Services (Cloudinary, Razorpay)

## Data Models and Database Schema
![database](https://github.com/abhi17bgp/StudyNotion/blob/main/src/assets/Screenshot%202025-06-13%20210323%20(2).jpg)


## Installation

### Prerequisites
- Node.js (v16 or higher)
- MongoDB Atlas account or local MongoDB
- Cloudinary account
- Razorpay account

### Backend Setup
1. Clone the repository
2. Navigate to backend directory: `cd backend`
3. Install dependencies: `npm install`
4. Create a `.env` file based on `.env.example`
5. Start the server: `npm run dev`

### Frontend Setup
1. Navigate to frontend directory: `cd frontend`
2. Install dependencies: `npm install`
3. Create a `.env` file based on `.env.example`
4. Start the application: `npm start`

## Deployment

The platform is deployed using:
- **Frontend**: Vercel
- **Backend**: Render/Railway
- **Database**: MongoDB Atlas
- **Media Storage**: Cloudinary

## Future Enhancements
- Gamification features (badges, leaderboards)
- Personalized learning paths
- Social learning features (discussions, peer feedback)
- Mobile application
- AI-powered recommendations
- VR/AR integration for immersive learning

## Contributors

- [Abhishek Anand](https://github.com/abhi17bgp)

## License

This project is licensed under the MIT License.

---

**Live Demo**: [StudyNotion Web App]([https://study-notion-two-phi.vercel.app/])  
**Source Code**: [GitHub Repository](https://github.com/abhi17bgp/StudyNotion)




### Clone the Repository
```bash
git clone https://github.com/abhi17bgp/StudyNotion.git
cd StudyNotion



