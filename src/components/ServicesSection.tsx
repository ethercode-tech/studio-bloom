import { motion } from "framer-motion";
import { Clock, Check, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/config";
import { generarLinkWhatsApp } from "@/lib/whatsapp";

function formatPriceArs(value: number) {
  return value.toLocaleString("es-AR");
}

export function ServicesSection() {
  return (
    <section id="servicios" className="py-24 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Servicios principales
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Elegí tu servicio y reservá al instante por WhatsApp, con el mensaje ya armado.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const waLink = generarLinkWhatsApp(service);

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="glass-card rounded-2xl overflow-hidden hover-lift"
              >
                {/* body */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-xl font-semibold leading-snug">
                      {service.name}
                    </h3>

                    {/* etiqueta mini, no CTA */}
                    <span className="shrink-0 inline-flex items-center gap-2 text-[11px] text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/15">
                      <Clock className="w-3.5 h-3.5" />
                      {service.durationMin} min
                    </span>
                  </div>

                  <p className="text-muted-foreground text-sm mb-4">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {service.tags.map((tag) => (
                      <span
                        key={`${service.id}-${tag}`}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-primary/10 text-primary text-xs border border-primary/10"
                      >
                        <Check className="w-3 h-3" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-end justify-between gap-3">
                    <p className="text-2xl font-bold text-primary">
                      ${formatPriceArs(service.price)}
                      {service.fromPrice ? (
                        <span className="text-sm font-medium text-muted-foreground">
                          {" "}
                          desde
                        </span>
                      ) : null}
                    </p>

                    <span className="text-xs text-muted-foreground">
                      Respuesta rápida
                    </span>
                  </div>
                </div>

                {/* footer CTA separado visualmente */}
                <div className="px-6 pb-6">
                  <div className="rounded-xl border border-primary/15 bg-primary/5 p-3">
                    <Button
                      asChild
                      size="lg"
                      className="w-full justify-between rounded-xl glow-rose"
                    >
                      <a
                        href={waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Reservar ${service.name} por WhatsApp`}
                      >
                        <span className="inline-flex items-center gap-2">
                          <MessageCircle className="w-5 h-5" />
                          Reservar por WhatsApp
                        </span>
                        <ArrowRight className="w-5 h-5 opacity-90" />
                      </a>
                    </Button>

                    <p className="mt-2 text-[11px] text-muted-foreground text-center">
                      Se abre WhatsApp con el mensaje listo para enviar.
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
