import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronDown } from "lucide-react"

export function FAQSection() {
  const faqs = [
    "What makes Zicket unique?",
    "Do I need an account to get tickets?",
    "Is my identity hidden when I attend events?",
    "What kind of events are on Zicket?",
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">FAQs</h2>
          <p className="text-gray-600">
            Find all you need to know about Zicket – how it works, what makes it unique, and how you can get the most
            out of your events.
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="p-6">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold">{faq}</h3>
                <ChevronDown className="w-5 h-5 text-purple-600" />
              </div>
              {index === 0 && (
                <p className="text-gray-600 mt-4">
                  Zicket is a privacy-first event platform built for fans. It lets you discover and attend events
                  anonymously, while keeping your personal data secure. You only share what you choose.
                </p>
              )}
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button variant="outline">View More →</Button>
        </div>
      </div>
    </section>
  )
}
