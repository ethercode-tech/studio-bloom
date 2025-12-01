// Tipos para la integración con Mercado Pago
export interface PreferenciaMP {
  id: string;
  init_point: string;
  sandbox_init_point: string;
}

export interface ItemMP {
  title: string;
  quantity: number;
  unit_price: number;
  currency_id: string;
}

export interface PayerMP {
  name: string;
  phone: {
    number: string;
  };
}

// Simula la creación de una preferencia de pago
// TODO: En producción, esto debería llamar a tu backend que interactúa con la API de Mercado Pago
export async function iniciarPago(
  item: ItemMP,
  payer: PayerMP,
  onProgress: (status: "loading" | "success" | "error", message: string) => void
): Promise<void> {
  onProgress("loading", "Conectando con Mercado Pago...");

  // Simulamos un delay de red
  await new Promise((resolve) => setTimeout(resolve, 1500));

  onProgress("loading", "Procesando tu reserva...");

  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Simulamos éxito
  onProgress(
    "success",
    "Pago aprobado (simulado). En un proyecto real, acá se mostraría el estado de Mercado Pago y se guardaría la reserva en el backend."
  );

  /*
   * TODO: Implementación real de Mercado Pago
   * 
   * 1. Crear un endpoint en tu backend (ej: /api/crear-preferencia)
   * 2. Desde ese endpoint, usar el SDK de Mercado Pago:
   * 
   * import { MercadoPagoConfig, Preference } from 'mercadopago';
   * 
   * const client = new MercadoPagoConfig({ accessToken: process.env.MP_ACCESS_TOKEN });
   * const preference = new Preference(client);
   * 
   * const response = await preference.create({
   *   body: {
   *     items: [{ title, quantity, unit_price, currency_id: 'ARS' }],
   *     payer: { name, phone },
   *     back_urls: {
   *       success: 'https://tudominio.com/reserva-exitosa',
   *       failure: 'https://tudominio.com/reserva-fallida',
   *       pending: 'https://tudominio.com/reserva-pendiente',
   *     },
   *     auto_return: 'approved',
   *   }
   * });
   * 
   * 3. Redirigir al usuario a response.init_point
   * 4. Manejar los webhooks de MP para confirmar el pago
   */
}

export function calcularPrecioServicio(servicioId: string): number {
  const precios: Record<string, number> = {
    "manicura-express": 4500,
    "soft-gel": 12000,
    kapping: 8500,
    "nail-art": 15000,
    mantenimiento: 8500,
    evento: 18000,
    premium: 25000,
  };

  return precios[servicioId] || 10000;
}
