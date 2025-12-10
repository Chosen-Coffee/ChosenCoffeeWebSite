export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description?: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  icon: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    id: "entradas",
    name: "Entradas",
    icon: "🧀",
    items: [
      { id: "e1", name: "Tabla de frutas y queso", price: 12000 },
      { id: "e2", name: "Torta de naranja", price: 5000 },
      { id: "e3", name: "Torta de chocolate", price: 7000 },
    ],
  },
  {
    id: "especiales",
    name: "Especiales",
    icon: "⭐",
    items: [
      { id: "s1", name: "Sandwich", price: 22000 },
      { id: "s2", name: "Crepes de pollo", price: 23000 },
      { id: "s3", name: "Crepes de carne", price: 23000 },
      { id: "s4", name: "Mini hamburguesa \"para ti\"", price: 23000 },
      { id: "s5", name: "Waffles de pandebono", price: 14400 },
      { id: "s6", name: "Waffles rancheros con maicito", price: 17000 },
      { id: "s7", name: "Waffles con helado", price: 17000 },
    ],
  },
  {
    id: "bebidas-calientes",
    name: "Bebidas Calientes",
    icon: "☕",
    items: [
      { id: "bc1", name: "Café espresso", price: 4000 },
      { id: "bc2", name: "Café latte", price: 9000 },
      { id: "bc3", name: "Frapuchino", price: 9000, description: "Con crema chantilly" },
      { id: "bc4", name: "Capuchino", price: 9000, description: "Vainilla o canela" },
      { id: "bc5", name: "Café Chosen Coffee", price: 8000, description: "Tradicional de la casa" },
    ],
  },
  {
    id: "tes",
    name: "Tés",
    icon: "🍵",
    items: [
      { id: "t1", name: "Verde con piña", price: 8000 },
      { id: "t2", name: "Frutos rojos", price: 8000 },
      { id: "t3", name: "Matcha con vainilla", price: 8000 },
    ],
  },
  {
    id: "bebidas-frias",
    name: "Bebidas Frías",
    icon: "🧊",
    items: [
      { id: "bf1", name: "Cerezada", price: 12000 },
      { id: "bf2", name: "Limonada de hierbabuena", price: 12000 },
      { id: "bf3", name: "Limonada de coco", price: 12000 },
      { id: "bf4", name: "Aguas saborizadas", price: 5000, description: "Maracuyá o frutos rojos" },
      { id: "bf5", name: "Pony", price: 3000 },
      { id: "bf6", name: "Coca Cola", price: 5000 },
    ],
  },
];

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};
