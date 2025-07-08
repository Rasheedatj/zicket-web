import { Badge } from "@/components/ui/badge"

export function TrustIndicators() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center space-x-8 opacity-60">
          <span className="text-sm font-medium">Trusted worldwide</span>
          <div className="flex space-x-6">
            <Badge variant="outline">CONNECT</Badge>
            <Badge variant="outline">ACTIVE</Badge>
          </div>
        </div>
      </div>
    </section>
  )
}
