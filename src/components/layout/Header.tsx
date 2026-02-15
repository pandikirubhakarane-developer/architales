import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Image, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/assets/logo-white.png";
import LogoName from "@/assets/logoname.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const headerBg =
    isScrolled || !isHomePage
      ? "bg-background/95 backdrop-blur-md border-b border-border"
      : "bg-transparent";

  const textColor =
    isScrolled || !isHomePage ? "text-foreground" : "text-primary-foreground";

  const logoColor =
    isScrolled || !isHomePage ? "text-foreground" : "text-primary-foreground";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerBg}`}
      >
        <div className="container-wide">
          <nav className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <Link
              to="/"
              className={`font-display text-2xl md:text-3xl font-medium tracking-tight transition-colors ${logoColor}`}
            >
              <img
                src={Logo}
                alt="logo"
                className="w-[40px] h-[40px] ml-[40px] object-cover"
              />
              <img
                src={LogoName}
                alt="logo"
                className="w-full h-[40px] object-cover"
              />
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className={`text-sm tracking-[0.15em] uppercase transition-colors link-underline ${textColor} hover:opacity-70 ${
                      location.pathname === link.path
                        ? "opacity-100"
                        : "opacity-80"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 transition-colors ${textColor}`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background pt-24 lg:hidden"
          >
            <nav className="container-wide">
              <ul className="flex flex-col gap-6 pt-8">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      className={`font-display text-3xl transition-colors ${
                        location.pathname === link.path
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
