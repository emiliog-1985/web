import cerroLaCruzImage from '../assets/cesfam/cecosf_cerro_la_cruz.jpg';
import reneGarciaImage from '../assets/cesfam/cecosf_rene_garcia.png'; // Placeholder as real image not found
import miguelMassaImage from '../assets/cesfam/cecosf_miguel_massa.jpg';

export const cecosfs = [
    {
        id: "cecosf-cerro-la-cruz",
        name: "CECOSF Cerro La Cruz",
        address: "Rafael Sotomayor #1496",
        phone: "(56-58) 2206004",
        hours: "Lunes a Viernes: 08:00 a 16:48 horas, Sábados: 08:00 a 13:00 horas",
        coordinator: "Sra. Catalina Rosario Simpértigue Limare",
        director: "Sra. Carmen Chandía Ibañez", // CESFAM Director
        image: cerroLaCruzImage,
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1891.801648943896!2d-70.30605963287796!3d-18.487428800000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915aa9a65d0b04c9%3A0xe53412590214c77c!2sRafael%20Sotomayor%201496%2C%20Arica%2C%20Arica%20y%20Parinacota!5e0!3m2!1ses!2scl!4v1714923483256!5m2!1ses!2scl",
        parentCesfam: "CESFAM Matrona Rosa Vascopé Zarzola"
    },
    {
        id: "cecosf-dr-rene-garcia-valenzuela",
        name: "CECOSF Dr. René García Valenzuela",
        address: "Av. Capitán Avalos # 3473",
        phone: "(56-58) 2206004", // Using same phone as listed on website, might check later if this is generic disam number
        hours: "Lunes a Viernes: 08:00 a 16:48 horas, Sábados: 08:00 a 13:00 horas",
        coordinator: "Sra. Carolina Bustamante Castro",
        director: "Sr. Cristian Hernández Vergara", // CESFAM Director
        image: reneGarciaImage,
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.877864857432!2d-70.27985792440879!3d-18.443981599818804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915aa9abc76dc2af%3A0x88c9a623f958348d!2sCapit%C3%A1n%20%C3%81valos%203473%2C%20Arica%2C%20Arica%20y%20Parinacota!5e0!3m2!1ses!2scl!4v1714923612852!5m2!1ses!2scl",
        parentCesfam: "CESFAM Dr. Amador Neghme Rodríguez"
    },
    {
        id: "cecosf-dr-miguel-massa",
        name: "CECOSF Dr. Miguel Massa",
        address: "Francisco Urzúa #4241",
        phone: "(56-58) 2206004", // Again same phone
        hours: "Lunes a Viernes: 08:00 a 16:48 horas, Sábados: 08:00 a 13:00 horas",
        coordinator: "Sra. Carmen Andrea Martínez Sáez",
        director: "Sra. Gloria Millar Menares", // CESFAM Director
        image: miguelMassaImage,
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3785.1979927361715!2d-70.2924151244093!3d-18.429285099839955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915aa9db88b9714d%3A0x6b8b0e6e8e040683!2sFrancisco%20Urz%C3%BAa%204241%2C%20Arica%2C%20Arica%20y%20Parinacota!5e0!3m2!1ses!2scl!4v1714923689452!5m2!1ses!2scl",
        parentCesfam: "CESFAM Sr. Eugenio Petruccelli Astudillo"
    }
];
