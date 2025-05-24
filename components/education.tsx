import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Calendar, MapPin } from "lucide-react"

export function Education() {
  const education = [
    {
      degree: "Bachelor of Science in Informatik",
      institution: "Hochschule Bonn Rhein-Sieg",
      period: "09/2023 - Heute",
      location: "Bonn, Deutschland",
      status: "Aktuell",
      highlights: ["Aktuelles Studium im Bereich Informatik", "Schwerpunkt auf Softwareentwicklung und Programmierung"],
    },
    {
      degree: "Medizintechnik",
      institution: "Hochschule Remagen",
      period: "09/2021 - 07/2023",
      location: "Remagen, Deutschland",
      status: "Abgeschlossen",
      highlights: ["Studium im Bereich Medizintechnik", "Interdisziplinäre Ausbildung zwischen Technik und Medizin"],
    },
    {
      degree: "Deutsch-Kurs",
      institution: "Universität Paderborn",
      period: "04/2019 - 04/2020",
      location: "Paderborn, Deutschland",
      status: "Abgeschlossen",
      highlights: ["Intensiver Deutschkurs zur Vorbereitung auf das Studium in Deutschland"],
    },
    {
      degree: "Bachelor in Informatik",
      institution: "Fakultät für Wissenschaft und Technik (FSTT), Tanger",
      period: "09/2014 - 06/2018",
      location: "Tanger, Marokko",
      status: "Abgeschlossen",
      highlights: ["Abschluss in Technischer Informatik", "Grundlegende und fortgeschrittene Informatikkonzepte"],
    },
    {
      degree: "SAP Professional Grundlagen",
      institution: "SAP SE",
      period: "01/2025",
      location: "Online",
      status: "Abgeschlossen",
      highlights: [
        "Erfolgreich abgeschlossene Zertifizierung in SAP-Grundlagen und Kernmodulen",
        "Praktische Erfahrung mit SAP-Systemen und -Prozessen",
      ],
    },
  ]

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ausbildung</h2>
          <p className="text-lg text-muted-foreground">
            Mein Bildungsweg zeigt eine kontinuierliche Weiterentwicklung in der Informatik und verwandten Bereichen mit
            internationaler Erfahrung.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((item, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="space-y-2">
                    <CardTitle className="flex items-center gap-2">
                      <GraduationCap className="w-5 h-5 text-primary" />
                      {item.degree}
                    </CardTitle>
                    <p className="text-lg font-medium text-muted-foreground">{item.institution}</p>
                  </div>
                  <div className="flex flex-col sm:items-end gap-2">
                    <Badge
                      variant={
                        item.status === "Aktuell" ? "default" : item.status === "Geplant" ? "secondary" : "outline"
                      }
                    >
                      {item.status}
                    </Badge>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {item.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {item.location}
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {item.highlights.map((highlight, highlightIndex) => (
                    <li key={highlightIndex} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
