# Personal Portfolio - NextJS User Frontend

[![Live Site](https://img.shields.io/badge/Live%20Site-Visit-brightgreen)](https://rakesh-biswas-portfolio-nextjs.vercel.app/)
[![GitHub Repo](https://img.shields.io/badge/GitHub-Repository-blue)](https://github.com/Rakesh01999/portfolio-nextjs-user-frontend)

![Portfolio Banner](https://i.postimg.cc/wBjW6bvF/banner.jpg)

## 📌 Overview

This is the user-facing frontend for my personal portfolio website built with Next.js. The portfolio showcases my professional background, skills, projects, and blog content in a responsive, dynamic interface with modern animations.

## ✨ Features

- **Professional UI/UX** - Modern, unique, and visually appealing design
- **Fully Responsive** - Optimized for all device sizes
- **Dynamic Content** - All sections are dynamically rendered from backend data
- **Animations** - Smooth animations for better user experience
- **Authentication** - Secure login for admin functionality

## 📋 Sections

1. **Hero Banner** - Professional introduction and designation
2. **About Me** - Personal introduction and background
3. **Resume** - Education background with downloadable CV option
4. **Experience** - Work history and professional experience
5. **Skills** - Technical skills and soft skills showcase
6. **Projects** - Featured projects with details and links
7. **Blog** - Latest blog articles with detail pages
8. **Contact** - Contact information and contact form
9. **Footer** - Social links and additional information

## 🛠️ Technology Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Context/Redux
- **Authentication**: NextAuth.js
- **Animations**: Framer Motion
- **Form Handling**: React Hook Form
- **API Integration**: Axios/SWR/React Query
- **UI Components**: Headless UI/Shadcn UI

## 🚀 Installation & Setup

### Prerequisites
- Node.js 18+ installed
- Backend API running

### Installation

1. Clone the repository
```bash
git clone https://github.com/Rakesh01999/portfolio-nextjs-user-frontend
cd portfolio-nextjs-user-frontend
```

2. Install dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Configure environment variables
```bash
cp .env.example .env.local
```
Then edit `.env.local` with your configuration:
```
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

4. Run the development server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📦 Build & Deployment

```bash
# Build the application
npm run build
# or
yarn build

# Start production server
npm start
# or
yarn start
```

## 🔗 Related Repositories

- [Portfolio - NextJS Admin Frontend](https://github.com/Rakesh01999/portfolio-nextjs-admin-frontend)
- [Portfolio - NextJS Backend](https://github.com/Rakesh01999/portfolio-nextjs-backend)

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

Rakesh Biswas - [My Website](https://rakesh-biswas-portfolio-nextjs.vercel.app/)