import { useState } from "react";
import { Mail, Instagram, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import Layout from "@/components/layout/Layout";
import ScrollReveal from "@/components/ui/ScrollReveal";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Name is required")
    .max(100, "Name must be less than 100 characters"),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address")
    .max(255, "Email must be less than 255 characters"),
  message: z
    .string()
    .trim()
    .min(1, "Message is required")
    .max(1000, "Message must be less than 1000 characters"),
});

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form data
    const result = contactSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-primary text-primary-foreground">
        <div className="container-wide">
          <ScrollReveal>
            <p className="text-caption text-primary-foreground/70 mb-4">
              Contact Us
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="heading-display max-w-4xl">
              Let’s Design Your Story Together
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-xl text-primary-foreground/70 max-w-2xl mt-6">
              Every space has a story, and we’d love to help tell yours. Share
              your ideas, dreams, or questions with us—let’s collaborate to
              create a space that truly feels like you.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Contact Form */}
            <ScrollReveal>
              <div>
                <h2 className="heading-section mb-8">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="text-caption block mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-0 py-4 bg-transparent border-b ${
                        errors.name ? "border-destructive" : "border-border"
                      } focus:border-foreground outline-none transition-colors`}
                      placeholder="Enter your name"
                    />
                    {errors.name && (
                      <p className="text-destructive text-sm mt-2">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="text-caption block mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-0 py-4 bg-transparent border-b ${
                        errors.email ? "border-destructive" : "border-border"
                      } focus:border-foreground outline-none transition-colors`}
                      placeholder="Enter your email"
                    />
                    {errors.email && (
                      <p className="text-destructive text-sm mt-2">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="text-caption block mb-2"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className={`w-full px-0 py-4 bg-transparent border-b ${
                        errors.message ? "border-destructive" : "border-border"
                      } focus:border-foreground outline-none transition-colors resize-none`}
                      placeholder="Tell us about your project"
                    />
                    {errors.message && (
                      <p className="text-destructive text-sm mt-2">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary inline-flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send size={16} />
                  </button>
                </form>
              </div>
            </ScrollReveal>

            {/* Contact Info */}
            <ScrollReveal delay={0.2}>
              <div>
                <h2 className="heading-section mb-8">Get in Touch</h2>
                <p className="text-body mb-12">
                  Whether you're starting a new project or have questions about
                  our services, we're here to help. Reach out through any of the
                  channels below.
                </p>

                <div className="space-y-8">
                  <div>
                    <p className="text-caption mb-3">Email</p>
                    <a
                      href="mailto:architalesdesignstudio@gmail.com"
                      className="flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors"
                    >
                      <Mail size={20} />
                      <span>architalesdesignstudio@gmail.com</span>
                    </a>
                  </div>

                  <div>
                    <p className="text-caption mb-3">Instagram</p>
                    <a
                      href="https://instagram.com/architales_design_studio"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors"
                    >
                      <Instagram size={20} />
                      <span>@architales_design_studio</span>
                    </a>
                  </div>

                  <div>
                    <p className="text-caption mb-3">WhatsApp</p>
                    <a
                      href="https://wa.me/917904053785"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors"
                    >
                      <Phone size={20} />
                      <span>+91 7904053785</span>
                    </a>
                  </div>
                </div>

                <div className="mt-16 p-8 surface-elevated">
                  <h3 className="heading-card mb-4">Office Hours</h3>
                  <p className="text-muted-foreground">
                    Monday – Saturday: 10:00 AM – 6:00 PM
                    <br />
                    Sunday: By appointment only
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
