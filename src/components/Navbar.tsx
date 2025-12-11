import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Coffee } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/menu", label: "Menú" },
  { href: "/contacto", label: "Contacto" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    const closeOnScroll = () => {
      if (isOpen) setIsOpen(false);
    };
    window.addEventListener("scroll", closeOnScroll);
    return () => window.removeEventListener("scroll", closeOnScroll);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) window.scrollTo({ top: 0, behavior: "smooth" });
  }, [isOpen]);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled || !isHome
            ? "bg-card/95 backdrop-blur-md shadow-soft"
            : "bg-transparent"
        )}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link
              to="/"
              className={cn(
                "flex items-center gap-2 font-display text-xl md:text-2xl font-semibold tracking-tight transition-colors",
                !isScrolled && isHome ? "text-white" : "text-primary"
              )}
            >
              <Coffee
                className={cn(
                  "w-6 h-6 md:w-7 md:h-7 transition-colors",
                  !isScrolled && isHome ? "text-white" : "text-secondary"
                )}
              />
              <span>Chosen Coffee</span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    "relative text-sm font-medium transition-colors duration-200 py-2",
                    !isScrolled && isHome
                      ? "text-white hover:text-white"
                      : location.pathname === link.href
                      ? "text-primary"
                      : "text-muted-foreground hover:text-primary",
                    "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-secondary after:transition-all after:duration-300",
                    location.pathname === link.href
                      ? "after:w-full"
                      : "after:w-0 hover:after:w-full"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "md:hidden p-2 transition-colors",
                !isScrolled && isHome
                  ? "text-white"
                  : "text-primary hover:text-secondary"
              )}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        <div
          className={cn(
            "md:hidden absolute top-full left-0 right-0 transition-all duration-300 overflow-hidden",
            isOpen
              ? isHome && !isScrolled
                ? "max-h-64 opacity-100 bg-transparent backdrop-blur-md"
                : "max-h-64 opacity-100 bg-card/98 backdrop-blur-md shadow-soft"
              : "max-h-0 opacity-0"
          )}
        >
          <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200",
                  isHome && !isScrolled
                    ? "text-white hover:bg-white/10"
                    : location.pathname === link.href
                    ? "bg-secondary/20 text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-primary"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
