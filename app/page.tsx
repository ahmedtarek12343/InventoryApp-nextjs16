import Prism from "../components/Prism";
import ShinyText from "../components/ShinyText";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Package,
  BarChart3,
  Zap,
  Shield,
  TrendingUp,
  Clock,
  Users,
  Star,
  Target,
  Sparkles,
} from "lucide-react";

const page = () => {
  const features = [
    {
      icon: Package,
      title: "Easy Product Management",
      description:
        "Add, edit, and organize products with a few clicks. Intuitive interface makes inventory management a breeze.",
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description:
        "Track inventory trends with beautiful charts and insights. Make data-driven decisions with confidence.",
      color: "from-purple-500/20 to-pink-500/20",
    },
    {
      icon: Zap,
      title: "Smart Alerts",
      description:
        "Get notified when stock levels are running low. Never miss a restock opportunity again.",
      color: "from-yellow-500/20 to-orange-500/20",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description:
        "Your data is protected with enterprise-grade security. Regular backups ensure nothing is ever lost.",
      color: "from-green-500/20 to-emerald-500/20",
    },
    {
      icon: TrendingUp,
      title: "Business Growth",
      description:
        "Optimize your inventory to reduce costs and increase profitability with intelligent insights.",
      color: "from-indigo-500/20 to-blue-500/20",
    },
    {
      icon: Clock,
      title: "Save Time",
      description:
        "Automate routine tasks and focus on growing your business instead of managing spreadsheets.",
      color: "from-red-500/20 to-rose-500/20",
    },
  ];

  const benefits = [
    "No credit card required",
    "14-day free trial",
    "Cancel anytime",
    "24/7 customer support",
  ];

  const stats = [
    { value: "10K+", label: "Active Users", icon: Users },
    { value: "500K+", label: "Products Tracked", icon: Package },
    { value: "99.9%", label: "Uptime", icon: Shield },
    { value: "4.9/5", label: "User Rating", icon: Star },
  ];

  return (
    <>
      <Navbar />
      <div className="absolute inset-0 -z-1 min-h-screen">
        <Prism
          animationType="rotate"
          timeScale={0.3}
          height={4}
          baseWidth={5.5}
          scale={3.5}
          hueShift={0}
          colorFrequency={1}
          noise={0}
          glow={0.8}
        />
      </div>

      <main className="">
        {/* Hero Section */}
        <section className="relative flex items-center justify-center px-4 py-20 overflow-hidden">
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="space-y-8 w-full">
              {/* Main Title */}
              <div className="space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                <ShinyText
                  text="Inventrico"
                  disabled={false}
                  speed={3}
                  className="text-[clamp(3rem,8vw,6rem)] font-bold mb-6"
                />
                <p className="text-[clamp(1.2rem,4vw,1.5rem)] text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Streamline your inventory tracking with our powerful,
                  easy-to-use management system. Track products, monitor stock
                  levels, and gain valuable insights to grow your business.
                </p>
              </div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <Sparkles className="w-4 h-4" />
                <span>Streamline Your Inventory Management</span>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col items-center sm:flex-row justify-center gap-4 mt-12 animate-in fade-in slide-in-from-bottom-12 duration-1200">
                <Button
                  asChild
                  size="lg"
                  className="text-base cursor-pointer py-7 px-10 rounded-lg group shadow-lg hover:shadow-xl transition-all"
                >
                  <Link href="/sign-in" className="flex items-center gap-2">
                    Get Started Free
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant={"outline"}
                  className="text-base py-7 cursor-pointer px-10 rounded-lg group border-2 hover:bg-accent/50 transition-all"
                >
                  <Link href="/about" className="flex items-center gap-2">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>

              {/* Benefits List */}
              <div className="flex bg-card p-4 rounded-2xl flex-wrap justify-center gap-6 mt-12 text-sm text-muted-foreground animate-in fade-in slide-in-from-bottom-16 duration-1500">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default page;
