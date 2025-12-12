import { MapPin, Clock, Phone, MessageCircle } from "lucide-react";

export const contactInfo = [
  {
    icon: MapPin,
    title: "Ubicación",
    content: "Cra. 43a #7a-09, Buenaventura, Valle del Cauca",
    link: "https://www.google.com/maps/place/Iglesia+Cristiana+TAN+SOLO+CREE/@3.8842943,-77.0229158,203m/data=!3m1!1e3!4m6!3m5!1s0x8e37258e2f07dee1:0x46aaa985e9f20924!8m2!3d3.8843171!4d-77.0231036!16s%2Fg%2F11h061b20l",
    linkText: "Ver en Google Maps",
  },
  {
    icon: Clock,
    title: "Horarios",
    content: "Martes a Viernes: 4:00 PM - 9:00 PM\nSábados & Domingos: 4:00 PM - 10:00 PM",
  },
  {
    icon: Phone,
    title: "Teléfono",
    content: "+57 305 314 2303",
    link: "tel:+573053142303",
    linkText: "Llamar ahora",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    content: "+57 305 314 2303",
    link: "https://wa.me/573053142303",
    linkText: "Enviar mensaje",
  },
];