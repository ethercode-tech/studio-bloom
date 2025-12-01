import { motion } from "framer-motion";
import { Clock, Check } from "lucide-react";
import { services } from "@/lib/config";

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
            Cada servicio incluye materiales de primera calidad y la atención
            personalizada que merecés.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 hover-lift"
            >
              <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
              <p className="text-muted-foreground text-sm mb-4">
                {service.description}
              </p>

              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <Clock className="w-4 h-4" />
                <span>{service.duration}</span>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-primary/10 text-primary text-xs"
                  >
                    <Check className="w-3 h-3" />
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-2xl font-bold text-primary">
                ${service.price.toLocaleString("es-AR")}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
