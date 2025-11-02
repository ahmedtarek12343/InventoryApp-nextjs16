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

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
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

        {/* Stats Section */}
        <section className="relative py-20 px-4 border-border/50 bg-background/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                    <stat.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="relative py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <Target className="w-4 h-4" />
                <span>Powerful Features</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Everything You Need to
                <br />
                <span className="text-primary">Manage Your Inventory</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive tools designed to make inventory management
                effortless and efficient.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group relative p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}
                  />
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="relative py-24 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  <Star className="w-4 h-4" />
                  <span>Why Choose Inventrico</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Built for Modern
                  <br />
                  <span className="text-primary">Businesses</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Inventrico combines powerful functionality with intuitive
                  design. Whether you're a small startup or a growing
                  enterprise, we've got you covered.
                </p>
                <div className="space-y-4">
                  {[
                    "Real-time inventory tracking across all devices",
                    "Automated low stock alerts to prevent stockouts",
                    "Beautiful analytics dashboard with actionable insights",
                    "Secure cloud storage with automatic backups",
                    "Easy-to-use interface that requires no training",
                    "Scalable solution that grows with your business",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="relative rounded-2xl border border-border bg-gradient-to-br from-primary/10 via-background to-primary/5 p-12">
                  <div className="space-y-8">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                        <Zap className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Lightning Fast</h4>
                        <p className="text-sm text-muted-foreground">
                          Instant updates and real-time sync
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                        <Shield className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">
                          Enterprise Security
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Bank-level encryption and security
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">
                          Data-Driven Insights
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Make informed decisions with analytics
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="relative py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary/10 via-background to-primary/5 p-12 md:p-16 text-center">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Transform Your Inventory Management?
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                  Join thousands of businesses already using Inventrico to
                  streamline their operations and boost productivity.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="text-base cursor-pointer px-10 py-7 rounded-lg shadow-lg hover:shadow-xl transition-all group"
                  >
                    <Link href="/sign-in" className="flex items-center gap-2">
                      Start Free Trial
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="text-base cursor-pointer px-10 py-7 rounded-lg border-2"
                  >
                    <Link href="/dashboard">View Dashboard</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4">
        <div className="max-w-7xl mx-auto text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Inventrico. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default page;
