import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Target,
  Users,
  Lightbulb,
  Award,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To simplify inventory management for businesses of all sizes with intuitive, powerful tools that anyone can use.",
  },
  {
    icon: Users,
    title: "Customer First",
    description:
      "We build features based on real user feedback and are committed to providing exceptional support to every customer.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We continuously improve our platform with cutting-edge technology to help you stay ahead of the competition.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We maintain the highest standards in security, reliability, and user experience to earn your trust every day.",
  },
];

const stats = [
  { number: "1000+", label: "Active Users" },
  { number: "50K+", label: "Products Tracked" },
  { number: "99.9%", label: "Uptime" },
  { number: "24/7", label: "Support" },
];

const benefits = [
  "Real-time inventory tracking across all your products",
  "Automated low stock alerts to prevent stockouts",
  "Beautiful analytics dashboard with actionable insights",
  "Secure cloud storage with automatic backups",
  "Easy-to-use interface that requires no training",
  "Mobile-friendly design for on-the-go management",
];

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 px-4">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-background/50 backdrop-blur-sm mb-6">
              <span className="text-sm text-muted-foreground">
                About Inventrico
              </span>
            </div>
            <h1 className="text-[clamp(2.5rem,6vw,4rem)] font-bold mb-6">
              Inventory Management
              <br />
              <span className="text-primary">Reimagined</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're on a mission to make inventory management simple, powerful,
              and accessible to businesses of all sizes. No complicated setup,
              no steep learning curve—just powerful tools that work.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 border-y border-border">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl font-bold mb-4">Our Story</h2>
                <p className="text-muted-foreground mb-4">
                  Inventrico was born from a simple frustration: existing
                  inventory management solutions were either too complex for
                  small businesses or too expensive for growing companies.
                </p>
                <p className="text-muted-foreground mb-4">
                  We built Inventrico to bridge that gap—a powerful yet
                  intuitive platform that grows with your business. Whether
                  you're managing 10 products or 10,000, Inventrico adapts to
                  your needs.
                </p>
                <p className="text-muted-foreground">
                  Today, we're proud to help thousands of businesses streamline
                  their operations, reduce costs, and make data-driven decisions
                  with confidence.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-8 space-y-4">
                <h3 className="text-xl font-semibold mb-4">
                  Why Choose Inventrico?
                </h3>
                {benefits.slice(0, 4).map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Our Values</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="p-8 rounded-xl border border-border bg-card hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Highlight */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              What You Get
            </h2>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-primary/10 via-background to-primary/5 p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Transform Your Inventory Management?
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
                Join thousands of businesses who trust Inventrico to manage
                their inventory efficiently and effectively.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="cursor-pointer px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
                >
                  <Link href="/sign-in" className="flex items-center gap-2">
                    Get Started Free
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="cursor-pointer px-8 py-6 rounded-lg"
                >
                  <Link href="/dashboard">View Demo</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Inventrico. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default AboutPage;
