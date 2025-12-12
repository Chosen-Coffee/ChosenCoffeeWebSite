import { Link } from "react-router-dom";
import { ArrowRight, Coffee, Heart, Leaf } from "lucide-react";
import { Layout } from "@/components/Layout";
import heroImage from "@/assets/hero-coffee.jpg";

const features = [
  {
    icon: Coffee,
    title: "Café Artesanal",
    description: "Granos seleccionados y tostados con cuidado para ofrecerte el mejor sabor.",
  },
  {
    icon: Heart,
    title: "Hecho con Amor",
    description: "Cada bebida y platillo preparado con dedicación y pasión por lo que hacemos.",
  },
  {
    icon: Leaf,
    title: "Ingredientes Frescos",
    description: "Utilizamos ingredientes frescos y de calidad en todas nuestras preparaciones.",
  },
];

export default function HomePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
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
            <span className="inline-block px-5 py-2 rounded-full bg-secondary/30 text-primary-foreground text-sm font-medium backdrop-blur-sm font-dancing text-xl">
              Bienvenidos a Chosen Coffee
            </span>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight">
              Sabores que inspiran{" "}
              <span className="text-secondary">tu día</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-xl mx-auto">
              Un espacio cálido donde cada taza cuenta una historia. Disfruta de nuestras bebidas y platillos hechos con dedicación.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                to="/menu"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-secondary text-secondary-foreground font-semibold text-lg transition-all duration-300 hover:shadow-hover hover:scale-105"
              >
                Ver Menú
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contacto"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary-foreground/10 text-primary-foreground font-medium backdrop-blur-sm border border-primary-foreground/20 transition-all duration-300 hover:bg-primary-foreground/20"
              >
                Encuéntranos
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/40 flex items-start justify-center p-1.5">
            <div className="w-1.5 h-3 rounded-full bg-primary-foreground/60" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary mb-4 opacity-0 animate-fade-up">
              ¿Por qué elegirnos?
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto opacity-0 animate-fade-up stagger-1">
              En Chosen Coffee nos dedicamos a crear experiencias únicas para ti.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`menu-card text-center opacity-0 animate-fade-up stagger-${index + 2}`}
              >
                <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-secondary/20 flex items-center justify-center">
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

      {/* CTA Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-6 opacity-0 animate-fade-up">
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
