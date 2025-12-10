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
        "flex items-start justify-between gap-4 p-4 rounded-xl bg-card hover:shadow-card transition-all duration-300 group opacity-0 animate-fade-up",
        `stagger-${Math.min(index + 1, 5)}`
      )}
    >
      <div className="flex-1 min-w-0">
        <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
          {item.name}
        </h4>
        {item.description && (
          <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
        )}
      </div>
      <span className="text-secondary font-semibold whitespace-nowrap">
        {formatPrice(item.price)}
      </span>
    </div>
  );
}
