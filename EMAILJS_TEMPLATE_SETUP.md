# EmailJS Template Setup Guide

To ensure your contact form works correctly and displays the user's name and email properly, you need to set up your EmailJS template with the correct parameters. Follow these steps:

## 1. Access Your EmailJS Dashboard

1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Log in to your account
3. Navigate to the "Email Templates" section

## 2. Create or Edit Your Template

1. Click on your existing template or create a new one
2. In the template editor, set up the following fields:

### Template Subject
```
New message from {{from_name}}
```

### Template Body
```
Hello,

You received a new message from your portfolio website.

From: {{from_name}} ({{from_email}})

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

### Template Reply-To Header
In the "Advanced Settings" section, set the "Reply-To" header to:
```
{{reply_to}}
```

This ensures that when you reply to the email, it goes directly to the user's email address.

## 3. Template Parameters

Make sure your template uses these exact parameter names:
- `from_name` - The sender's name
- `from_email` - The sender's email address
- `message` - The message content (this is the textarea content from the form)
- `to_email` - Your email address (where the message should be sent)
- `reply_to` - The email address to use for replies (same as from_email)

These parameters match the ones we're sending from the contact form:
```javascript
const templateParams = {
  from_name: formData.name,
  from_email: formData.email,
  message: formData.message,  // This is the textarea content
  to_email: "mannamganeshbabu8@gmail.com",
  reply_to: formData.email,
};
```

## 4. Save and Test

1. Save your template
2. Note down your Template ID (you'll need this for your .env file)
3. Test the template using the "Test" button in the EmailJS dashboard

## 5. Verify Environment Variables

Make sure your `.env` file has the correct values:
```
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

## 6. Common Issues and Solutions

### Parameter Mismatch
If you get errors about missing parameters:
1. Double-check that your template uses the exact parameter names listed above
2. Ensure there are no typos in the parameter names
3. Make sure all required parameters are included in the template

### Template Not Found
If you get a "template not found" error:
1. Verify that your Template ID in the .env file matches the one in your EmailJS dashboard
2. Make sure the template is associated with the correct service

### Email Not Showing User Information
If the received email doesn't show the user's name or email:
1. Check that your template body includes `{{from_name}}` and `{{from_email}}`
2. Verify that the contact form is sending these parameters correctly
3. Check the browser console for any errors during form submission

### Message Content Not Appearing
If the message content from the textarea is not appearing in the email:
1. Verify that your template body includes `{{message}}`
2. Check that the contact form is sending the message parameter correctly
3. Make sure there are no typos in the parameter name in either the template or the code

### Reply-To Not Working
If replying to emails doesn't go to the user's email address:
1. Make sure you've set the "Reply-To" header in the template's advanced settings
2. Verify that the `reply_to` parameter is being sent from the contact form

## 7. Testing the Contact Form

After setting up your template:
1. Restart your development server
2. Fill out the contact form with test data:
   - Name: Test User
   - Email: test@example.com
   - Message: This is a test message to verify that the textarea content is being sent correctly
3. Submit the form
4. Check your email (mannamganeshbabu8@gmail.com) for the received message
5. Verify that:
   - The email subject shows "New message from Test User"
   - The email body shows the user's name and email
   - The message content "This is a test message to verify that the textarea content is being sent correctly" appears in the email
   - The reply-to header is set to test@example.com

## Need Help?

If you continue to experience issues:
1. Check the browser console for detailed error messages
2. Verify your EmailJS account has the correct service and template configured
3. Ensure your environment variables in `.env` match your EmailJS dashboard