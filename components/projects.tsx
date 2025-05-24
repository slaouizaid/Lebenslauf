"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Code, X, Calendar, Users, Target, Zap } from "lucide-react"
import Image from "next/image"

interface ProjectDetail {
  title: string
  description: string
  longDescription: string
  image: string
  technologies: string[]
  features: string[]
  challenges: string[]
  results: string[]
  duration: string
  teamSize: string
  role: string
  githubUrl: string
  liveUrl?: string
  featured: boolean
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null)

  const projects: ProjectDetail[] = [
    {
      title: "Fitness-Tracking-App mit Gesundheitsanalyse",
      description:
        "Entwicklung einer mobilen App zur Verfolgung von Fitness-Aktivitäten und Gesundheitsmetriken mit personalisierten Empfehlungen.",
      longDescription:
        "Eine umfassende mobile Anwendung, die Fitness-Tracking mit fortschrittlicher Gesundheitsanalyse kombiniert. Die App nutzt Machine Learning-Algorithmen zur Analyse von Benutzerverhalten und bietet personalisierte Trainingsempfehlungen. Integration mit Wearables und Gesundheitsgeräten für Echtzeitdatenerfassung.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: [
        "Flutter",
        "Firebase",
        "Machine Learning",
        "Health Tech",
        "Dart",
        "TensorFlow Lite",
        "Cloud Functions",
      ],
      features: [
        "Echtzeit-Fitness-Tracking mit GPS",
        "KI-basierte Trainingsempfehlungen",
        "Integration mit Wearables (Fitbit, Apple Watch)",
        "Soziale Features und Challenges",
        "Ernährungstracking mit Barcode-Scanner",
        "Gesundheitsdatenvisualisierung",
        "Offline-Modus für Training ohne Internet",
      ],
      challenges: [
        "Optimierung der Batterielaufzeit bei GPS-Tracking",
        "Implementierung präziser Machine Learning-Modelle",
        "Datenschutz und DSGVO-Konformität",
        "Cross-Platform-Kompatibilität",
      ],
      results: [
        "95% Benutzerretention nach 30 Tagen",
        "Durchschnittlich 40% Steigerung der Trainingsfrequenz",
        "4.8/5 Sterne im App Store",
        "Integration mit 15+ Fitness-Geräten",
      ],
      duration: "8 Monate",
      teamSize: "4 Entwickler",
      role: "Lead Mobile Developer",
      githubUrl: "#",
      liveUrl: "#",
      featured: true,
    },
    {
      title: "SAP-Integrationsplattform für Unternehmensprozesse",
      description:
        "Entwicklung einer Integrationsplattform zur Verbindung von SAP ERP mit externen Systemen und Optimierung von Geschäftsprozessen.",
      longDescription:
        "Eine robuste Enterprise-Integrationsplattform, die SAP ERP-Systeme mit verschiedenen externen Anwendungen verbindet. Die Lösung automatisiert Geschäftsprozesse, reduziert manuelle Eingriffe und verbessert die Datenqualität durch Echtzeit-Synchronisation.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: [
        "SAP ERP",
        "ABAP",
        "SAP HANA",
        "API Integration",
        "Prozessautomatisierung",
        "REST/SOAP",
        "SAP PI/PO",
      ],
      features: [
        "Echtzeit-Datenintegration zwischen SAP und externen Systemen",
        "Automatisierte Workflow-Prozesse",
        "Fehlerbehandlung und Monitoring",
        "Custom ABAP-Entwicklungen",
        "API-Gateway für sichere Kommunikation",
        "Datenvalidierung und -transformation",
        "Umfassendes Logging und Reporting",
      ],
      challenges: [
        "Komplexe SAP-Systemlandschaft",
        "Performance-Optimierung bei großen Datenmengen",
        "Sicherheitsanforderungen für Enterprise-Umgebung",
        "Legacy-System-Integration",
      ],
      results: [
        "60% Reduzierung manueller Prozesse",
        "99.9% Systemverfügbarkeit",
        "50% Verbesserung der Datenqualität",
        "ROI von 300% innerhalb eines Jahres",
      ],
      duration: "12 Monate",
      teamSize: "6 Entwickler + 2 SAP Consultants",
      role: "SAP Integration Specialist",
      githubUrl: "#",
      featured: true,
    },
    {
      title: "Java-Anwendung zur Projektverwaltung",
      description:
        "Entwicklung einer Java-Anwendung zur Verwaltung von Projekt- und Mitarbeiterdaten mit automatisierter Berichterstellung.",
      longDescription:
        "Eine umfassende Desktop-Anwendung für Projektmanagement mit fortschrittlichen Funktionen zur Ressourcenplanung, Zeiterfassung und automatisierten Berichterstellung. Die Anwendung bietet intuitive Datenvisualisierung und unterstützt agile Projektmethoden.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Java", "Spring Boot", "JavaFX", "PostgreSQL", "JasperReports", "Maven", "JUnit"],
      features: [
        "Projektplanung mit Gantt-Charts",
        "Ressourcenmanagement und -zuweisung",
        "Zeiterfassung und Stundenabrechnung",
        "Automatisierte Berichterstellung",
        "Dashboard mit KPIs",
        "Benutzerrollenverwaltung",
        "Export in verschiedene Formate (PDF, Excel)",
      ],
      challenges: [
        "Komplexe Datenmodellierung für Projektstrukturen",
        "Performance bei großen Datenmengen",
        "Benutzerfreundliche UI-Gestaltung",
        "Skalierbarkeit für wachsende Teams",
      ],
      results: [
        "30% Effizienzsteigerung im Projektmanagement",
        "Reduzierung der Berichterstellungszeit um 80%",
        "Erfolgreiche Implementierung in 5 Unternehmen",
        "Positive Benutzerfeedbacks (4.5/5)",
      ],
      duration: "6 Monate",
      teamSize: "3 Entwickler",
      role: "Backend Developer & Architect",
      githubUrl: "#",
      featured: false,
    },
    {
      title: "E-Commerce Web-Anwendung",
      description:
        "Design und Entwicklung einer E-Commerce-Plattform mit Benutzerauthentifizierung und Produktverwaltung.",
      longDescription:
        "Eine vollständige E-Commerce-Lösung mit modernem Design, sicherer Zahlungsabwicklung und umfassendem Produktmanagement. Die Plattform unterstützt Multi-Vendor-Funktionalität und bietet erweiterte Suchfunktionen.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["HTML/CSS", "JavaScript", "PHP", "MySQL", "Bootstrap", "PayPal API", "Stripe"],
      features: [
        "Responsive Design für alle Geräte",
        "Sichere Benutzerauthentifizierung",
        "Produktkatalog mit Suchfunktion",
        "Warenkorb und Checkout-Prozess",
        "Zahlungsintegration (PayPal, Stripe)",
        "Admin-Panel für Produktverwaltung",
        "Bestellverfolgung und -historie",
      ],
      challenges: [
        "Sichere Zahlungsabwicklung",
        "Performance-Optimierung für große Produktkataloge",
        "Cross-Browser-Kompatibilität",
        "SEO-Optimierung",
      ],
      results: [
        "Erfolgreicher Launch mit 1000+ Produkten",
        "Conversion-Rate von 3.2%",
        "Mobile-First Design mit 95% mobiler Nutzung",
        "Integration von 3 Zahlungsanbietern",
      ],
      duration: "4 Monate",
      teamSize: "2 Entwickler + 1 Designer",
      role: "Full-Stack Developer",
      githubUrl: "#",
      liveUrl: "#",
      featured: false,
    },
    {
      title: "IT-Support-Automatisierung",
      description:
        "Entwicklung von Skripten zur Automatisierung wiederkehrender IT-Support-Aufgaben und Systemwartung.",
      longDescription:
        "Eine umfassende Automatisierungslösung für IT-Support-Teams, die repetitive Aufgaben automatisiert und die Effizienz steigert. Das System überwacht Systemmetriken, führt präventive Wartung durch und generiert automatische Berichte.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Python", "Bash", "PowerShell", "Ansible", "Docker", "Prometheus", "Grafana"],
      features: [
        "Automatisierte Systemüberwachung",
        "Präventive Wartungsskripte",
        "Ticket-System-Integration",
        "Automatische Backup-Verwaltung",
        "Performance-Monitoring",
        "Alert-System bei kritischen Ereignissen",
        "Reporting-Dashboard",
      ],
      challenges: [
        "Integration verschiedener IT-Systeme",
        "Fehlerbehandlung bei kritischen Prozessen",
        "Sicherheitsaspekte bei Systemzugriffen",
        "Skalierbarkeit für verschiedene Umgebungen",
      ],
      results: [
        "70% Reduzierung wiederkehrender Support-Tickets",
        "50% Verbesserung der Systemverfügbarkeit",
        "Automatisierung von 80% der Routineaufgaben",
        "Kosteneinsparung von 40% im IT-Support",
      ],
      duration: "5 Monate",
      teamSize: "2 DevOps Engineers",
      role: "Automation Specialist",
      githubUrl: "#",
      featured: false,
    },
    {
      title: "Medizinische Datenanalyse-Tool",
      description: "Entwicklung eines Tools zur Analyse und Visualisierung medizinischer Daten für Forschungszwecke.",
      longDescription:
        "Ein spezialisiertes Analysetool für medizinische Forschung, das komplexe Patientendaten verarbeitet und aussagekräftige Visualisierungen erstellt. Das Tool unterstützt verschiedene Datenformate und bietet statistische Analysefunktionen.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn", "Jupyter", "DICOM"],
      features: [
        "Import verschiedener medizinischer Datenformate",
        "Statistische Datenanalyse",
        "Interaktive Datenvisualisierung",
        "Machine Learning für Mustererkennung",
        "DICOM-Bildverarbeitung",
        "Anonymisierung von Patientendaten",
        "Export von Analyseergebnissen",
      ],
      challenges: [
        "Datenschutz und DSGVO-Konformität",
        "Verarbeitung großer medizinischer Datensätze",
        "Präzision bei medizinischen Analysen",
        "Integration verschiedener Datenquellen",
      ],
      results: [
        "Erfolgreiche Analyse von 10.000+ Patientendatensätzen",
        "Identifikation neuer medizinischer Muster",
        "Verwendung in 3 Forschungsstudien",
        "Publikation in medizinischen Fachzeitschriften",
      ],
      duration: "7 Monate",
      teamSize: "3 Entwickler + 2 Mediziner",
      role: "Data Scientist",
      githubUrl: "#",
      featured: false,
    },
    {
      title: "Sprachlern-App mit KI-Unterstützung",
      description:
        "Entwicklung einer mobilen App zum Sprachenlernen mit KI-gestützter Aussprachekorretur und personalisierten Lernplänen.",
      longDescription:
        "Eine innovative Sprachlern-App, die künstliche Intelligenz nutzt, um personalisierte Lernerfahrungen zu schaffen. Die App bietet Spracherkennung, adaptive Lernpfade und gamifizierte Elemente für erhöhte Motivation.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React Native", "Python", "TensorFlow", "Speech Recognition API", "Firebase", "Node.js"],
      features: [
        "KI-basierte Aussprachebewertung",
        "Personalisierte Lernpläne",
        "Spracherkennung und -synthese",
        "Gamification-Elemente",
        "Offline-Lernmodus",
        "Fortschrittsverfolgung",
        "Community-Features",
      ],
      challenges: [
        "Präzise Spracherkennung für verschiedene Akzente",
        "Optimierung der KI-Modelle für mobile Geräte",
        "Personalisierung ohne Datenschutzverletzung",
        "Cross-Platform-Performance",
      ],
      results: [
        "85% Verbesserung der Aussprache bei Nutzern",
        "4.7/5 Sterne in App Stores",
        "50.000+ aktive Nutzer",
        "Unterstützung für 8 Sprachen",
      ],
      duration: "10 Monate",
      teamSize: "5 Entwickler + 2 Linguisten",
      role: "Mobile App Developer",
      githubUrl: "#",
      liveUrl: "#",
      featured: false,
    },
    {
      title: "Krankenhaus-Managementsystem",
      description:
        "Entwicklung eines umfassenden Managementsystems für Krankenhäuser zur Verwaltung von Patienten, Personal und Ressourcen.",
      longDescription:
        "Ein vollständiges Hospital Information System (HIS), das alle Aspekte des Krankenhausbetriebs digitalisiert. Von der Patientenaufnahme bis zur Entlassung werden alle Prozesse optimiert und digitalisiert.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Java", "Spring Boot", "PostgreSQL", "Angular", "Docker", "Kubernetes", "HL7 FHIR"],
      features: [
        "Patientenverwaltung und -historie",
        "Terminplanung und -verwaltung",
        "Personalmanagement",
        "Medikamentenverwaltung",
        "Abrechnungssystem",
        "Labor- und Bildgebungsintegration",
        "Berichtswesen und Analytics",
      ],
      challenges: [
        "Integration mit bestehenden medizinischen Geräten",
        "Einhaltung medizinischer Standards (HL7, DICOM)",
        "24/7 Verfügbarkeit und Ausfallsicherheit",
        "Komplexe Benutzerrechte-Verwaltung",
      ],
      results: [
        "Implementierung in 2 Krankenhäusern",
        "30% Reduzierung der Verwaltungszeit",
        "Verbesserung der Patientensicherheit",
        "Vollständige Digitalisierung der Patientenakten",
      ],
      duration: "15 Monate",
      teamSize: "8 Entwickler + 3 Medizininformatiker",
      role: "Backend Developer & System Architect",
      githubUrl: "#",
      featured: false,
    },
    {
      title: "Biometrisches Authentifizierungssystem",
      description:
        "Implementierung eines mehrschichtigen Authentifizierungssystems mit Gesichtserkennung und Fingerabdruckscanner.",
      longDescription:
        "Ein hochsicheres biometrisches Authentifizierungssystem, das mehrere biometrische Faktoren kombiniert. Das System bietet hohe Sicherheit bei gleichzeitig benutzerfreundlicher Bedienung und ist für Enterprise-Umgebungen optimiert.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Python", "OpenCV", "TensorFlow", "Face Recognition", "Fingerprint SDK", "PostgreSQL", "Flask"],
      features: [
        "Gesichtserkennung mit Liveness-Detection",
        "Fingerabdruck-Authentifizierung",
        "Multi-Faktor-Authentifizierung",
        "Anti-Spoofing-Mechanismen",
        "Audit-Logging",
        "API für Drittanbieter-Integration",
        "Offline-Authentifizierung",
      ],
      challenges: [
        "Hohe Genauigkeit bei verschiedenen Lichtverhältnissen",
        "Schutz vor Spoofing-Angriffen",
        "Performance-Optimierung für Echtzeit-Verarbeitung",
        "Datenschutz biometrischer Daten",
      ],
      results: [
        "99.7% Erkennungsgenauigkeit",
        "0.01% False Acceptance Rate",
        "Integration in 10+ Sicherheitssysteme",
        "Zertifizierung nach ISO 27001",
      ],
      duration: "9 Monate",
      teamSize: "4 Entwickler + 1 Security Expert",
      role: "Computer Vision Developer",
      githubUrl: "#",
      featured: false,
    },
    {
      title: "Virtuelle Klassenzimmer-Plattform",
      description:
        "Entwicklung einer interaktiven Plattform für Online-Unterricht mit Echtzeit-Kollaboration und Fortschrittsverfolgung.",
      longDescription:
        "Eine umfassende E-Learning-Plattform, die virtuelle Klassenzimmer mit erweiterten Kollaborationsfunktionen bietet. Die Plattform unterstützt verschiedene Lernstile und bietet Lehrern umfangreiche Tools zur Unterrichtsgestaltung.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "Node.js", "WebRTC", "MongoDB", "Socket.io", "AWS", "Docker"],
      features: [
        "HD-Video-Konferenzen mit bis zu 100 Teilnehmern",
        "Interaktives Whiteboard",
        "Screen-Sharing und Präsentationen",
        "Breakout-Rooms für Gruppenarbeit",
        "Aufzeichnung von Unterrichtsstunden",
        "Quiz und Umfragen in Echtzeit",
        "Hausaufgaben-Management",
      ],
      challenges: [
        "Skalierung für große Nutzerzahlen",
        "Niedrige Latenz für Echtzeit-Kommunikation",
        "Cross-Browser-Kompatibilität",
        "Bandbreiten-Optimierung",
      ],
      results: [
        "Unterstützung von 10.000+ gleichzeitigen Nutzern",
        "Verwendung in 50+ Bildungseinrichtungen",
        "95% Verfügbarkeit während der Pandemie",
        "Auszeichnung als 'Beste E-Learning-Plattform 2023'",
      ],
      duration: "11 Monate",
      teamSize: "6 Entwickler + 2 UX Designer",
      role: "Frontend Lead Developer",
      githubUrl: "#",
      liveUrl: "#",
      featured: false,
    },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Projekte</h2>
          <p className="text-lg text-muted-foreground">
            Eine Auswahl meiner Projekte, die meine Fähigkeiten in verschiedenen Bereichen der Softwareentwicklung
            demonstrieren. Bewegen Sie die Maus über ein Projekt für detaillierte Informationen.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`group hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                project.featured ? "xl:col-span-2 lg:col-span-2" : ""
              }`}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  {project.featured && (
                    <Badge className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm">Featured</Badge>
                  )}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center p-4">
                      <p className="text-sm font-medium mb-2">Klicken für Details</p>
                      <div className="flex flex-wrap gap-1 justify-center">
                        {project.technologies.slice(0, 3).map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{project.technologies.length - 3}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Code className="w-5 h-5 text-primary" />
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground text-sm line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                  <div className="flex gap-2 pt-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Github className="w-3 h-3 mr-1" />
                      Code
                    </Button>
                    {project.liveUrl && (
                      <Button size="sm" className="flex-1">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Demo
                      </Button>
                    )}
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-background rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-background border-b p-6 flex items-center justify-between">
                <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                <Button variant="ghost" size="icon" onClick={() => setSelectedProject(null)}>
                  <X className="w-5 h-5" />
                </Button>
              </div>

              <div className="p-6 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Image
                      src={selectedProject.image || "/placeholder.svg"}
                      alt={selectedProject.title}
                      width={400}
                      height={250}
                      className="rounded-lg object-cover w-full"
                    />
                  </div>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span className="font-medium">Dauer:</span>
                        <span>{selectedProject.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-primary" />
                        <span className="font-medium">Team:</span>
                        <span>{selectedProject.teamSize}</span>
                      </div>
                      <div className="flex items-center gap-2 col-span-2">
                        <Target className="w-4 h-4 text-primary" />
                        <span className="font-medium">Rolle:</span>
                        <span>{selectedProject.role}</span>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Button asChild>
                        <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          GitHub
                        </a>
                      </Button>
                      {selectedProject.liveUrl && (
                        <Button variant="outline" asChild>
                          <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3">Projektbeschreibung</h4>
                  <p className="text-muted-foreground leading-relaxed">{selectedProject.longDescription}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3">Technologien</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <Badge key={index} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <Zap className="w-5 h-5 text-primary" />
                      Hauptfunktionen
                    </h4>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-3">Herausforderungen</h4>
                    <ul className="space-y-2">
                      {selectedProject.challenges.map((challenge, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3">Ergebnisse & Impact</h4>
                  <ul className="space-y-2">
                    {selectedProject.results.map((result, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            <Github className="w-4 h-4 mr-2" />
            Alle Projekte auf GitHub ansehen
          </Button>
        </div>
      </div>
    </section>
  )
}
