# Professional Portfolio Website

![Portfolio Preview](public/placeholder.svg)

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Showcases projects, skills, experience, and certifications with elegant UI components.

## 🚀 Features

- **Responsive Design**: Works seamlessly across all devices
- **Modern UI**: Clean, professional design with smooth animations
- **Interactive Components**: Flip cards, typing animations, and hover effects
- **Contact Form**: Functional email system using EmailJS
- **Performance Optimized**: Fast loading and smooth navigation

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, shadcn/ui
- **UI Components**: Radix UI primitives
- **Form Handling**: React Hook Form
- **Validation**: Zod
- **Deployment**: Lovable.dev

## 📦 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to project directory
cd <YOUR_PROJECT_NAME>

# Install dependencies
npm install

# Start development server
npm run dev
```

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# EmailJS Configuration
# Sign up at https://www.emailjs.com/ to get these credentials
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### Building for Production

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Project Structure

```
src/
├── assets/           # Images and static assets
├── components/       # Reusable UI components
├── hooks/            # Custom React hooks
├── lib/              # Utility functions
├── pages/            # Page components
└── App.tsx           # Main application component
```

## 📧 Contact Form Setup

The contact form uses EmailJS to send real emails. To configure:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service and template
3. Update the environment variables in your `.env` file
4. Ensure your EmailJS template uses these parameter names:
   - `from_name` - Sender's name
   - `from_email` - Sender's email
   - `message` - Message content
   - `to_email` - Your email address
   - `reply_to` - Reply-to header

## 🌐 Deployment

Deploy directly from Lovable:

1. Open your [Lovable Project](https://lovable.dev/projects/82482a5d-665f-47f7-9da5-97310414d1c9)
2. Click on Share → Publish

### Custom Domain

To connect a custom domain:
1. Navigate to Project > Settings > Domains
2. Click Connect Domain
3. Follow the DNS configuration instructions

## 📄 License

This project is proprietary and confidential. All rights reserved.

## 👤 Author

**Manangaraj Babu**
- Email: mannamganeshbabu8@gmail.com
- Phone: +91 7670895485
- Location: Coimbatore, 641402, Kannampalayam

---

<div align="center">
  <sub>Built with ❤️ using React, TypeScript, and Tailwind CSS</sub>
</div>