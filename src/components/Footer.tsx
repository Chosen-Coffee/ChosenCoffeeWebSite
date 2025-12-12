import { Coffee } from "lucide-react";
import { Link } from "react-router-dom";

import { contactInfo } from "@/data/contactInfo";
import { socialLinks } from "@/data/socialLinks";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-10">
      <div className="container mx-auto px-4">

        <div className="border-t border-primary-foreground/20 mb-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">

          <div className="space-y-4 text-sm text-primary-foreground/70">

            <p>
              © {new Date().getFullYear()} Chosen Coffee | <strong className="font-dancing text-lg">Develop By: Matt</strong>
            </p>

            <div className="space-y-3 pt-2">
              {contactInfo
                .filter((item) => item.title !== "Horarios" &&   item.title !== "Teléfono") // ⬅️ OMITIR HORARIOS
                .map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <item.icon className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />

                    {item.link ? (
                      <a
                        href={item.link}
                        className="text-primary-foreground/70 hover:text-secondary transition-colors whitespace-pre-line"
                      >
                        {item.content}
                      </a>
                    ) : (
                      <span className="text-primary-foreground/70 whitespace-pre-line">
                        {item.content}
                      </span>
                    )}
                  </div>
                ))}
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">

            <Link
              to="/"
              className="flex items-center gap-2 font-display text-xl font-semibold"
            >
              <Coffee className="w-6 h-6 text-secondary" />
              <span>Chosen Coffee</span>
            </Link>

            {/* Redes sociales dinámicas */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2 rounded-full bg-primary-foreground/10 hover:bg-secondary/30 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
