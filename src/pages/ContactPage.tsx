import { Layout } from "@/components/Layout";
import { MapPin } from "lucide-react";
import { contactInfo } from "@/data/contactInfo";
import { socialLinks } from "@/data/socialLinks";

export default function ContactPage() {
  return (
    <Layout>
      {/* Header */}
      <section className="pt-28 pb-12 md:pt-32 md:pb-16 bg-card">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block px-5 py-2 rounded-full bg-secondary/20 text-primary text-sm font-medium mb-4 opacity-0 animate-fade-up font-dancing text-xl">
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
                className={`menu-card opacity-0 animate-fade-up stagger-${Math.min(
                  index + 1,
                  5
                )}`}
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
                  <p className="text-sm text-muted-foreground">
                    {social.handle}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-80 md:h-96 bg-muted relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d883.9947271631935!2d-77.0229158!3d3.8842943!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e37258e2f07dee1%3A0x46aaa985e9f20924!2sIglesia%20Cristiana%20TAN%20SOLO%20CREE!5e1!3m2!1ses!2sco!4v1765496395883!5m2!1ses!2sco"
            width="600"
            height="380"
            className="border-0 w-full rounded-xl"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </Layout>
  );
}
