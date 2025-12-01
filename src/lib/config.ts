// Configuración del estudio - modificar para cada cliente
export const studioConfig = {
  name: "Studio Belén",
  tagline: "Nails & Beauty",
  phone: "5493880000000",
  location: "San Salvador de Jujuy, Argentina",
  address: "Av. Belgrano 1234, San Salvador de Jujuy",
  hours: "Lunes a Sábado · 9:00 a 20:00",
  instagram: "@studiobelen.nails",
};

export const services = [
  {
    id: "manicura-express",
    name: "Manicura Express",
    description: "Limado, cutícula y esmaltado tradicional para uñas impecables en poco tiempo.",
    price: 4500,
    duration: "30 min",
    tags: ["Rápido", "Incluye retiro"],
  },
  {
    id: "soft-gel",
    name: "Soft Gel",
    description: "Extensión natural y flexible con acabado brillante que dura hasta 4 semanas.",
    price: 12000,
    duration: "90 min",
    tags: ["Duradero", "Sin daño"],
  },
  {
    id: "kapping",
    name: "Kapping",
    description: "Fortalecimiento y protección de la uña natural con gel semipermanente.",
    price: 8500,
    duration: "60 min",
    tags: ["Fortalece", "Natural"],
  },
  {
    id: "nail-art",
    name: "Nail Art Avanzado",
    description: "Diseños personalizados con técnicas de decoración premium.",
    price: 15000,
    duration: "120 min",
    tags: ["Personalizado", "Premium"],
  },
];

export const packages = [
  {
    id: "mantenimiento",
    name: "Mantenimiento",
    price: 8500,
    description: "Para clientas que ya tienen soft gel o kapping",
    features: [
      "Retiro del trabajo anterior",
      "Nuevo esmaltado",
      "Hidratación de cutículas",
      "Duración estimada: 60 min",
    ],
    recommended: false,
  },
  {
    id: "evento",
    name: "Evento",
    price: 18000,
    description: "Uñas perfectas para tu día especial",
    features: [
      "Soft gel completo",
      "Diseño personalizado a elección",
      "Tratamiento de cutículas",
      "Garantía de 1 semana",
      "Duración estimada: 2 horas",
    ],
    recommended: true,
  },
  {
    id: "premium",
    name: "Premium",
    price: 25000,
    description: "La experiencia completa para manos impecables",
    features: [
      "Soft gel + nail art avanzado",
      "Spa de manos completo",
      "Hidratación profunda",
      "Kit de cuidado para llevar",
      "Prioridad en turnos",
    ],
    recommended: false,
  },
];

export const testimonials = [
  {
    name: "Lucía",
    age: 29,
    text: "Nunca tuve uñas tan lindas y duraderas. Belén es súper profesional y el ambiente del estudio es hermoso. Reservar por la web fue rapidísimo.",
  },
  {
    name: "Camila",
    age: 24,
    text: "Me hizo las uñas para mi casamiento y quedaron perfectas. Aguantaron todo el viaje de luna de miel sin ningún desperfecto.",
  },
  {
    name: "Valentina",
    age: 32,
    text: "Después de probar varios lugares, encontré mi estudio de confianza. La calidad de los materiales se nota desde el primer día.",
  },
];

export const faqs = [
  {
    question: "¿Cuánto dura una sesión de soft gel?",
    answer: "Una sesión completa de soft gel dura aproximadamente 90 minutos. Si es tu primera vez o elegís un diseño muy elaborado, puede extenderse hasta 2 horas.",
  },
  {
    question: "¿Qué pasa si llego tarde a mi turno?",
    answer: "Si llegás hasta 15 minutos tarde, podemos atenderte igual. Pasado ese tiempo, te pedimos que reprogrames porque afecta a las demás clientas.",
  },
  {
    question: "¿Con cuánta anticipación debo reservar para un evento?",
    answer: "Para eventos especiales (casamientos, cumpleaños de 15, graduaciones), te recomendamos reservar con al menos 2 semanas de anticipación para asegurar tu turno.",
  },
  {
    question: "¿Puedo pagar con tarjeta o transferencia?",
    answer: "Sí, aceptamos efectivo, transferencia bancaria y Mercado Pago (débito y crédito). Podés pagar online al reservar o presencialmente.",
  },
  {
    question: "¿El soft gel daña mis uñas naturales?",
    answer: "No. Usamos productos de alta calidad y técnicas profesionales. Al retirarlo correctamente, tus uñas quedan igual o mejor que antes.",
  },
];
