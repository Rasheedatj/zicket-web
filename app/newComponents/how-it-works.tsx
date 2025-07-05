import { Shield, Users, Calendar } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: Shield,
      title: "Discover Without Login",
      description:
        "Guests can explore public or private events without creating accounts or being tracked.",
    },
    {
      icon: Users,
      title: "Attend On Your Terms",
      description:
        "Join events anonymously or with zk verification — no personal data exposed.",
    },
    {
      icon: Calendar,
      title: "Only Connect When Needed",
      description:
        "Wallets are used only for payment. No guest wallet required for free events.",
    },
  ];

  return (
    <section className="">
      <div className="mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-[#2C0A4A] text-[30px] md:text-[40px] font-bold mb-4">
            How It Works
          </h2>
          <p className="text-[#6C6C6C] text-[16px]">
            Privacy-Focused Events in 3 Steps
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="text-center bg-[#FBFAF9] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <step.icon className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-[18px] text-[#2C0A4A] font-semibold mb-4">
                {step.title}
              </h3>
              <p className="text-[#6C6C6C] text-[14px]">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
