import {
  BarChart3,
  Calendar,
  Zap,
  Users,
  Settings,
  Globe,
  Lock,
  Shield,
  ArrowUpRight,
} from "lucide-react";

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
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center gap-6 px-4">
        <div className="">
          <h2 className="text-[30px] md:text-[40px] text-[#2C0A4A] font-bold mb-4">
            Powerful Tools for
            <br />
            Public or Private Events.
          </h2>
          <p className="text-[#6C6C6C] text-[16px]">
            Privacy-first event hosting and ticketing. Build a More Private,
            Trusted Space for your community of fans.
          </p>
          <button className="mt-16 flex border border-[#2C0A4A] rounded-full py-2 px-3 text-[#2C0A4a] cursor-pointer">
            Explore Events <ArrowUpRight w-5 h-5 />
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {tools.map((tool, index) => (
            <div key={index} className="text-center ">
              <div className="w-[130px] h-[130px] flex justify-center items-center border border-[#797979] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow mx-auto mb-4">
                <tool.icon className="w-15 h-15 text-[#6C6C6C]" />
              </div>
              <h3 className="font-medium text-sm">{tool.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
