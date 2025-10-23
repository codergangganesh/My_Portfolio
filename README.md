# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/82482a5d-665f-47f7-9da5-97310414d1c9

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/82482a5d-665f-47f7-9da5-97310414d1c9) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Contact Form Functionality

The contact form is now fully functional and sends real emails using EmailJS.

Your contact details:
- **Email**: mannamganeshbabu8@gmail.com
- **Phone**: +91 7670895485
- **Location**: Coimbatore, 641402, Kannampalayam

When visitors submit the contact form, you will receive an email at mannamganeshbabu8@gmail.com with their message. The email will include:
- The visitor's name
- The visitor's email address
- **The full content of their message from the textarea**
- Proper reply-to headers so you can easily respond

### Setting Up EmailJS Template

To ensure the contact form works correctly:
1. Follow the instructions in [EMAILJS_TEMPLATE_SETUP.md](EMAILJS_TEMPLATE_SETUP.md)
2. Make sure your EmailJS template uses the correct parameter names:
   - `from_name` for the sender's name
   - `from_email` for the sender's email
   - `message` for the textarea content (this is what you're asking about)
   - `to_email` for your email address
   - `reply_to` for proper reply functionality

### Troubleshooting Email Issues

If you encounter authentication errors with EmailJS:
1. Check [EMAILJS_GMAIL_FIX.md](EMAILJS_GMAIL_FIX.md) for solutions
2. The most common issue is insufficient Gmail authentication scopes
3. You may need to re-authenticate your Gmail account or use EmailJS SMTP service

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/82482a5d-665f-47f7-9da5-97310414d1c9) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)