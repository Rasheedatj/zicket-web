import { Button } from "@/components/ui/button"
import { BarChart3, Calendar, Zap, Users, Settings, Globe, Lock, Shield } from "lucide-react"

export function PowerfulTools() {
  const tools = [
    { icon: BarChart3, title: "Weekly Event Reports" },
    { icon: Calendar, title: "Custom Calendars" },
    { icon: Zap, title: "Quick Registration" },
    { icon: Users, title: "Team Analytics" },
    { icon: Settings, title: "Advanced Settings" },
    { icon: Globe, title: "Multi-Event" },
    { icon: Lock, title: "Enhanced Privacy" },
    { icon: Shield, title: "Secure Management" },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful Tools for
            <br />
            Public or Private Events.
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Privacy-first event hosting and ticketing. Build a More Private, Trusted Space for your community of fans.
          </p>
          <Button variant="outline" className="mt-6 bg-transparent">
            Explore Events →
          </Button>
        </div>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {tools.map((tool, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center mx-auto mb-4">
                <tool.icon className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-medium text-sm">{tool.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
