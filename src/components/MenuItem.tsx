import { MenuItem as MenuItemType, formatPrice } from "@/data/menuData";
import { cn } from "@/lib/utils";

interface MenuItemProps {
  item: MenuItemType;
  index: number;
}

export function MenuItem({ item, index }: MenuItemProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-4 p-4 rounded-2xl bg-card border border-border/50 hover:shadow-hover hover:border-secondary/30 transition-all duration-300 group opacity-0 animate-fade-up",
        `stagger-${Math.min(index + 1, 5)}`
      )}
    >
      {item.image && (
        <div className="flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden ring-2 ring-secondary/20 group-hover:ring-secondary/40 transition-all duration-300">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
      )}
      <div className="flex-1 min-w-0">
        <h4 className="font-medium text-foreground group-hover:text-primary transition-colors text-base">
          {item.name}
        </h4>
        {item.description && (
          <p className="text-sm text-muted-foreground mt-0.5">{item.description}</p>
        )}
      </div>
      <span className="text-secondary font-bold text-lg whitespace-nowrap">
        {formatPrice(item.price)}
      </span>
    </div>
  );
}
