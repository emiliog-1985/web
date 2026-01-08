
import sapuMarcoCarvajalImage from '../assets/cesfam/sapu_marco_carvajal.jpg';
import sarIrisVelizImage from '../assets/cesfam/sar_iris_veliz.jpg';
// Reusing placeholder for Rosa Vascope as no real building image was found
import placeholderImage from '../assets/cesfam/cecosf_placeholder.png';

export const urgencias = [
    {
        id: "sar-iris-veliz-hume",
        name: "SAR Iris Véliz Hume",
        type: "SAR",
        address: "Barros Luco #2345 esquina avenida Las Torres",
        phone: "58 2386862",
        hours: "Lunes a viernes: 10:00 am a 01:00 am. Sábados, domingos y festivos: 24 horas.",
        director: "Sra. Geraldine Carlevarino Weitzel",
        directorTitle: "Directora",
        coordinator: "EU. Katherine Órdenes Márquez",
        image: sarIrisVelizImage,
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1892.4764848574637!2d-70.2829241243977!3d-18.45564889973273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915aa9b0e1b0d0c3%3A0x8670104193554477!2sBarros%20Luco%202345%2C%20Arica%2C%20Arica%20y%20Parinacota!5e0!3m2!1ses!2scl!4v1714923282216!5m2!1ses!2scl"
    },
    {
        id: "sapu-marco-carvajal-moreno",
        name: "SAPU E.U. Marco Carvajal Moreno",
        type: "SAPU",
        address: "Cancha Rayada #4149",
        phone: "58 2204840",
        hours: "Lunes a viernes: 17:00 a 08:00 hrs. Sábados, domingos y festivos: 24 horas.",
        director: "Sr. Cristian Hernández Vergara",
        directorTitle: "Director",
        coordinator: "EU. Gonzalo Muñoz Moya",
        image: sapuMarcoCarvajalImage,
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.877864857432!2d-70.27985792440879!3d-18.443981599818804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915aa9abc76dc2af%3A0x88c9a623f958348d!2sCancha%20Rayada%204149%2C%20Arica%2C%20Arica%20y%20Parinacota!5e0!3m2!1ses!2scl" // Approximate location based on CESFAM Amador Neghme
    },
    {
        id: "sapu-rosa-vascope-zarzola",
        name: "SAPU Matrona Rosa Vascopé Zarzola",
        type: "SAPU",
        address: "Volcán Guallatire #1070",
        phone: "58 233250281",
        hours: "Lunes a viernes: 17:00 a 24:00 hrs. Sábados, domingos y festivos: 08:00 a 24:00 hrs.",
        director: "Sra. Carmen Chandia Ibañez",
        directorTitle: "Directora",
        coordinator: "EU. Eduardo Farfán Castillo",
        image: placeholderImage,
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1891.801648943896!2d-70.30605963287796!3d-18.487428800000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915aa9a65d0b04c9%3A0xe53412590214c77c!2sVolc%C3%A1n%20Guallatire%201070%2C%20Arica%2C%20Arica%20y%20Parinacota!5e0!3m2!1ses!2scl"
    }
];
