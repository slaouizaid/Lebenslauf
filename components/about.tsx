import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Globe, Lightbulb } from "lucide-react"

export function About() {
  const highlights = [
    {
      icon: Code,
      title: "Softwareentwicklung",
      description: "Erfahrung in verschiedenen Programmiersprachen und Frameworks",
    },
    {
      icon: Database,
      title: "IT-Support & SAP",
      description: "Technische Problemlösung und erste Erfahrungen mit SAP-Systemen",
    },
    {
      icon: Globe,
      title: "Internationale Erfahrung",
      description: "Studium in Deutschland und Marokko",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Leidenschaft für innovative Lösungen und neue Technologien",
    },
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Über mich</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Ich bin ein engagierter Informatikstudent mit Erfahrung in der Softwareentwicklung und IT-Support. Meine
            Leidenschaft liegt in der Entwicklung innovativer Lösungen und der Anwendung meiner vielseitigen technischen
            Fähigkeiten zur Lösung komplexer Probleme. Mit internationaler Bildungserfahrung bringe ich eine
            einzigartige Perspektive in jedes Projekt ein.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
