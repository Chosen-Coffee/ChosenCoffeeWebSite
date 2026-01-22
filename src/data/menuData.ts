export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description?: string;
  image?: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  icon: string;
  items: MenuItem[];
}

// Image imports
import tablaFrutasQueso from "@/assets/menu/tabla-frutas-queso.jpg";
import tortaNaranja from "@/assets/menu/torta-naranja.jpg";
import tortaChocolate from "@/assets/menu/torta-chocolate.jpg";
import sandwich from "@/assets/menu/sandwich.jpg";
import crepesPollo from "@/assets/menu/crepes-pollo.jpg";
import crepesCarne from "@/assets/menu/crepes-carne.jpg";
import miniHamburguesa from "@/assets/menu/mini-hamburguesa.jpg";
import wafflesPandebono from "@/assets/menu/waffles-pandebono.jpg";
import wafflesRancheros from "@/assets/menu/waffles-rancheros.jpg";
import wafflesHelado from "@/assets/menu/waffles-helado.jpg";
import cafeEspresso from "@/assets/menu/cafe-espresso.jpg";
import cafeLatte from "@/assets/menu/cafe-latte.jpg";
import frapuchino from "@/assets/menu/frapuchino.jpg";
import capuchino from "@/assets/menu/capuchino.jpg";
import cafeChosen from "@/assets/menu/cafe-chosen.jpg";
import teVerdePina from "@/assets/menu/te-verde-pina.jpg";
import teFrutosRojos from "@/assets/menu/te-frutos-rojos.jpg";
import teMatcha from "@/assets/menu/te-matcha.jpg";
import cerezada from "@/assets/menu/cerezada.jpg";
import limonadaHierbabuena from "@/assets/menu/limonada-hierbabuena.jpg";
import limonadaCoco from "@/assets/menu/limonada-coco.jpg";
import aguasSaborizadas from "@/assets/menu/aguas-saborizadas.jpg";
import cocaCola from "@/assets/menu/coca-cola.png";
import milo from "@/assets/menu/milo.png";
import quatro from "@/assets/menu/quatro.png";
import ponyMini from "@/assets/menu/pony-mini.png";
import premioRojo from "@/assets/menu/premio-rojo.png";
import croissant from "@/assets/menu/croissant.png";
import aguaNatural from "@/assets/menu/agua-natural.png";
import aguaSaborizada from "@/assets/menu/agua-saborizada.png"

export const menuData: MenuCategory[] = [
  {
    id: "entradas",
    name: "Entradas",
    icon: "🧀",
    items: [
      { id: "e1", name: "Tabla de frutas y queso", price: 18000, image: tablaFrutasQueso },
      { id: "e2", name: "Torta de naranja", price: 5000, image: tortaNaranja },
      { id: "e3", name: "Torta de chocolate", price: 8000, image: tortaChocolate },
      { id: "e4", name: "Croissant", price: 3000, image: croissant },
    ].sort((a, b)=> a.price - b.price),
  },
  {
    id: "especiales",
    name: "Especiales",
    icon: "⭐",
    items: [
      { id: "s1", name: "Sandwich Especial", price: 22000, image: sandwich },
      { id: "s2", name: "Crepes de pollo", price: 24000, image: crepesPollo },
      { id: "s3", name: "Crepes de carne", price: 24000, image: crepesCarne },
      { id: "s4", name: "Hamburguesa \"para ti\"", price: 24000, image: miniHamburguesa },
      { id: "s5", name: "Waffles de pandebono y arequipe", price: 15000, image: wafflesPandebono },
      { id: "s6", name: "Waffles rancheros con maicito", price: 20000, image: wafflesRancheros },
      { id: "s7", name: "Waffles con helado", price: 15000, image: wafflesHelado },
    ].sort((a, b)=> a.price - b.price),
  },
  {
    id: "bebidas-calientes",
    name: "Bebidas Calientes",
    icon: "☕",
    items: [
      { id: "bc1", name: "Café espresso", price: 4000, image: cafeEspresso },
      { id: "bc2", name: "Café Chosen Coffee", price: 8000, description: "Tradicional de la casa", image: cafeChosen },
      { id: "bc3", name: "Café latte", price: 9000, image: cafeLatte },
      { id: "bc4", name: "Capuchino", price: 9000, description: "Vainilla o canela", image: capuchino },
      { id: "bc4", name: "Milo", price: 9000, image: milo },
    ].sort((a, b)=> a.price - b.price),
  },
  {
    id: "tes",
    name: "Tés",
    icon: "🍵",
    items: [
      { id: "t1", name: "Verde con piña", price: 8000, image: teVerdePina },
      { id: "t2", name: "Frutos rojos", price: 8000, image: teFrutosRojos },
      { id: "t3", name: "Matcha con vainilla", price: 8000, image: teMatcha },
    ].sort((a, b)=> a.price - b.price),
  },
  {
    id: "bebidas-frias",
    name: "Bebidas Frías",
    icon: "🧊",
    items: [
      { id: "bf1", name: "Frapuchino", price: 12000, description: "Con crema chantilly", image: frapuchino },
      { id: "bf2", name: "Cerezada", price: 12000, image: cerezada },
      { id: "bf3", name: "Limonada de hierbabuena", price: 12000, image: limonadaHierbabuena },
      { id: "bf4", name: "Limonada de coco", price: 12000, image: limonadaCoco },
      { id: "bf5", name: "Agua Saborizada", price: 5000, image: aguaSaborizada },
      { id: "bf6", name: "Pony \"mini\"", price: 3000, image: ponyMini },
      { id: "bf7", name: "Coca Cola", price: 5000, image: cocaCola },
      { id: "bf8", name: "Quatro", price: 3000, image: quatro },
      { id: "bf9", name: "Premio Rojo", price: 3000, image: premioRojo },
      { id: "bf10", name: "Agua Natural", price: 3000, image: aguaNatural },
    ].sort((a, b)=> a.price - b.price),
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
