import { Link } from "react-router-dom";
import { Instagram, Mail, ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-3xl md:text-4xl font-medium mb-6">
              Architales
            </h3>
            <p className="text-primary-foreground/70 max-w-md leading-relaxed">
              Architecture • Interior • Construction
              <br />
              <br />
              Design that refuses to fade with time. A bold tale of enduring
              style and presence
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-caption text-primary-foreground/50 mb-6">
              Navigation
            </h4>
            <ul className="space-y-4">
              {["Home", "About", "Services", "Projects", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                      className="text-primary-foreground/70 hover:text-primary-foreground transition-colors link-underline"
                    >
                      {item}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-caption text-primary-foreground/50 mb-6">
              Connect
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:architalesdesignstudio@gmail.com"
                  className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  <Mail size={16} />
                  <span>Email Us</span>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/architales_design_studio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  <Instagram size={16} />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/917904053785"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  <ArrowUpRight size={16} />
                  <span>WhatsApp</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} Architales Design Studio. All rights
            reserved.
          </p>
          <p className="text-sm text-primary-foreground/50">
            Designed for comfort and balance."
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
