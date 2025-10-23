# Fixing EmailJS Gmail Authentication Scopes Issue

The error "Gmail_API: Request had insufficient authentication scopes" occurs when your EmailJS Gmail service doesn't have the proper permissions. Here's how to fix it:

## Solution 1: Re-authenticate Your Gmail Account

1. Log in to your [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Go to "Email Services"
3. Find your Gmail service and click on it
4. Click "Connect Account" or "Reconnect"
5. When prompted, make sure to grant all requested permissions
6. Complete the authentication process

## Solution 2: Use EmailJS SMTP Service (Recommended)

Instead of using Gmail directly, you can use EmailJS's SMTP service which is more reliable:

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Select "EmailJS SMTP"
4. Configure with your email provider's SMTP settings:
   - For Gmail:
     - SMTP Server: smtp.gmail.com
     - Port: 465 (SSL) or 587 (TLS)
     - Username: your Gmail address
     - Password: your Gmail password or app-specific password
   - For other providers, check their SMTP settings documentation

## Solution 3: Use a Different Email Provider

If Gmail continues to cause issues, consider using a different email service:
1. Outlook/Hotmail
2. Yahoo Mail
3. Custom domain email (if you have one)

## Creating an App-Specific Password for Gmail

If you want to continue using Gmail:

1. Go to your Google Account settings
2. Navigate to Security
3. Enable 2-Factor Authentication if not already enabled
4. Go to "App passwords"
5. Generate a new app password for EmailJS
6. Use this app password instead of your regular Gmail password in EmailJS

## Testing the Fix

After making these changes:
1. Restart your development server
2. Try submitting the contact form again
3. Check your browser console for any errors
4. Verify that you receive the test email at mannamganeshbabu8@gmail.com

## Need Help?

If you continue to experience issues:
1. Check the browser console for detailed error messages
2. Verify your EmailJS account has the correct service configured
3. Ensure your environment variables in `.env` match your EmailJS dashboard