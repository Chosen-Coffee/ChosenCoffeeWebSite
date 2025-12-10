import { MenuCategory as MenuCategoryType } from "@/data/menuData";
import { MenuItem } from "./MenuItem";

interface MenuCategoryProps {
  category: MenuCategoryType;
}

export function MenuCategory({ category }: MenuCategoryProps) {
  return (
    <section id={category.id} className="scroll-mt-24">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-2xl" role="img" aria-hidden="true">
          {category.icon}
        </span>
        <h3 className="font-display text-2xl md:text-3xl font-semibold text-primary">
          {category.name}
        </h3>
      </div>
      <div className="grid gap-3">
        {category.items.map((item, index) => (
          <MenuItem key={item.id} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}
