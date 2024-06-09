import { ListingGalleryImage } from "@/components/listing-image-gallery/utils/types";
import img1 from '@/images/Exteriores/inikdark/1.png';
import img2 from '@/images/Exteriores/inikdark/2.png';
import img3 from '@/images/Exteriores/inikdark/3.png';
import img4 from '@/images/Exteriores/inikdark/4.png';
import img5 from '@/images/Exteriores/inikdark/5.png';
import img6 from '@/images/Exteriores/inikdark/6.png';
import img7 from '@/images/Exteriores/inikdark/7.png';
import img8 from '@/images/Exteriores/inikdark/8.png';
import img9 from '@/images/Exteriores/inikdark/9.png';
import img10 from '@/images/Exteriores/inikdark/10.png';
import img11 from '@/images/Exteriores/inikdark/11.png';
import img12 from '@/images/Exteriores/inikdark/12.png';
import img13 from '@/images/Exteriores/inikdark/13.png';
import img14 from '@/images/Exteriores/inikdark/14.png';
import img15 from '@/images/Exteriores/inikdark/15.png';
import img16 from '@/images/Exteriores/inikdark/16.png';
import img17 from '@/images/Exteriores/inikdark/17.png';
import img18 from '@/images/Exteriores/inikdark/18.png';
import img19 from '@/images/Exteriores/inikdark/19.png';
import img20 from '@/images/Exteriores/inikdark/20.png';
import img21 from '@/images/Exteriores/inikdark/21.png';
// Agrega todas las imágenes importadas a una matriz
export const PHOTOS = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
];

export const Amenities_demos = [
  { name: "Baño", icon: "la-bath" },
  { name: "Champú", icon: "la-bottle" },
  { name: "Ducha exterior", icon: "la-shower" },
  { name: "Agua caliente", icon: "la-hot-tub" },
  { name: "Servicios básicos", icon: "la-bath" },
  { name: "Toallas, sábanas, jabón y papel higiénico", icon: "la-soap" },
  { name: "Ropa de cama", icon: "la-bed" },
  { name: "Almohadas y mantas adicionales", icon: "la-blanket" },
  { name: "Persianas o cortinas opacas", icon: "la-window" },
  { name: "TV", icon: "la-tv" },
  { name: "Cuna", icon: "la-baby-carriage" },
  { name: "Bicicletas para niños", icon: "la-bicycle" },
  { name: "Aire acondicionado de ventana", icon: "la-wind" },
  { name: "Detector de monóxido de carbono", icon: "la-bell" },
  { name: "Extintor de incendios", icon: "la-fire-extinguisher" },
  { name: "Botiquín", icon: "la-first-aid" },
  { name: "Wifi", icon: "la-wifi" },
  { name: "Zona para trabajar", icon: "la-briefcase" },
  { name: "Cocina", icon: "la-utensils" },
  { name: "Cocina disponible para el uso de los huéspedes", icon: "la-kitchen" },
  { name: "Frigorífico", icon: "la-fridge" },
  { name: "Utensilios básicos de cocina", icon: "la-utensils" },
  { name: "Cazuelas y sartenes, aceite, sal y pimienta", icon: "la-bowl" },
  { name: "Platos y cubiertos", icon: "la-plate" },
  { name: "Cuencos, palillos, platos, tazas, etc.", icon: "la-utensils" },
  { name: "Fogón", icon: "la-fire" },
  { name: "Cafetera", icon: "la-coffee" },
  { name: "Tostadora", icon: "la-toaster" },
  { name: "Acceso al lago", icon: "la-water" },
  { name: "Comedor al aire libre", icon: "la-chair" },
  { name: "Barbacoa", icon: "la-grill" },
  { name: "Aparcamiento gratuito en las instalaciones", icon: "la-parking" },
  { name: "Admite mascotas", icon: "la-paw" },
  { name: "Los animales de asistencia siempre están permitidos", icon: "la-dog" },
  { name: "Llegada autónoma", icon: "la-key" },
  { name: "Personal en el edificio", icon: "la-user" }
];

export const imageGallery: ListingGalleryImage[] = [...PHOTOS].map(
  (item, index): ListingGalleryImage => {
    return {
      id: index,
      url: item.src,
    };
  }
);
