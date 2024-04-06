# Firebase Authentication Integration with Next.js

## Overview
This project enhances the authentication mechanism using **Firebase Authentication** with **Next.js** framework. It enables users to sign in using their **Google**,  **Twitter**, or **GitHub** accounts and displays their account details upon successful authentication. Additionally, the system maintains configurations for token refresh, idle timeout, and session expiry to ensure security and user experience.

Visit Here for Demo : https://nextjs-auth-xi-flame.vercel.app/

## Features
- **Multi-provider Authentication**: Users can sign in using Google, Twitter, or GitHub accounts.
- **User Account Details Display**: After successful login, users can view their account details such as name and email.
- **Token Refresh**: Users' authentication tokens automatically refresh every 5 minutes to ensure seamless access to protected resources. (https://github.com/virajkini/nextjs-auth/blob/main/src/app/utils/auth/authManager.ts)
- **Idle Timeout**: Implement an idle timeout feature that automatically logs the user out after 30 minutes of inactivity. Any user action should reset this timer.
- **Session Expiry**: Define a session expiry policy where users are required to re-authenticate after 1 hour of continuous usage.
- **Responsive Design**: The design is responsive, ensuring compatibility across various devices and screen sizes.
- **Secure Environment Variables**: Environment variables aren't pushed to the repository for security purposes.
- **Protected Profile Route**: Profile is wrapped with a withAuth wrapper that redirects to the homepage if the user is not logged in. (https://github.com/virajkini/nextjs-auth/tree/main/src/app/wrappers/withAuth)
- **React Context for Authentication**: Used React context to handle authentication and pass state across components. (https://github.com/virajkini/nextjs-auth/blob/main/src/app/context/AuthContext.tsx)
- **Server Authentication**: Haven't implemented server authentication, but it can be achieved by intercepting the redirect URL using getRedirectResult and calling the login API of the server. On the server side, Firebase Admin can be used to verify tokens and return a session ID in the cookie.

## Challenges Faced
- **FirebaseUI Implementation**: Had to understand how Next.js renders the page and lazy load the login component to disable SSR since FirebaseUI needed the window object.
- **Next.js Middleware for Authorization**: Tried using Next.js middleware to authorize routes but understood it's only possible on the server side and was giving errors when the user object was accessed for the context API.


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

- NEXT_PUBLIC_FIREBASE_API_KEY=your-firebase-api-key
- NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-firebase-auth-domain
- NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-firebase-project-id
- NEXT_PUBLIC_FIREBASE_APP_ID=your-firebase-app-id
- NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your-firebase-measurement-id

## Usage
- Sign in using your Google, Twitter, or GitHub account.
- After successful authentication, your account details will be displayed.
- Enjoy exploring the application!
