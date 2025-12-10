import { Coffee, Instagram, Facebook, MapPin, Clock, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 font-display text-xl font-semibold">
              <Coffee className="w-6 h-6 text-secondary" />
              <span>Chosen Coffee</span>
            </Link>
            <p className="text-primary-foreground/80 text-sm leading-relaxed max-w-xs">
              Sabores que inspiran tu día. Un espacio cálido donde cada taza cuenta una historia.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-secondary/30 transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-secondary/30 transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-display text-lg font-semibold">Navegación</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm">
                Inicio
              </Link>
              <Link to="/menu" className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm">
                Menú
              </Link>
              <Link to="/contacto" className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm">
                Contacto
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-display text-lg font-semibold">Encuéntranos</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80">Calle 123 #45-67, Centro, Colombia</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Clock className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-primary-foreground/80">Lun - Sáb: 7:00 AM - 8:00 PM</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                <a href="tel:+573001234567" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  +57 300 123 4567
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-10 pt-6 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Chosen Coffee. Hecho con dedicación ☕
          </p>
        </div>
      </div>
    </footer>
  );
}
