import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    
    // EmailJS configuration - Using your actual EmailJS credentials from .env
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    
    // Check if environment variables are properly loaded
    if (!serviceId || !templateId || !publicKey) {
      toast({
        title: "Configuration Error",
        description: "Email service not properly configured. Please check environment variables.",
        variant: "destructive",
      });
      setIsSending(false);
      return;
    }
    
    // Prepare template parameters with explicit mapping
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_email: "mannamganeshbabu8@gmail.com",
      reply_to: formData.email, // This ensures the reply-to header is set correctly
    };
    
    // Additional options to ensure proper email headers
    const options = {
      publicKey: publicKey,
      // Add headers to ensure proper reply-to functionality
      headers: {
        "Reply-To": formData.email,
      },
    };
    
    emailjs.send(serviceId, templateId, templateParams, options)
      .then((response) => {
        console.log("Email sent successfully!", response);
        toast({
          title: "Message Sent! 🚀",
          description: "Thank you for reaching out. I'll get back to you soon!",
        });
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
        // Handle specific EmailJS errors
        if (error.text && error.text.includes("insufficient authentication scopes")) {
          toast({
            title: "Email Service Configuration Issue",
            description: "Please check your EmailJS Gmail service configuration. You may need to re-authenticate with Gmail or use a different email service.",
            variant: "destructive",
          });
        } else {
          toast({
            title: "Error",
            description: "Failed to send message. Please try again later.",
            variant: "destructive",
          });
        }
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "mannamganeshbabu8@gmail.com",
      link: "mailto:mannamganeshbabu8@gmail.com",
      gradient: "from-primary to-accent",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7670895485",
      link: "tel:+917670895485",
      gradient: "from-accent to-purple-500",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Coimbatore, 641402, Kannampalayam",
      link: null,
      gradient: "from-purple-500 to-primary",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      <div className="absolute inset-0 bg-gradient-mesh opacity-20" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              Let's Talk
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
            Get In{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's collaborate and build something amazing together
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left Column - Info */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="p-6 md:p-8 bg-card/60 backdrop-blur-xl border-border/50 hover:border-primary/30 transition-all duration-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold">Let's Connect</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm always excited to discuss new projects, innovative ideas, or 
                opportunities to contribute to cutting-edge solutions. 
                Feel free to reach out!
              </p>
            </Card>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <Card
                  key={index}
                  className="p-5 bg-card/60 backdrop-blur-xl border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-glow group"
                >
                  {item.link ? (
                    <a href={item.link} className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-glow`}>
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
                        <p className="font-semibold group-hover:text-primary transition-colors">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-glow`}>
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
                        <p className="font-semibold">{item.value}</p>
                      </div>
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:col-span-3">
            <Card className="p-6 md:p-8 bg-card/60 backdrop-blur-xl border-border/50 hover:border-primary/30 transition-all duration-500">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-3">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="John Doe"
                    required
                    className="bg-background/50 backdrop-blur-sm border-border/50 focus:border-primary h-12 rounded-xl"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-3">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="john@example.com"
                    required
                    className="bg-background/50 backdrop-blur-sm border-border/50 focus:border-primary h-12 rounded-xl"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-3">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Tell me about your project, idea, or just say hi!"
                    rows={6}
                    required
                    className="bg-background/50 backdrop-blur-sm border-border/50 focus:border-primary resize-none rounded-xl"
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSending}
                  className="w-full bg-gradient-primary hover:shadow-glow-lg transition-all duration-500 h-12 text-base font-semibold rounded-xl group"
                  size="lg"
                >
                  {isSending ? "Sending..." : "Send Message"}
                  <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;