# EmailJS Setup for Contact Form

To enable the contact form to send real emails, you need to set up an EmailJS account and configure the service. Follow these steps:

## 1. Create EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/) and create a free account
2. Verify your email address

## 2. Set Up Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Connect your email service (Gmail, Outlook, etc.) or use the default EmailJS service
3. Note down the Service ID

## 3. Create Email Template

1. Go to "Email Templates" in the dashboard
2. Create a new template
3. Use the following template structure:
   ```
   Subject: New message from {{from_name}}
   
   Hello,
   
   You received a new message from your portfolio website.
   
   From: {{from_name}} ({{from_email}})
   
   Message:
   {{message}}
   
   ---
   This message was sent from your portfolio contact form.
   ```
4. Note down the Template ID

## 4. Get Public Key

1. Go to "Account" → "API Keys"
2. Copy your Public Key (not the private key)

## 5. Configure Environment Variables

Create a `.env` file in your project root with the following variables:

```
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

Replace the placeholder values with your actual EmailJS credentials.

## 6. Test the Contact Form

1. Save all changes
2. Restart your development server
3. Try submitting the contact form
4. You should receive the email at mannamganeshbabu8@gmail.com

## Troubleshooting

If emails aren't sending:
1. Check that all environment variables are correctly set
2. Verify your EmailJS service is properly configured
3. Check browser console for any error messages
4. Make sure you're not exceeding EmailJS free tier limits