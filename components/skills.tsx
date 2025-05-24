import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Globe, Wrench } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      icon: Code,
      title: "Programmierung",
      skills: [
        { name: "Java", level: 85 },
        { name: "Python", level: 80 },
        { name: "JavaScript", level: 75 },
        { name: "C++", level: 70 },
        { name: "HTML/CSS", level: 85 },
      ],
    },
    {
      icon: Database,
      title: "Datenbanken & Backend",
      skills: [
        { name: "SQL", level: 80 },
        { name: "MySQL", level: 75 },
        { name: "PostgreSQL", level: 70 },
        { name: "Node.js", level: 65 },
        { name: "REST APIs", level: 70 },
      ],
    },
    {
      icon: Globe,
      title: "Web-Technologien",
      skills: [
        { name: "React", level: 75 },
        { name: "Next.js", level: 70 },
        { name: "TypeScript", level: 65 },
        { name: "Tailwind CSS", level: 80 },
        { name: "Responsive Design", level: 85 },
      ],
    },
    {
      icon: Wrench,
      title: "Tools & Systeme",
      skills: [
        { name: "Git", level: 85 },
        { name: "Linux", level: 75 },
        { name: "Docker", level: 60 },
        { name: "SAP", level: 65 },
        { name: "Agile Methoden", level: 70 },
      ],
    },
  ]

  const languages = [
    { name: "Deutsch", level: "Fließend" },
    { name: "Arabisch", level: "Muttersprache" },
    { name: "Französisch", level: "Fließend" },
    { name: "Englisch", level: "Fließend" },
  ]

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Fähigkeiten</h2>
          <p className="text-lg text-muted-foreground">
            Eine Übersicht über meine technischen Fähigkeiten und Kompetenzen, die ich durch Studium und praktische
            Erfahrung entwickelt habe.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <category.icon className="w-5 h-5 text-primary" />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-primary" />
              Sprachen
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {languages.map((language, index) => (
                <Badge key={index} variant="secondary" className="text-sm py-2 px-3">
                  {language.name} - {language.level}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
