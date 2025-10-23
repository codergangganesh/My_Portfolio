// Utility function to help with EmailJS template parameter mapping
export interface EmailJSTemplateParams {
  from_name: string;
  from_email: string;
  message: string;
  to_email: string;
  [key: string]: string; // Allow additional parameters
}

export const createEmailJSTemplateParams = (
  name: string,
  email: string,
  message: string,
  toEmail: string = "mannamganeshbabu8@gmail.com"
): EmailJSTemplateParams => {
  return {
    from_name: name,
    from_email: email,
    message: message,
    to_email: toEmail,
  };
};

// Default template parameters structure
export const DEFAULT_TEMPLATE_PARAMS: EmailJSTemplateParams = {
  from_name: "",
  from_email: "",
  message: "",
  to_email: "mannamganeshbabu8@gmail.com",
};