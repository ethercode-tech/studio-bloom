import { MessageCircle, MapPin, Clock, Instagram } from "lucide-react";
import { studioConfig } from "@/lib/config";
import { generarLinkWhatsAppGeneral } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="py-16 border-t border-border">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-2xl font-bold">
              {studioConfig.name}{" "}
              <span className="text-primary">· {studioConfig.tagline}</span>
            </h3>
            <p className="text-muted-foreground max-w-md">
              Si tenés un evento, no esperes al último día. Reservá tu turno con
              anticipación y llegá con uñas perfectas a ese momento especial.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Contacto</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={generarLinkWhatsAppGeneral()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`https://instagram.com/${studioConfig.instagram.replace("@", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  {studioConfig.instagram}
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Ubicación</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 shrink-0" />
                <span>{studioConfig.address}</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-1 shrink-0" />
                <span>{studioConfig.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {studioConfig.name}. Todos los derechos
            reservados.
          </p>
          <div className="flex gap-6">
            <a
              href="#servicios"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Servicios
            </a>
            <a
              href="#precios"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Precios
            </a>
            <a
              href="#reservar"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Reservar
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
