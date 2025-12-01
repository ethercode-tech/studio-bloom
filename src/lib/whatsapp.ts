import { studioConfig } from "./config";

export interface BookingData {
  nombre: string;
  telefono: string;      // WhatsApp del cliente
  servicio: string;
  fecha: string;         // YYYY-MM-DD
  hora: string;          // HH:mm
  comentarios?: string;
  precio?: number;       // opcional, por si lo querés usar
}

// Formatea la fecha al estilo "lunes 3 de marzo"
function formatearFecha(fecha: string): string {
  try {
    const [year, month, day] = fecha.split("-");
    const d = new Date(Number(year), Number(month) - 1, Number(day));
    return d.toLocaleDateString("es-AR", {
      weekday: "long",
      day: "numeric",
      month: "long",
    });
  } catch {
    return fecha;
  }
}

export function generarMensajeWhatsApp(data: BookingData): string {
  const fechaLegible = formatearFecha(data.fecha);

  const lineas = [
    `Hola, quiero reservar un turno en *${studioConfig.name}* 💅`,
    ``,
    `*Nombre:* ${data.nombre}`,
    `*WhatsApp del cliente:* ${data.telefono}`,
    `*Servicio:* ${data.servicio}`,
    `*Fecha:* ${fechaLegible}`,
    `*Hora:* ${data.hora}`,
    data.precio != null ? `*Precio estimado:* $${data.precio.toLocaleString("es-AR")}` : "",
    data.comentarios ? `*Comentarios:* ${data.comentarios}` : "",
    ``,
    `¡Gracias! 💖`,
  ].filter(Boolean);

  return lineas.join("\n");
}

export function generarLinkWhatsApp(data: BookingData): string {
  const mensaje = generarMensajeWhatsApp(data);
  const mensajeEncoded = encodeURIComponent(mensaje);

  // Asegurate de tener en config:
  // studioConfig.phone = "549388xxxxxxx"
  return `https://wa.me/${studioConfig.phone}?text=${mensajeEncoded}`;
}

export function generarLinkWhatsAppGeneral(): string {
  const mensaje = `Hola, quiero consultar por turnos en *${studioConfig.name}*. 🌸`;
  const mensajeEncoded = encodeURIComponent(mensaje);
  return `https://wa.me/${studioConfig.phone}?text=${mensajeEncoded}`;
}
