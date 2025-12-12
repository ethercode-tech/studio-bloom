import { motion } from "framer-motion";
import gallery1 from "@/assets/gallery-1.jpeg";
import gallery2 from "@/assets/gallery-2.jpeg";
import gallery3 from "@/assets/gallery-3.jpeg";
import gallery4 from "@/assets/gallery-4.jpeg";
import gallery5 from "@/assets/gallery-5.jpeg";
import gallery6 from "@/assets/gallery-6.jpeg";
import gallery7 from "@/assets/gallery-7.jpeg";
import gallery8 from "@/assets/gallery-8.jpeg";
import gallery9 from "@/assets/gallery-9.jpeg";
import gallery10 from "@/assets/gallery-10.jpeg";
import gallery11 from "@/assets/gallery-11.jpeg";
import gallery12 from "@/assets/gallery-12.jpeg";
import gallery13 from "@/assets/gallery-13.jpeg";

const galleryImages = [
  { src: gallery1, label: "Antes y después · Soft Gel" },
  { src: gallery2, label: "Diseño geométrico minimal" },
  { src: gallery3, label: "Kapping natural" },
  { src: gallery4, label: "Francesita con glitter" },
  { src: gallery5, label: "Diseño marble en tonos pastel" },
  { src: gallery6, label: "Esmaltado semipermanente liso" },
  { src: gallery7, label: "Ombré rosado suave" },
  { src: gallery8, label: "Ombré rosado intenso" },
  { src: gallery9, label: "Diseño delicado en nude" },
  { src: gallery10, label: "Soft gel con detalle artístico" },
  { src: gallery11, label: "Diseño elegante para eventos" },
  { src: gallery12, label: "Kapping con acabado natural" },
  { src: gallery13, label: "Nail art moderno y femenino" },
];

export function GallerySection() {
  return (
    <section id="galeria" className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Descubrí nuestros trabajos
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Diseños reales, clientas reales. Inspirate para tu próximo turno.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative rounded-2xl overflow-hidden aspect-square bg-muted"
            >
              <img
                src={image.src}
                alt={image.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* overlay suave */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />

              {/* label siempre visible */}
              {/* <div className="absolute bottom-3 left-3 right-3">
                <span className="inline-block text-xs md:text-sm font-medium px-3 py-1.5 rounded-full bg-card/80 backdrop-blur border border-border">
                  {image.label}
                </span>
              </div> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
