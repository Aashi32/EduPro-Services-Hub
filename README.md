# EduPro Services Hub

EduPro Services Hub is a comprehensive platform offering various educational services, including web development, responsive web design, mobile app development, e-commerce solutions, SEO optimization, and UX/UI design. Users can register, log in, and access these services easily.


## Features

- **Web Development:** Crafting tailor-made websites and web applications.
- **Responsive Web Design:** Creating visually appealing and adaptable websites.
- **Mobile App Development:** Developing intuitive and user-friendly mobile applications for iOS and Android.
- **E-commerce Solutions:** Building robust and scalable e-commerce platforms.
- **SEO Optimization:** Enhancing website visibility on search engines.
- **UX/UI Design:** Designing user-centered interfaces and experiences.

## Installation

1. **Clone the repository:**

   git clone https://github.com/Aashi32/EduPro-Services-Hub.git
   cd EduPro-Services-Hub
2. **Install dependencies for the server:**

   cd server
   npm install
3. **Install dependencies for the client:**

   cd ../client
   npm install

## Environment Variables
Create a .env file in the server directory and add the following environment variables:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

-> Running the Project
... Start the server:
cd server
nodemon server.js
... Start the client:
cd client
npm run dev


## Usage
Register: Create a new account to access services.<br>
Login: Log in with your credentials.<br>
Access Services: Browse and select from various educational services.<br>
