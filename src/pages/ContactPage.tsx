import { Layout } from "@/components/Layout";
import { MapPin, Clock, Phone, MessageCircle, Instagram, Facebook } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Ubicación",
    content: "Calle 123 #45-67, Centro, Colombia",
    link: "https://maps.google.com",
    linkText: "Ver en Google Maps",
  },
  {
    icon: Clock,
    title: "Horarios",
    content: "Lunes a Sábado: 7:00 AM - 8:00 PM\nDomingos: 8:00 AM - 6:00 PM",
  },
  {
    icon: Phone,
    title: "Teléfono",
    content: "+57 300 123 4567",
    link: "tel:+573001234567",
    linkText: "Llamar ahora",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    content: "+57 300 123 4567",
    link: "https://wa.me/573001234567",
    linkText: "Enviar mensaje",
  },
];

const socialLinks = [
  { icon: Instagram, label: "Instagram", href: "https://instagram.com/chosencoffee", handle: "@chosencoffee" },
  { icon: Facebook, label: "Facebook", href: "https://facebook.com/chosencoffee", handle: "Chosen Coffee" },
];

export default function ContactPage() {
  return (
    <Layout>
      {/* Header */}
      <section className="pt-28 pb-12 md:pt-32 md:pb-16 bg-card">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-primary text-sm font-medium mb-4 opacity-0 animate-fade-up">
            Encuéntranos
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4 opacity-0 animate-fade-up stagger-1">
            Contacto
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto opacity-0 animate-fade-up stagger-2">
            Te damos la bienvenida. Visítanos o contáctanos, estaremos encantados de atenderte.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {contactInfo.map((item, index) => (
              <div
                key={item.title}
                className={`menu-card opacity-0 animate-fade-up stagger-${Math.min(index + 1, 5)}`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-lg font-semibold text-primary mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm whitespace-pre-line">
                      {item.content}
                    </p>
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 mt-3 text-sm font-medium text-secondary hover:text-primary transition-colors"
                      >
                        {item.linkText}
                        <span className="text-lg">→</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-primary mb-8 opacity-0 animate-fade-up">
            Síguenos en redes
          </h2>
          <div className="flex items-center justify-center gap-6 opacity-0 animate-fade-up stagger-1">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-background hover:shadow-card transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center group-hover:bg-secondary/30 transition-colors">
                  <social.icon className="w-7 h-7 text-secondary" />
                </div>
                <div className="text-center">
                  <p className="font-medium text-primary">{social.label}</p>
                  <p className="text-sm text-muted-foreground">{social.handle}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-80 md:h-96 bg-muted relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-4">
            <MapPin className="w-12 h-12 text-secondary mx-auto" />
            <p className="text-muted-foreground">
              Mapa interactivo próximamente
            </p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium transition-all duration-300 hover:shadow-hover hover:scale-105"
            >
              Abrir en Google Maps
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
