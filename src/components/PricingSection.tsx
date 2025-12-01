import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { packages } from "@/lib/config";

interface PricingSectionProps {
  onSelectPackage: (packageId: string) => void;
}

export function PricingSection({ onSelectPackage }: PricingSectionProps) {
  return (
    <section id="precios" className="py-24 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Paquetes pensados para vos
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Elegí el paquete que mejor se adapte a lo que necesitás. Todos
            incluyen materiales premium y atención personalizada.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative glass-card p-8 hover-lift ${
                pkg.recommended ? "ring-2 ring-primary" : ""
              }`}
            >
              {pkg.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                    <Star className="w-3 h-3" />
                    Recomendado
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {pkg.description}
                </p>
                <p className="text-4xl font-bold">
                  <span className="text-lg text-muted-foreground">desde </span>
                  <span className="gradient-text">
                    ${pkg.price.toLocaleString("es-AR")}
                  </span>
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => onSelectPackage(pkg.id)}
                variant={pkg.recommended ? "default" : "outline"}
                className="w-full"
              >
                Reservar este paquete
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
