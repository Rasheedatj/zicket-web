import { Button } from "@/components/ui/button"

export function HostInPeace() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-50 to-indigo-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Host in Peace. No
          <br />
          Spreadsheets or Stalkers.
        </h2>
        <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
          Create events without compromising your privacy. Secure, efficient event management and privacy.
        </p>
        <Button className="bg-purple-600 hover:bg-purple-700">Host An Event →</Button>
      </div>
    </section>
  )
}
