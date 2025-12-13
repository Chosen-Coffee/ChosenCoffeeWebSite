import { Link } from "react-router-dom";
import { ArrowRight, Coffee, Heart, Leaf } from "lucide-react";
import { Layout } from "@/components/Layout";
import heroImage from "@/assets/hero-coffee.jpg";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";

import coffee1 from "@/assets/carousel/Chosen_table_set1.jpg";
import coffee2 from "@/assets/carousel/Chosen_table_set2.jpg";
import coffee3 from "@/assets/carousel/Chosen_table_set3.jpg";

const features = [
  {
    icon: Coffee,
    title: "Café Artesanal",
    description: "Granos seleccionados y tostados con cuidado para ofrecerte el mejor sabor.",
  },
  {
    icon: Heart,
    title: "Hecho con Amor",
    description: "Cada bebida preparada con dedicación y pasión por lo que hacemos.",
  },
  {
    icon: Leaf,
    title: "Ingredientes de Calidad",
    description: "Cuidamos cada detalle para ofrecer una experiencia auténtica.",
  },
];

export default function HomePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Café artesanal con latte art"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6 opacity-0 animate-fade-up">
            
            {/* BLOQUE BIENVENIDA */}
            <span className="inline-block px-6 py-3 rounded-full bg-secondary/30 text-primary-foreground backdrop-blur-sm font-dancing text-3xl md:text-4xl">
              Bienvenidos a Chosen Coffee
            </span>

            {/* SEO / Title */}
            <h1 className="sr-only">Chosen Coffee</h1>

            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-xl mx-auto font-display">
              Nos dedicamos a crear experiencias únicas
              <span className="text-secondary"> para ti.</span>
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                to="/menu"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-secondary text-secondary-foreground font-semibold text-lg transition-all duration-300 hover:shadow-hover hover:scale-105 font-display"
              >
                Ver Menú
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
                to="/contacto"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary-foreground/10 text-primary-foreground font-medium text-lg backdrop-blur-sm border border-primary-foreground/20 transition-all duration-300 hover:bg-primary-foreground/20 font-display"
              >
                Encuéntranos
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/40 flex items-start justify-center p-1.5">
            <div className="w-1.5 h-3 rounded-full bg-primary-foreground/60" />
          </div>
        </div>
      </section>

      {/* Features + Carousel */}
      <section className="pt-24 pb-14 md:pt-28 md:pb-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14 md:mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary mb-4">
              ¿Por qué elegirnos?
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              En un mundo lleno de distracciones, Chosen Coffee ofrece un refugio.
              Un lugar donde cada detalle está pensado para inspirar y conectar.
            </p>
          </div>

          {/* Carousel */}
          <div className="relative max-w-3xl mx-auto mb-14 md:mb-20">
            <Carousel>
              <CarouselContent className="flex gap-6">
                {[coffee1, coffee2, coffee3].map((img, i) => (
                  <CarouselItem key={i} className="flex-shrink-0 w-72 sm:w-80">
                    <div className="aspect-[3/4] w-full overflow-hidden rounded-xl shadow-md">
                      <img
                        src={img}
                        alt={`Chosen Coffee ${i + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`menu-card text-center p-6 md:p-8`}
              >
                <div className="w-14 h-14 mx-auto mb-6 rounded-2xl bg-secondary/20 flex items-center justify-center">
                  <feature.icon className="w-7 h-7 text-secondary" />
                </div>

                <h3 className="font-display text-xl font-semibold text-primary mb-3">
                  {feature.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pt-16 pb-24 md:pt-20 md:pb-28 bg-card">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary">
              ¿Listo para descubrir nuevos sabores?
            </h2>
            <p className="text-muted-foreground">
              Explora nuestra carta completa y encuentra tu próximo favorito.
            </p>
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold transition-all duration-300 hover:shadow-hover hover:scale-105"
            >
              Explorar Menú
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
