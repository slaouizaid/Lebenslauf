import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Mail, Phone, Calendar } from "lucide-react"

export function Hero() {
  return (
    <section className="pt-16 pb-20 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit">
                Verfügbar für neue Projekte
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                Hallo, ich bin <span className="text-primary">Zaid Slaoui</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Informatikstudent & Entwickler mit Leidenschaft für innovative Softwarelösungen und IT-Support.
                Spezialisiert auf die Entwicklung komplexer technischer Probleme.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Bonn, Deutschland</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span>Geboren 02.01.1996</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>zaidslaoui@outlook.de</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>+49 159 06778061</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <a href="#contact">Kontakt aufnehmen</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#projects">Projekte ansehen</a>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl"></div>
              <Image
                src="/images/about.jpg"
                alt="Zaid Slaoui - Informatikstudent & Entwickler"
                width={320}
                height={320}
                className="relative z-10 rounded-full object-cover border-4 border-background shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
