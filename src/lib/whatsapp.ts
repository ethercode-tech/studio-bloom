import { studioConfig } from "./config";

export interface BookingData {
  nombre: string;
  telefono: string;
  servicio: string;
  fecha: string;
  hora: string;
  comentarios?: string;
}

export function generarMensajeWhatsApp(data: BookingData): string {
  const mensaje = `Hola, quiero reservar un turno en ${studioConfig.name}.

*Nombre:* ${data.nombre}
*Servicio:* ${data.servicio}
*Fecha y hora:* ${data.fecha} a las ${data.hora}
${data.comentarios ? `*Comentarios:* ${data.comentarios}` : ""}

¡Gracias!`;

  return mensaje;
}

export function generarLinkWhatsApp(data: BookingData): string {
  const mensaje = generarMensajeWhatsApp(data);
  const mensajeEncoded = encodeURIComponent(mensaje);
  return `https://wa.me/${studioConfig.phone}?text=${mensajeEncoded}`;
}

export function generarLinkWhatsAppGeneral(): string {
  const mensaje = `Hola, quiero consultar por turnos en ${studioConfig.name}. 🌸`;
  const mensajeEncoded = encodeURIComponent(mensaje);
  return `https://wa.me/${studioConfig.phone}?text=${mensajeEncoded}`;
}
