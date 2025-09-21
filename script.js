// =====================================
// Lógica para el cambio de idioma
// =====================================

// Objeto de traducciones
const translations = {
    "es": {
        "nav": {
            "home": "Inicio",
            "features": "Características",
            "who_are_we": "¿Quiénes somos?",
            "about_product": "Sobre el producto",
            "plans": "Planes",
            "faq": "Preguntas"
        },
        "hero": {
            "title": "FoodStock",
            "subtitle1": "Gestiona tus ventas e ingredientes",
            "subtitle2": "Optimiza tu inventario y ventas con Foodstock",
            "button": "Empezar"
        },
        "features": {
            "title": "Características",
            "card1_title": "Gestión de inventario en tiempo real",
            "card1_text": "Visualiza tus ingredientes y productos disponibles, con actualizaciones automáticas al registrar ventas.",
            "card2_title": "Alertas de stock bajo",
            "card2_text": "Recibe notificaciones cuando algún producto esté a punto de agotarse.",
            "card3_title": "Reportes y estadísticas",
            "card3_text": "Analiza tus ventas, ingredientes más usados y tendencias en gráficos fáciles de entender.",
            "card4_title": "Control de caducidad",
            "card4_text": "Lleva un registro de las fechas de vencimiento para reducir desperdicios.",
            "card5_title": "Gestión de proveedores",
            "card5_text": "Guarda tus proveedores y organiza pedidos directamente desde la plataforma.",
            "card6_title": "Reservaciones inteligentes",
            "card6_text": "Vincula tus reservas con el inventario, asegurando que siempre tengas los ingredientes listos."
        },
        "who_we_are": {
            "title": "¿Quiénes somos?",
            "mission_title": "Misión",
            "mission_text": "“Optimizar la gestión de inventarios y ventas en restaurantes y negocios gastronómicos, ofreciendo una plataforma digital sencilla, eficiente y accesible que reduzca pérdidas y aumente la rentabilidad.”",
            "vision_title": "Visión",
            "vision_text": "“Ser la solución líder en Latinoamérica para la digitalización de negocios gastronómicos, reconocida por su innovación, confiabilidad y apoyo al crecimiento de la industria.”"
        },
        "team": {
            "title": "Nosotros",
            "subtitle": "Integrantes de FoodStock",
            "member1_name": "Melina Liz Santillan Alvarado",
            "member1_desc": "Soy estudiante de la carrera de Ingeniería de Software en la UPC y tengo 21 años.",
            "member2_name": "Jean Pool Huaman De La Cruz",
            "member2_desc": "Soy estudiante de la carrera de Ingeniería de Software en la UPC y tengo 22 años.",
            "member3_name": "Javier Masaru Nikaido Vargas",
            "member3_desc": "Estudiante de Ingeniería de Software de 5to ciclo de la Universidad Peruana de Ciencias.",
            "member4_name": "Gonzalo Samuel Quintanilla Pozo",
            "member4_desc": "Soy estudiante de la carrera de Ingeniería de Software de la UPC y tengo 20 años.",
            "member5_name": "José María Franco del Carpio",
            "member5_desc": "Soy estudiante de la carrera de Ingeniería de Software de la UPC y tengo 20 años."
        },
        "about_product": {
            "title": "Sobre el producto",
            "text1": "FoodStock es una plataforma web diseñada para restaurantes, microempresas y emprendedores gastronómicos que buscan simplificar la gestión de inventario, optimizar ventas y reducir pérdidas por productos perecibles.",
            "text2": "Con FoodStock podrás:",
            "feature1": "Gestionar inventario en tiempo real: visualiza tus insumos, cantidades y fechas de vencimiento.",
            "feature2": "Obtener reportes automáticos: controla gastos, ventas diarias y desempeño de productos.",
            "feature3": "Recibir alertas inteligentes: notificaciones de bajo stock y de insumos cercanos a vencer.",
            "feature4": "Organizar reservas y pedidos: administra clientes y mesas con un calendario integrado.",
            "feature5": "Facilitar pagos y boletas: integración con medios digitales como Yape, Plin."
        },
        "pricing": {
            "title": "Planes",
            "btn_monthly": "Mensual",
            "btn_yearly": "Anual",
            "plan_standard": "Estándar",
            "plan_premium": "Premium",
            "feature1_standard": "Gestión básica de inventario (entradas y salidas).",
            "feature2_standard": "Alertas de bajo stock y productos próximos a vencer.",
            "feature3_standard": "Reportes diarios de ventas y gastos.",
            "feature4_standard": "1 usuario administrador.",
            "feature5_standard": "Acceso desde web y dispositivos móviles.",
            "feature1_premium": "Todas las funciones del plan Estándar.",
            "feature2_premium": "Gestión de reservas y calendario de mesas.",
            "feature3_premium": "Alertas inteligentes avanzadas.",
            "feature4_premium": "Reportes personalizados.",
            "feature5_premium": "Generación automática de boletas/facturas.",
            "btn_select": "Button"
        },
        "faq": {
            "title": "Preguntas frecuentes",
            "subtitle": "Respuestas rápidas a tus consultas",
            "q1": "¿Qué es FoodStock?",
            "a1": "Foodstock es una plataforma digital que ayuda a emprendedores y microempresas a gestionar su inventario, ventas y reservas de manera rápida y sencilla.",
            "q2": "¿Necesito conocimientos técnicos para usar FoodStock?",
            "a2": "No, la plataforma está diseñada para ser intuitiva y fácil de usar, sin necesidad de conocimientos técnicos avanzados.",
            "q3": "¿FoodStock funciona en celular?",
            "a3": "Sí, la aplicación es responsive y se adapta perfectamente a dispositivos móviles.",
            "q4": "¿Qué pasa si tengo varios usuarios en mi negocio?",
            "a4": "El plan premium permite múltiples usuarios para que tu equipo pueda colaborar.",
            "q5": "¿Cómo me avisa la plataforma cuando un producto está por vencer?",
            "a5": "La plataforma envía notificaciones automáticas por correo electrónico o dentro de la aplicación cuando la fecha de vencimiento de un producto está próxima."
        },
        "footer": {
            "logo": "FoodStock",
            "tagline": "Optimiza la gestión de tu negocio con una plataforma digital simple, rápida y confiable.",
            "platform_title": "Plataforma",
            "platform_link1": "Cómo funciona",
            "platform_link2": "Servicios",
            "platform_link3": "Precios",
            "platform_link4": "FAQ",
            "company_title": "Empresa",
            "company_link1": "Sobre nosotros",
            "company_link2": "Misión y Visión",
            "company_link3": "Equipo",
            "company_link4": "Blog",
            "legal_title": "Legal",
            "legal_link1": "Términos y servicios",
            "legal_link2": "Política de Privacidad",
            "legal_link3": "Cookies"
        }
    },
    "en": {
        "nav": {
            "home": "Home",
            "features": "Features",
            "who_are_we": "About Us",
            "about_product": "About the product",
            "plans": "Plans",
            "faq": "FAQ"
        },
        "hero": {
            "title": "FoodStock",
            "subtitle1": "Manage your sales and ingredients",
            "subtitle2": "Optimize your inventory and sales with Foodstock",
            "button": "Get started"
        },
        "features": {
            "title": "Features",
            "card1_title": "Real-time inventory management",
            "card1_text": "Visualize your available ingredients and products, with automatic updates upon sales registration.",
            "card2_title": "Low stock alerts",
            "card2_text": "Receive notifications when a product is about to run out.",
            "card3_title": "Reports and statistics",
            "card3_text": "Analyze your sales, most used ingredients, and trends in easy-to-understand charts.",
            "card4_title": "Expiration control",
            "card4_text": "Keep track of expiration dates to reduce waste.",
            "card5_title": "Supplier management",
            "card5_text": "Save your suppliers and organize orders directly from the platform.",
            "card6_title": "Smart reservations",
            "card6_text": "Link your reservations with inventory, ensuring you always have ingredients ready."
        },
        "who_we_are": {
            "title": "About Us",
            "mission_title": "Mission",
            "mission_text": "“To optimize inventory and sales management in restaurants and gastronomic businesses, offering a simple, efficient, and accessible digital platform that reduces losses and increases profitability.”",
            "vision_title": "Vision",
            "vision_text": "“To be the leading solution in Latin America for the digitalization of gastronomic businesses, recognized for its innovation, reliability, and support for the growth of the industry.”"
        },
        "team": {
            "title": "About Us",
            "subtitle": "FoodStock Team Members",
            "member1_name": "Melina Liz Santillan Alvarado",
            "member1_desc": "I am a 21-year-old software engineering student at UPC.",
            "member2_name": "Jean Pool Huaman De La Cruz",
            "member2_desc": "I am a 22-year-old software engineering student at UPC.",
            "member3_name": "Javier Masaru Nikaido Vargas",
            "member3_desc": "5th-semester software engineering student at the Peruvian University of Sciences.",
            "member4_name": "Gonzalo Samuel Quintanilla Pozo",
            "member4_desc": "I am a 20-year-old software engineering student at UPC.",
            "member5_name": "José María Franco del Carpio",
            "member5_desc": "I am a 20-year-old software engineering student at UPC."
        },
        "about_product": {
            "title": "About the product",
            "text1": "FoodStock is a web platform designed for restaurants, small businesses, and gastronomic entrepreneurs looking to simplify inventory management, optimize sales, and reduce losses from perishable products.",
            "text2": "With FoodStock you can:",
            "feature1": "Manage real-time inventory: visualize your supplies, quantities, and expiration dates.",
            "feature2": "Get automatic reports: control expenses, daily sales, and product performance.",
            "feature3": "Receive smart alerts: notifications for low stock and near-expiry supplies.",
            "feature4": "Organize reservations and orders: manage customers and tables with an integrated calendar.",
            "feature5": "Facilitate payments and receipts: integration with digital payment methods like Yape, Plin."
        },
        "pricing": {
            "title": "Plans",
            "btn_monthly": "Monthly",
            "btn_yearly": "Yearly",
            "plan_standard": "Standard",
            "plan_premium": "Premium",
            "feature1_standard": "Basic inventory management (ins and outs).",
            "feature2_standard": "Low stock and near-expiry alerts.",
            "feature3_standard": "Daily sales and expense reports.",
            "feature4_standard": "1 administrator user.",
            "feature5_standard": "Web and mobile access.",
            "feature1_premium": "All Standard plan features.",
            "feature2_premium": "Reservations and table calendar management.",
            "feature3_premium": "Advanced smart alerts.",
            "feature4_premium": "Custom reports.",
            "feature5_premium": "Automatic receipt/invoice generation.",
            "btn_select": "Button"
        },
        "faq": {
            "title": "Frequently Asked Questions",
            "subtitle": "Quick answers to your questions",
            "q1": "What is FoodStock?",
            "a1": "Foodstock is a digital platform that helps entrepreneurs and small businesses manage their inventory, sales, and reservations quickly and easily.",
            "q2": "Do I need technical knowledge to use FoodStock?",
            "a2": "No, the platform is designed to be intuitive and easy to use, without the need for advanced technical knowledge.",
            "q3": "Does FoodStock work on mobile?",
            "a3": "Yes, the application is responsive and adapts perfectly to mobile devices.",
            "q4": "What if I have multiple users in my business?",
            "a4": "The premium plan allows multiple users so your team can collaborate.",
            "q5": "How does the platform alert me when a product is about to expire?",
            "a5": "The platform sends automatic notifications via email or within the app when a product's expiration date is approaching."
        },
        "footer": {
            "logo": "FoodStock",
            "tagline": "Optimize your business management with a simple, fast, and reliable digital platform.",
            "platform_title": "Platform",
            "platform_link1": "How it works",
            "platform_link2": "Services",
            "platform_link3": "Pricing",
            "platform_link4": "FAQ",
            "company_title": "Company",
            "company_link1": "About us",
            "company_link2": "Mission and Vision",
            "company_link3": "Team",
            "company_link4": "Blog",
            "legal_title": "Legal",
            "legal_link1": "Terms of service",
            "legal_link2": "Privacy Policy",
            "legal_link3": "Cookies"
        }
    }
};

function changeLanguage(lang) {
    const langData = translations[lang];
    const elementsToTranslate = document.querySelectorAll('[data-section]');

    elementsToTranslate.forEach(element => {
        const section = element.getAttribute('data-section');
        const value = element.getAttribute('data-value');

        if (langData[section] && langData[section][value]) {
            // Manejar tanto texto plano como el contenido de los <a>
            if (element.tagName === 'A' || element.tagName === 'BUTTON') {
                element.textContent = langData[section][value];
            } else {
                element.textContent = langData[section][value];
            }
        }
    });

    // Actualizar la clase "active" para los botones de idioma
    document.querySelectorAll('.toggle-lang').forEach(button => {
        button.classList.remove('active');
    });
    document.querySelector(`.toggle-lang[onclick="changeLanguage('${lang}')"]`).classList.add('active');
}

// =====================================
// Lógica para los planes de precios
// =====================================

function showMonthly() {
    const prices = document.querySelectorAll('.price-value');
    const periods = document.querySelectorAll('.periodo');

    prices.forEach(price => {
        price.textContent = price.getAttribute('data-monthly');
    });

    periods.forEach(period => {
        period.textContent = '/mo';
    });

    document.querySelector('.toggle-monthly').classList.add('active');
    document.querySelector('.toggle-yearly').classList.remove('active');
}

function showYearly() {
    const prices = document.querySelectorAll('.price-value');
    const periods = document.querySelectorAll('.periodo');

    prices.forEach(price => {
        price.textContent = price.getAttribute('data-yearly');
    });

    periods.forEach(period => {
        period.textContent = '/yr';
    });

    document.querySelector('.toggle-monthly').classList.remove('active');
    document.querySelector('.toggle-yearly').classList.add('active');
}

// =====================================
// Lógica para el acordeón de preguntas
// =====================================

document.addEventListener('DOMContentLoaded', function () {
    // Al cargar la página, se inicializa en español por defecto
    changeLanguage('es');

    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            // Cierra todas las preguntas abiertas
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            // Abre o cierra la pregunta actual
            item.classList.toggle('active');
        });
    });
});