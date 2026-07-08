// Contenido editable de la landing. Cambiar textos, precios y datos de contacto acá.

export const site = {
  nombre: "Lina María Sánchez Uribe",
  titulo: "Psicóloga Holística",
  ubicacion: "Edificio Plaza U, Cra. 27 #11-53, Los Álamos · Pereira",
  instagram: "@lina_sanchez_terapia_holistica",
  instagramUrl: "https://www.instagram.com/lina_sanchez_terapia_holistica/",
  // TODO: pedirle a Lina su enlace de LinkedIn y reemplazar este placeholder.
  linkedin: "#",
  // TODO: confirmar con Lina que este es el número correcto de WhatsApp (tomado de su perfil de Doctoralia).
  whatsapp: "573113405948",
  whatsappMensaje:
    "Hola Lina, vi tu página y me gustaría agendar una sesión.",
  doctoraliaUrl:
    "https://www.doctoralia.co/lina-maria-sanchez-uribe/psicologo/pereira",
  youtubeUrl: "https://www.youtube.com/@LinaSanchezTerapiaHolistica",
};

export const stats = [
  { valor: "20+", etiqueta: "Años de experiencia" },
  { valor: "78", etiqueta: "Reseñas verificadas" },
  { valor: "5.0★", etiqueta: "Calificación promedio" },
];

export const sobreMi = {
  parrafos: [
    "Soy psicóloga clínica graduada de la Universidad San Buenaventura de Medellín, con 20 años acompañando procesos de sanación desde una mirada integrativa: mente, cuerpo y espíritu.",
    "Mi enfoque combina la psicología junguiana con prácticas de mindfulness y herramientas contemplativas, además de educación en salud sexual y reproductiva con perspectiva de género.",
    "Creo en un acompañamiento cercano y sin juicios, que te ayude a integrar lo que sientes y a construir una vida más consciente y equilibrada.",
  ],
};

// Reseñas verbatim tomadas del perfil público de Doctoralia (apellido reducido a inicial por privacidad).
// https://www.doctoralia.co/lina-maria-sanchez-uribe/psicologo/pereira
export const resenas = [
  {
    nombre: "Juan Pablo O.",
    texto: "Todo muy bueno, recibí lo que quería. Las herramientas todas pertinentes.",
    fecha: "julio 2026",
  },
  {
    nombre: "Andrea H.",
    texto:
      "La doctora Lina es muy atenta, dedicada durante la sesión, respetuosa y profesional.",
    fecha: "mayo 2026",
  },
  {
    nombre: "Danna R.",
    texto: "Muy agradecida y agradable el espacio durante la experiencia.",
    fecha: "marzo 2026",
  },
  {
    nombre: "Jacobo A.",
    texto:
      "Muy buena visita y muy profesional en su trabajo, hace que la experiencia se sienta cómoda.",
    fecha: "marzo 2026",
  },
  {
    nombre: "S.G.Q.",
    texto:
      "Me gusta mucho ir a las sesiones, la Dra brinda la confianza necesaria, habla muy claro y detallado, entonces uno entiende muchas cosas.",
    fecha: "febrero 2026",
  },
  {
    nombre: "Juanita G.",
    texto:
      "Te hace sentir que lo que te interesa tratar lo puedes entender y gestionar.",
    fecha: "febrero 2026",
  },
];

export const porQueElegirme = [
  {
    titulo: "Atención personalizada",
    descripcion:
      "Cada proceso es distinto. Diseño el acompañamiento según tu momento y tus necesidades.",
  },
  {
    titulo: "Enfoque integral",
    descripcion:
      "Trabajamos mente, cuerpo y espíritu: psicoterapia, mindfulness y prácticas contemplativas.",
  },
  {
    titulo: "Presencial o virtual",
    descripcion:
      "Consulta en Pereira o desde cualquier lugar por videollamada, con la misma calidez.",
  },
];

export const servicios = [
  {
    titulo: "Terapia individual",
    descripcion:
      "Espacio personal para trabajar ansiedad, autoconocimiento y bienestar emocional.",
    precio: "Desde $155.000 COP",
  },
  {
    titulo: "Terapia de pareja",
    descripcion:
      "Acompañamiento para mejorar la comunicación y fortalecer el vínculo.",
    precio: "Desde $200.000 COP",
  },
  {
    titulo: "Terapia familiar",
    descripcion: "Espacios de diálogo y sanación para toda la familia.",
    precio: "Desde $200.000 COP",
  },
  {
    titulo: "Manejo de ansiedad",
    descripcion:
      "Herramientas prácticas y terapéuticas para regular la ansiedad en el día a día.",
    precio: "Desde $155.000 COP",
  },
  {
    titulo: "Terapia de duelo",
    descripcion: "Acompañamiento respetuoso en procesos de pérdida y duelo.",
    precio: "Desde $155.000 COP",
  },
  {
    titulo: "Mindfulness y respiración consciente",
    descripcion:
      "Prácticas guiadas para conectar con el presente y reducir el estrés.",
    precio: "Desde $155.000 COP",
  },
];

export const proceso = [
  {
    paso: "1",
    titulo: "Escríbeme por WhatsApp",
    descripcion: "Contame brevemente qué te trae a terapia.",
  },
  {
    paso: "2",
    titulo: "Agendamos tu primera sesión",
    descripcion: "Elegimos juntas el horario y la modalidad, presencial o virtual.",
  },
  {
    paso: "3",
    titulo: "Comenzamos tu proceso",
    descripcion: "Iniciamos el acompañamiento a tu ritmo, con seguimiento cercano.",
  },
];

export const navLinks = [
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#servicios", label: "Servicios" },
  { href: "#proceso", label: "Cómo funciona" },
  { href: "#contacto", label: "Contacto" },
];
