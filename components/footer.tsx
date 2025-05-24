import { Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">© {currentYear} Zaid Slaoui. Alle Rechte vorbehalten.</p>
          </div>

          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>Erstellt mit</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>und Next.js</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
