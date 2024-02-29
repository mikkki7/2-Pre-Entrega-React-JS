export let productos = [
    {
        id: 1,
        image: "https://res.cloudinary.com/db2pyuqoa/image/upload/v1708378068/foto_shampoo_v0sjin.webp",
        title: "Shampoo Neutro",
        description: "Nuestro shampoo está diseñado para satisfacer las necesidades específicas de tu cabello. Ya sea que busques hidratación, reparación, volumen o control del frizz, contamos con una amplia gama de productos formulados con ingredientes de alta calidad para cuidar y mejorar la salud de tu cabello.",
        price: 2800,
        category: "Productos",
        stock: 20
    },
    
    {
        id: 2,
        image: "https://res.cloudinary.com/db2pyuqoa/image/upload/v1708378088/foto_cortando_pelo_jexeqe.webp",
        title: "Corte de Pelo",
        description: "Nuestros estilistas expertos están entrenados en las últimas técnicas de corte de pelo para hombres y mujeres. Ya sea que desees un cambio radical o simplemente un recorte para mantener tu estilo actual, te proporcionaremos un corte personalizado que resalte tus características faciales y refleje tu estilo único.",
        price: 9000,
        category: "Servicios",
        stock: 1
    },
    
    {
        id: 3,
        image: "https://res.cloudinary.com/db2pyuqoa/image/upload/v1708378066/foto_maquina_kdl50u.webp",
        title: "Cortadora de Pelo",
        description: "Para aquellos que prefieren mantener su cabello corto y bien arreglado, ofrecemos servicios de corte de pelo con las mejores herramientas y técnicas. Nuestras cortadoras de pelo de alta calidad garantizan resultados precisos y uniformes, adaptándose a tus preferencias de longitud y estilo.",
        price: 50000,
        category: "Maquinas",
        stock: 5
    },
    
    {
        id: 4,
        image: "https://res.cloudinary.com/db2pyuqoa/image/upload/v1708378089/foto_lavando_pelo_fszxze.webp",
        title: "Lavado de Pelo",
        description: "Relájate y disfruta de un momento de indulgencia con nuestro servicio de lavado de pelo. Utilizamos productos suaves y revitalizantes que limpian profundamente tu cabello y cuero cabelludo, eliminando la acumulación de residuos y dejando tu cabello suave, brillante y completamente rejuvenecido.",
        price: 3000,
        category: "Servicios",
        stock: 1
    },
    
    {
        id: 5,
        image: "https://res.cloudinary.com/db2pyuqoa/image/upload/v1708378065/foto_cera_j3ckls.webp",
        title: "Cera Voluminosa",
        description: "¿Quieres añadir volumen y textura a tu cabello? Nuestra cera voluminosa es perfecta para lograr ese aspecto lleno de cuerpo y movimiento. Formulada con ingredientes que proporcionan fijación flexible y control duradero, esta cera es ideal para crear peinados con un toque moderno y sofisticado.",
        price: 6000,
        category: "Productos",
        stock: 13
    },

    {
        id: 6,
        image: "https://res.cloudinary.com/db2pyuqoa/image/upload/v1708378068/foto_tijera_psqbnn.webp",
        title: "Tijera de Acero",
        description: "Nuestras tijeras de acero son la herramienta esencial para estilistas y peluqueros profesionales. Fabricadas con acero de alta calidad y diseñadas para brindar precisión y comodidad, estas tijeras garantizan cortes suaves y precisos en cada pasada.",
        price: 1500,
        category: "Maquinas",
        stock: 7
    },
]

export const getProducts = () => {
    return new Promise ((resolve, reject) => {
        if (productos.length > 0) {
            setTimeout(() => {
                resolve(productos);
            }, 500);
        } else {
            reject("No hay productos");
        }
    });
};

export const getProduct = (id) => {
    return new Promise ((resolve, reject) => {
        if (productos.length > 0) {
            const item = productos.find((producto) => producto.id === id);

            setTimeout(() => {
                if (item) {
                    resolve(item);
                } else {
                    reject (`No se encontro el producto ${id}`);
                }
            }, 500);
        } else {
            reject("No hay productos")
        }
    });
};