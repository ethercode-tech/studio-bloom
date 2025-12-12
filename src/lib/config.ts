// Configuración del estudio - modificar para cada cliente
export const estudioConfig = {
  name: "Chloe Nails Estudio",
  tagline: "Uñas profesionales",
  phone: "5493400537833",
  location: "Villa constitucion, Argentina",
  address: "Guiraldes 2461, Villa constitución",
  hours: "Lunes a Sábado · 9:00 a 20:00",
  instagram: "@chloenailsestudio2",
};
export type ServiceCategory =
  | "manos"
  | "pies"
  | "combo"
  | "extensiones"
  | "refuerzo"
  | "diseno"
  | "add-on";

export type Service = {
  id: string;
  name: string;
  description: string;
  category: ServiceCategory;

  // pricing
  price: number; // ARS
  fromPrice?: boolean; // si depende de largo/diseño/etc

  // timing
  durationMin: number;

  // structure
  tags: string[];
  includes?: string[];
  notes?: string[];

  // variants / relationships
  addOn?: boolean;
  variantOf?: string; // id del servicio base si es variante
};

export const services: Service[] = [
  {
    id: "manos-manicura-express-semi-liso",
    name: "Manicura Express + Semipermanente (liso)",
    description:
      "Ideal para uñas prolijas en poco tiempo. Preparación completa y color liso con acabado impecable.",
    category: "manos",
    price: 7000,
    durationMin: 30,
    tags: ["Rápido", "Prolijo", "Esmaltado liso"],
    includes: ["Limado y forma", "Cutículas", "Semipermanente liso"],
    notes: ["Retiro previo puede sumar tiempo según el caso."],
  },

  {
    id: "manos-soft-gel-esmaltado-liso",
    name: "Soft Gel (uñas naturales) + Semipermanente (liso)",
    description:
      "Esmaltado semipermanente con técnica Soft Gel sobre uña natural para mayor duración y brillo.",
    category: "manos",
    price: 8000,
    durationMin: 90,
    tags: ["Duradero", "Brillo", "Acabado prolijo"],
    includes: ["Preparación de uña", "Cutículas", "Aplicación Soft Gel", "Color liso"],
    notes: ["No incluye extensión de largo."],
  },

  {
    id: "manos-soft-gel-esmaltado-con-diseno",
    name: "Soft Gel (uñas naturales) + Diseño",
    description:
      "Soft Gel sobre uña natural con diseño a elección (simple o combinado) para un look más personalizado.",
    category: "manos",
    price: 9000,
    durationMin: 100,
    fromPrice: true,
    tags: ["Personalizado", "Diseño", "Duradero"],
    includes: ["Preparación de uña", "Cutículas", "Aplicación Soft Gel", "Diseño a elección"],
    notes: ["El precio puede variar según complejidad del diseño."],
    variantOf: "manos-soft-gel-esmaltado-liso",
  },

  {
    id: "manos-kapping-gel-liso",
    name: "Kapping en Gel (refuerzo) + Semipermanente (liso)",
    description:
      "Refuerzo con gel para proteger y fortalecer la uña natural. Ideal si buscás más resistencia sin alargar.",
    category: "refuerzo",
    price: 8500,
    durationMin: 60,
    tags: ["Fortalece", "Natural", "Resistente"],
    includes: ["Preparación de uña", "Cutículas", "Capa de refuerzo (kapping)", "Color liso"],
  },

  {
    id: "manos-kapping-gel-con-diseno",
    name: "Kapping en Gel (refuerzo) + Diseño",
    description:
      "Refuerzo con gel para uñas más resistentes, con diseño a elección para un resultado personalizado.",
    category: "refuerzo",
    price: 9000,
    durationMin: 75,
    fromPrice: true,
    tags: ["Fortalece", "Diseño", "Personalizado"],
    includes: ["Preparación de uña", "Cutículas", "Kapping en gel", "Diseño a elección"],
    notes: ["El precio puede variar según complejidad del diseño."],
    variantOf: "manos-kapping-gel-liso",
  },

  {
    id: "extensiones-soft-gel",
    name: "Extensión Soft Gel",
    description:
      "Extensión para dar largo y forma. Terminación prolija y resistente, adaptada a tu estilo.",
    category: "extensiones",
    price: 11000,
    durationMin: 120,
    fromPrice: true,
    tags: ["Largo a elección", "Premium", "Personalizado"],
    includes: ["Preparación de uña", "Extensión Soft Gel", "Forma a elección", "Terminación"],
    notes: ["El precio puede variar por largo y forma elegida."],
  },

  {
    id: "extensiones-soft-gel-con-diseno",
    name: "Extensión Soft Gel + Diseño",
    description:
      "Extensión con diseño a elección. Ideal si querés un set completo y llamativo.",
    category: "extensiones",
    price: 12000,
    durationMin: 130,
    fromPrice: true,
    tags: ["Personalizado", "Premium", "Diseño"],
    includes: ["Preparación de uña", "Extensión Soft Gel", "Diseño a elección", "Terminación"],
    notes: ["El precio puede variar según largo y complejidad del diseño."],
    variantOf: "extensiones-soft-gel",
  },

  {
    id: "combo-semi-manos-pies",
    name: "Semipermanente en Manos y Pies",
    description:
      "Combo completo para salir con todo: esmaltado semipermanente en manos y pies con acabado duradero.",
    category: "combo",
    price: 15000,
    durationMin: 120,
    tags: ["Combo", "Duradero", "Práctico"],
    includes: ["Manos: preparación + semipermanente", "Pies: preparación + semipermanente"],
    notes: ["Diseños o nail art se cotizan aparte como adicional."],
  },

  // Add-ons (extras)
  {
    id: "add-on-strass-por-unia",
    name: "Strass (por uña)",
    description:
      "Aplicación de strass para sumar brillo y detalle. Se cobra por uña (según cantidad).",
    category: "add-on",
    price: 500,
    durationMin: 5,
    tags: ["Extra", "Brillo", "Personalizado"],
    addOn: true,
    notes: ["Duración estimada por uña, puede variar según el diseño."],
  },

  {
    id: "add-on-nail-art-simple",
    name: "Nail Art Simple",
    description:
      "Diseños simples (líneas, puntos, francesitas, detalles minimal) para elevar el set sin recargar.",
    category: "diseno",
    price: 1500,
    durationMin: 15,
    fromPrice: true,
    tags: ["Extra", "Minimal", "Personalizado"],
    addOn: true,
    notes: ["Precio orientativo, depende de la cantidad de uñas y complejidad."],
  },

  {
    id: "add-on-nail-art-avanzado",
    name: "Nail Art Avanzado",
    description:
      "Diseños complejos y personalizados: combinaciones, efectos, texturas o composiciones más elaboradas.",
    category: "diseno",
    price: 3000,
    durationMin: 30,
    fromPrice: true,
    tags: ["Extra", "Artístico", "Premium"],
    addOn: true,
    notes: ["Se cotiza según referencia o idea del diseño."],
  },
];

export type Package = {
  id: string;
  name: string;
  price: number;
  description: string;
  durationMin: number;
  recommended: boolean;
  includes: string[];
  idealFor?: string[];
  notes?: string[];
};

export const packages: Package[] = [
  {
    id: "pack-mantenimiento",
    name: "Mantenimiento",
    price: 8500,
    description:
      "Para clientas que ya tienen Soft Gel, Kapping o extensiones y quieren renovar el look sin empezar de cero.",
    durationMin: 60,
    recommended: false,
    includes: [
      "Retiro del trabajo anterior (del estudio)",
      "Preparación completa de uña",
      "Nuevo esmaltado semipermanente (liso)",
      "Hidratación de cutículas",
    ],
    idealFor: ["Renovar color", "Mantener prolijidad", "Extender la duración del servicio"],
    notes: ["Si el trabajo previo es de otro lugar, puede requerir más tiempo."],
  },
  {
    id: "pack-evento",
    name: "Evento",
    price: 18000,
    description:
      "Uñas perfectas para tu día especial. Un set completo con diseño elegido para que no falle nada.",
    durationMin: 120,
    recommended: true,
    includes: [
      "Soft Gel completo (uñas naturales) o refuerzo según evaluación",
      "Diseño personalizado a elección",
      "Tratamiento de cutículas",
      "Garantía de 1 semana (ajustes por desprendimiento dentro de condiciones normales)",
    ],
    idealFor: ["Cumpleaños", "Casamientos", "Egresadas", "Sesión de fotos"],
  },
  {
    id: "pack-premium",
    name: "Premium",
    price: 25000,
    description:
      "La experiencia completa: trabajo detallista, diseño más elaborado y enfoque en terminación y cuidado.",
    durationMin: 150,
    recommended: false,
    includes: [
      "Soft Gel + nail art avanzado",
      "Spa de manos",
      "Hidratación profunda",
      "Kit de cuidado para llevar",
      "Prioridad de turnos (según disponibilidad)",
    ],
    idealFor: ["Quiero lo mejor", "Diseños protagonistas", "Regalo premium"],
  },
];


export const testimonials = [
  {
    name: "Lucía",
    age: 29,
    text: "Nunca tuve uñas tan lindas y duraderas. Diamela es súper profesional y el ambiente del estudio es hermoso. Reservar por la web fue rapidísimo.",
  },
  {
    name: "Camila",
    age: 24,
    text: "Diamela me hizo las uñas para mi casamiento y quedaron perfectas. Aguantaron todo el viaje de luna de miel sin ningún desperfecto.",
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
