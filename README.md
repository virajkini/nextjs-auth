# Firebase Authentication Integration with Next.js

## Overview
This project enhances the authentication mechanism using **Firebase Authentication** with **Next.js** framework. It enables users to sign in using their **Google**,  **Twitter**, or **GitHub** accounts and displays their account details upon successful authentication. Additionally, the system maintains configurations for token refresh, idle timeout, and session expiry to ensure security and user experience.

Visit Here for Demo : https://nextjs-auth-xi-flame.vercel.app/

## Features
- **Multi-provider Authentication**: Users can sign in using Google, Twitter, or GitHub accounts.
- **User Account Details Display**: Upon successful authentication, users can view their account details.
- **Token Refresh**: Configured token refresh mechanism to maintain authentication state.
- **Idle Timeout**: Implemented idle timeout to enhance security by automatically logging out inactive users.
- **Session Expiry**: Ensured sessions expire after a specified period for security purposes.

## Technologies Used
- **Firebase Authentication**: Used for authentication with support for multiple providers.
- **Next.js**: A React framework for building server-side rendered applications.
- **React**: A JavaScript library for building user interfaces.
- **JavaScript/TypeScript**: Used for writing client-side code.
- **HTML/CSS**: Markup and styling languages for the frontend.

## Getting Started
1. **Clone the Repository**: `git clone https://github.com/your-username/your-repo.git`
2. **Install Dependencies**: `npm install`
3. **Set Up Firebase**: Follow Firebase documentation to set up authentication providers and obtain credentials.
4. **Configure Environment Variables**: Create a `.env` file in the root directory and add Firebase configuration details.
5. **Run the Application**: `npm run dev`
6. **Open in Browser**: Visit `http://localhost:3000` to access the application.

## Configuration
Ensure to configure the following environment variables in the `.env` file:

NEXT_PUBLIC_FIREBASE_API_KEY=your-firebase-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-firebase-auth-domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-firebase-project-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-firebase-app-id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your-firebase-measurement-id

## Usage
- Sign in using your Google, Twitter, or GitHub account.
- After successful authentication, your account details will be displayed.
- Enjoy exploring the application!
