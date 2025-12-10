import { menuData } from "@/data/menuData";
import { cn } from "@/lib/utils";

interface MenuNavigationProps {
  activeCategory: string;
  onCategoryClick: (categoryId: string) => void;
}

export function MenuNavigation({ activeCategory, onCategoryClick }: MenuNavigationProps) {
  return (
    <nav className="sticky top-20 z-40 -mx-4 px-4 py-4 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {menuData.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryClick(category.id)}
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200",
              activeCategory === category.id
                ? "bg-primary text-primary-foreground shadow-soft"
                : "bg-card text-muted-foreground hover:bg-secondary/20 hover:text-primary"
            )}
          >
            <span className="text-base">{category.icon}</span>
            <span>{category.name}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}
