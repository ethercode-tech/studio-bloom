import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, MessageCircle, CreditCard, ArrowLeft, Loader2, CheckCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { services, packages } from "@/lib/config";
import { generarLinkWhatsApp, BookingData } from "@/lib/whatsapp";
import { iniciarPago, calcularPrecioServicio } from "@/lib/mercadopago";

interface BookingWidgetProps {
  preselectedService?: string;
}

type Step = "form" | "summary";

interface FormData {
  nombre: string;
  telefono: string;
  servicio: string;
  fecha: string;
  hora: string;
  comentarios: string;
}

interface FormErrors {
  nombre?: string;
  telefono?: string;
  servicio?: string;
  fecha?: string;
  hora?: string;
}

export function BookingWidget({ preselectedService }: BookingWidgetProps) {
  const [step, setStep] = useState<Step>("form");
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<"loading" | "success" | "error">("loading");
  const [paymentMessage, setPaymentMessage] = useState("");

  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    telefono: "",
    servicio: preselectedService || "",
    fecha: "",
    hora: "",
    comentarios: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, servicio: preselectedService }));
    }
  }, [preselectedService]);

  const allServices = [
    ...services.map((s) => ({ id: s.id, name: s.name })),
    ...packages.map((p) => ({ id: p.id, name: `Paquete ${p.name}` })),
  ];

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.nombre.trim()) {
      newErrors.nombre = "El nombre es obligatorio";
    }
    if (!formData.telefono.trim()) {
      newErrors.telefono = "El teléfono es obligatorio";
    } else if (!/^\d{8,15}$/.test(formData.telefono.replace(/\D/g, ""))) {
      newErrors.telefono = "Ingresá un número válido";
    }
    if (!formData.servicio) {
      newErrors.servicio = "Seleccioná un servicio";
    }
    if (!formData.fecha) {
      newErrors.fecha = "Seleccioná una fecha";
    }
    if (!formData.hora) {
      newErrors.hora = "Seleccioná una hora";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContinue = () => {
    if (validate()) {
      setStep("summary");
    }
  };

  const handleWhatsApp = () => {
    const precio = calcularPrecioServicio(formData.servicio);

    const bookingData: BookingData = {
      nombre: formData.nombre,
      telefono: formData.telefono,
      servicio:
        allServices.find((s) => s.id === formData.servicio)?.name ||
        formData.servicio,
      fecha: formData.fecha,
      hora: formData.hora,
      comentarios: formData.comentarios,
      precio,
    };

    const link = generarLinkWhatsApp(bookingData);
    window.open(link, "_blank");
  };


  const handleMercadoPago = async () => {
    setShowPaymentModal(true);
    setPaymentStatus("loading");

    const serviceName = allServices.find((s) => s.id === formData.servicio)?.name || "Reserva";
    const price = calcularPrecioServicio(formData.servicio);

    await iniciarPago(
      {
        title: serviceName,
        quantity: 1,
        unit_price: price,
        currency_id: "ARS",
      },
      {
        name: formData.nombre,
        phone: { number: formData.telefono },
      },
      (status, message) => {
        setPaymentStatus(status);
        setPaymentMessage(message);
      }
    );
  };

  const getServiceName = () => {
    return allServices.find((s) => s.id === formData.servicio)?.name || formData.servicio;
  };

  return (
    <section id="reservar" className="py-24">
      <div className="container max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Reservá tu turno
          </h2>
          <p className="text-muted-foreground text-lg">
            Completá el formulario y elegí cómo querés confirmar tu reserva.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 glow-rose"
        >
          <AnimatePresence mode="wait">
            {step === "form" ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="nombre">Nombre completo</Label>
                    <Input
                      id="nombre"
                      placeholder="Tu nombre"
                      value={formData.nombre}
                      onChange={(e) =>
                        setFormData({ ...formData, nombre: e.target.value })
                      }
                      className={errors.nombre ? "border-destructive" : ""}
                    />
                    {errors.nombre && (
                      <p className="text-sm text-destructive">{errors.nombre}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="telefono">WhatsApp / Teléfono</Label>
                    <Input
                      id="telefono"
                      placeholder="388 123 4567"
                      value={formData.telefono}
                      onChange={(e) =>
                        setFormData({ ...formData, telefono: e.target.value })
                      }
                      className={errors.telefono ? "border-destructive" : ""}
                    />
                    {errors.telefono && (
                      <p className="text-sm text-destructive">{errors.telefono}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="servicio">Servicio</Label>
                  <Select
                    value={formData.servicio}
                    onValueChange={(value) =>
                      setFormData({ ...formData, servicio: value })
                    }
                  >
                    <SelectTrigger className={errors.servicio ? "border-destructive" : ""}>
                      <SelectValue placeholder="Seleccioná un servicio" />
                    </SelectTrigger>
                    <SelectContent>
                      <div className="px-2 py-1.5 text-sm font-semibold text-muted-foreground">
                        Servicios
                      </div>
                      {services.map((s) => (
                        <SelectItem key={s.id} value={s.id}>
                          {s.name} - ${s.price.toLocaleString("es-AR")}
                        </SelectItem>
                      ))}
                      <div className="px-2 py-1.5 text-sm font-semibold text-muted-foreground border-t mt-2 pt-2">
                        Paquetes
                      </div>
                      {packages.map((p) => (
                        <SelectItem key={p.id} value={p.id}>
                          {p.name} - ${p.price.toLocaleString("es-AR")}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.servicio && (
                    <p className="text-sm text-destructive">{errors.servicio}</p>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="fecha">Fecha</Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="fecha"
                        type="date"
                        value={formData.fecha}
                        onChange={(e) =>
                          setFormData({ ...formData, fecha: e.target.value })
                        }
                        className={`pl-10 ${errors.fecha ? "border-destructive" : ""}`}
                        min={new Date().toISOString().split("T")[0]}
                      />
                    </div>
                    {errors.fecha && (
                      <p className="text-sm text-destructive">{errors.fecha}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="hora">Hora</Label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="hora"
                        type="time"
                        value={formData.hora}
                        onChange={(e) =>
                          setFormData({ ...formData, hora: e.target.value })
                        }
                        className={`pl-10 ${errors.hora ? "border-destructive" : ""}`}
                      />
                    </div>
                    {errors.hora && (
                      <p className="text-sm text-destructive">{errors.hora}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="comentarios">Comentarios adicionales</Label>
                  <Textarea
                    id="comentarios"
                    placeholder="¿Algún diseño en mente? ¿Primera vez con soft gel? Contanos..."
                    value={formData.comentarios}
                    onChange={(e) =>
                      setFormData({ ...formData, comentarios: e.target.value })
                    }
                    rows={3}
                  />
                </div>

                <Button onClick={handleContinue} size="lg" className="w-full">
                  Continuar
                </Button>
              </motion.div>
            ) : (
              <motion.div
                key="summary"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <button
                  onClick={() => setStep("form")}
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Volver a editar
                </button>

                <div className="p-6 rounded-xl bg-muted/50 space-y-4">
                  <h3 className="text-xl font-semibold">Resumen de tu reserva</h3>
                  <div className="space-y-2 text-sm">
                    <p>
                      <span className="text-muted-foreground">Servicio:</span>{" "}
                      <span className="font-medium">{getServiceName()}</span>
                    </p>
                    <p>
                      <span className="text-muted-foreground">Fecha y hora:</span>{" "}
                      <span className="font-medium">
                        {new Date(formData.fecha).toLocaleDateString("es-AR", {
                          weekday: "long",
                          day: "numeric",
                          month: "long",
                        })}{" "}
                        a las {formData.hora}
                      </span>
                    </p>
                    <p>
                      <span className="text-muted-foreground">Nombre:</span>{" "}
                      <span className="font-medium">{formData.nombre}</span>
                    </p>
                    <p>
                      <span className="text-muted-foreground">WhatsApp:</span>{" "}
                      <span className="font-medium">{formData.telefono}</span>
                    </p>
                    {formData.comentarios && (
                      <p>
                        <span className="text-muted-foreground">Comentarios:</span>{" "}
                        <span className="font-medium">{formData.comentarios}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-center text-muted-foreground">
                    ¿Cómo querés confirmar tu turno?
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <Button
                      onClick={handleWhatsApp}
                      size="lg"
                      variant="outline"
                      className="h-auto py-6 flex-col gap-2 border-accent/50 text-accent hover:bg-accent/10"
                    >
                      <MessageCircle className="w-6 h-6" />
                      <span>Confirmar por WhatsApp</span>
                      <span className="text-xs text-muted-foreground">
                        Te contactamos para confirmar
                      </span>
                    </Button>

                    <Button
                      onClick={handleMercadoPago}
                      size="lg"
                      className="h-auto py-6 flex-col gap-2"
                    >
                      <CreditCard className="w-6 h-6" />
                      <span>Pagar con Mercado Pago</span>
                      <span className="text-xs text-primary-foreground/70">
                        Reserva garantizada
                      </span>
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Payment Modal */}
      <AnimatePresence>
        {showPaymentModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="glass-card p-8 max-w-md w-full text-center space-y-6"
            >
              {paymentStatus === "loading" && (
                <>
                  <Loader2 className="w-12 h-12 animate-spin text-primary mx-auto" />
                  <p className="text-lg">{paymentMessage}</p>
                </>
              )}

              {paymentStatus === "success" && (
                <>
                  <CheckCircle className="w-12 h-12 text-accent mx-auto" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">¡Listo!</h3>
                    <p className="text-muted-foreground">{paymentMessage}</p>
                  </div>
                  <Button onClick={() => setShowPaymentModal(false)}>
                    Cerrar
                  </Button>
                </>
              )}

              {paymentStatus === "error" && (
                <>
                  <X className="w-12 h-12 text-destructive mx-auto" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Error</h3>
                    <p className="text-muted-foreground">{paymentMessage}</p>
                  </div>
                  <Button onClick={() => setShowPaymentModal(false)}>
                    Cerrar
                  </Button>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
