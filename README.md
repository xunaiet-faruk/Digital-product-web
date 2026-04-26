# Trainer Portfolio - E-Learning Platform

A modern, feature-rich e-learning platform built with Next.js 16, Firebase Authentication, and Tailwind CSS v4. Users can explore courses, view details, and manage a shopping cart using local storage.

---

🌐 Live & Source Code
🔗 Live Site: https://digital-product-web-mu.vercel.app
💻 GitHub: https://github.com/xunaiet-faruk/Digital-product-web

## Features

### Authentication
- Email & Password Login/Registration
- Google OAuth Integration
- Protected Routes for secure pages
- Session management via Firebase Auth

### Course Management
- Browse all courses with filtering
- Course details with instructor info
- Add new courses (Admin)
- Manage & Edit existing courses


### Admin Dashboard 

// Now its a static data //

- Stats Cards - Total students, revenue, courses
- Revenue Chart - Visual earnings data
- Recent Orders - Latest transactions
- Top Products - Best-selling courses
- Activity Log - User activities

### UI/UX
- Responsive design (Mobile-first)
- Smooth animations with Framer Motion
- Interactive charts with Recharts
- Beautiful alerts with SweetAlert2
- DaisyUI components

---

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 16.2.1 |
| Language | JavaScript / React 19 |
| Styling | Tailwind CSS v4 + DaisyUI |
| Backend | Local-storage |
| Animations | Framer Motion |
| Charts | Recharts |
| Alerts | SweetAlert2 |
| Icons | React Icons |

---

## Project Structure

trainer-portfolio/
+-- src/app/
�   +-- page.js                    # Home page
�   +-- layout.js                  # Root layout
�   +-- globals.css                # Global styles
�   +-- about/                     # About page
�   +-- addcourses/                # Add new course
�   +-- admin/                     # Admin dashboard
�   �   +-- data/                  # Dashboard data
�   +-- Authentication/
�   �   +-- login/                 # Login page
�   �   +-- register/              # Registration page
�   +-- cart/                      # Shopping cart
�   +-- components/                # Reusable components
�   �   +-- ProtectedRoute/        # Auth protection
�   �   +-- home/                  # Home sections
�   +-- context/
�   �   +-- AuthProvider.jsx       # Auth context
�   +-- courses/                   # Course listing
�   +-- data/
�   �   +-- courses.json           # Course data
�   +-- manage-courses/            # Manage courses
�   +-- tamplates/                 # Templates
+-- public/                        # Static assets
+-- next.config.mjs                # Next.js config
+-- postcss.config.mjs             # PostCSS config
+-- tailwind.config (via CSS)      # Tailwind v4
+-- package.json                   # Dependencies

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm / yarn / pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/xunaiet-faruk/Digital-product-web

# Navigate to project
cd trainer-portfolio

# Install dependencies
npm install

# Run development server
npm run dev
```

Open http://localhost:3000 in your browser.

### Build for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

---



## Pages Overview

| Route | Description |
|-------|-------------|
| / | Home - Hero, Courses, Categories, Products, Testimonials |
| /about | About the platform |
| /courses | All available courses |
| /courses/[id] | Course details |
| /cart | Shopping cart |
| /Authentication/login | User login |
| /Authentication/register | User registration |
| /admin | Admin dashboard |
| /addcourses | Add new course (Admin) |
| /manage-courses | Manage courses (Admin) |
| /manage-courses/[id] | Edit specific course |

---

## Key Components

- ProtectedRoute - Wraps protected pages, redirects unauthenticated users
- AuthProvider - Global auth state management
- StatsCards - Dashboard statistics display
- RevenueChart - Earnings visualization
- RecentOrders - Latest order list
- TopProducts - Best performing courses

---


⚠️ Important Notes
This project uses localStorage for add course and Manage courses state management.
No real payment gateway is integrated.
No backend database is used for orders.


## License

MIT License - Feel free to use this project for learning and development.

---

## Acknowledgments

- Next.js (https://nextjs.org)
- Firebase (https://firebase.google.com)
- Tailwind CSS (https://tailwindcss.com)
- DaisyUI (https://daisyui.com)
- Framer Motion (https://www.framer.com/motion/)
- Vercel (https://vercel.com)

---

