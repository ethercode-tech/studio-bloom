import { motion } from "framer-motion";
import { MessageCircle, Calendar, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { generarLinkWhatsAppGeneral } from "@/lib/whatsapp";
import { estudioConfig } from "@/lib/config";
import heroImage from "@/assets/hero-nails.jpg";

export function Hero() {
  const scrollToServicios = () => {
    document.getElementById("servicios")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/20" />
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary">
                Turnos limitados · Prioridad para eventos
              </span>
            </motion.div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
                Uñas perfectas,{" "}
                <span className="gradient-text">estudio profesional</span> en{" "}
                {estudioConfig.location.split(",")[0]}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
                Manicura, soft gel y kapping para clientas que no quieren
                improvisar su imagen. Reservá tu turno en segundos, sin mensajes
                eternos.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={scrollToServicios} className="text-lg px-8 py-6 glow-rose">
                <Calendar className="w-5 h-5 mr-2" />
                Ver servicios y reservar
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => window.open(generarLinkWhatsAppGeneral(), "_blank")}
                className="text-lg px-8 py-6 border-accent/50 text-accent hover:bg-accent/10"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Hablar por WhatsApp
              </Button>
            </div>
          </motion.div>

          {/* Image Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden glass-card">
              <img
                src={heroImage}
                alt="Uñas profesionales en Chloe Nails Estudio"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              
              {/* Chips */}
              <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2">
                {["Soft gel", "Kapping", "Diseño personalizado"].map((chip) => (
                  <span
                    key={chip}
                    className="px-4 py-2 rounded-full bg-card/90 backdrop-blur text-sm font-medium"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
