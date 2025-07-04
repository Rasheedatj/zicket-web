import { Shield, Users, Calendar } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      icon: Shield,
      title: "Discover Without Login",
      description:
        "Browse and discover events or private groups without creating an account. Maintain complete anonymity while exploring.",
    },
    {
      icon: Users,
      title: "Attend On Your Terms",
      description:
        "Join events with customizable privacy settings. Share only what you want, when you want to share it.",
    },
    {
      icon: Calendar,
      title: "Only Connect When Needed",
      description:
        "Engage with hosts and attendees only when necessary. Keep your personal information private and secure.",
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-600 text-lg">Privacy-Focused Events in 3 Steps</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <step.icon className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
