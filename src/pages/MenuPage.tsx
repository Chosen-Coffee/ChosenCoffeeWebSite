import { useState, useEffect } from "react";
import { Layout } from "@/components/Layout";
import { MenuCategory } from "@/components/MenuCategory";
import { MenuNavigation } from "@/components/MenuNavigation";
import { menuData } from "@/data/menuData";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState(menuData[0].id);

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId);
    const element = document.getElementById(categoryId);
    if (element) {
      const offset = 160;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      
      for (const category of menuData) {
        const element = document.getElementById(category.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveCategory(category.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Layout>
      {/* Header */}
      <section className="pt-28 pb-12 md:pt-32 md:pb-16 bg-card">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block px-5 py-2 rounded-full bg-secondary/20 text-primary text-sm font-medium mb-4 opacity-0 animate-fade-up font-dancing text-xl">
            Nuestra Carta
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4 opacity-0 animate-fade-up stagger-1">
            Menú
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto opacity-0 animate-fade-up stagger-2">
            Descubre nuestras bebidas y platillos preparados con ingredientes frescos y mucha dedicación.
          </p>
        </div>
      </section>

      {/* Menu Content */}
      <section className="pb-20 bg-background">
        <div className="container mx-auto px-4">
          <MenuNavigation
            activeCategory={activeCategory}
            onCategoryClick={handleCategoryClick}
          />

          <div className="mt-8 space-y-16">
            {menuData.map((category) => (
              <MenuCategory key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
