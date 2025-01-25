"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle, ChevronDown, MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const plans = [
    {
      name: "Free Plan",
      description: "Perfect for getting started",
      price: "$0",
      features: [
        "Boost engagement with target responses",
        "Automate comment replies to enhance audience interaction",
        "Turn followers into customers with targeted messaging",
      ],
      cta: "Get Started",
    },
    {
      name: "Smart AI Plan",
      description: "Advanced features for power users",
      price: "$99",
      features: [
        "All features from Free Plan",
        "AI-powered response generation",
        "Advanced analytics and insights",
        "Priority customer support",
        "Custom branding options",
      ],
      cta: "Upgrade Now",
    },
  ];

  return (
    <main className="bg-gradient-to-b from-slate-900 via-blue-900 to-background">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      <div className="relative">
        <div className="container px-4 py-8">
          <header className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold underline underline-offset-2 text-[#AABBFF]">
                SteelDM
              </span>
            </div>
            <nav className="hidden space-x-6 text-sm text-blue-200 md:flex">
              <Link
                href="#features"
                className="hover:text-white transition-colors"
              >
                Features
              </Link>
              <Link
                href="#pricing"
                className="hover:text-white transition-colors"
              >
                Pricing
              </Link>
              <Link
                href="#about"
                className="hover:text-white transition-colors"
              >
                About
              </Link>
            </nav>
            <div className="flex items-center gap-4">
              <Button className="bg-white text-blue-600 hover:bg-blue-50">
                <Link href="/dashboard">Login</Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-white"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <MenuIcon className="h-6 w-6" />
              </Button>
            </div>
          </header>

          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden mt-4 space-y-2"
            >
              <Link
                href="#features"
                className="block py-2 text-blue-200 hover:text-white transition-colors"
              >
                Features
              </Link>
              <Link
                href="#pricing"
                className="block py-2 text-blue-200 hover:text-white transition-colors"
              >
                Pricing
              </Link>
              <Link
                href="#about"
                className="block py-2 text-blue-200 hover:text-white transition-colors"
              >
                About
              </Link>
            </motion.nav>
          )}

          <div className="mx-auto mt-16 max-w-3xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold leading-tight tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Transform Your Instagram Engagement with SteelDM
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-lg text-blue-200"
            >
              SteelDM revolutionizes how you connect with your audience on
              Instagram. Automate responses and boost engagement effortlessly,
              turning interactions into valuable business opportunities.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 flex justify-center gap-4"
            >
              <Button
                size="lg"
                className="bg-blue-600 text-white hover:bg-blue-700"
              >
                Get Started
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-400 text-white hover:bg-blue-600/20"
              >
                Learn More
              </Button>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="relative h-60 md:h-96 w-full mt-10 rounded-xl overflow-hidden"
          >
            <Image
              src="/images/Ig-creators.png"
              alt="Community members"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>

      <section className="container w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center space-y-4 text-center"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-600">
              Choose Your Plan
            </h2>
            <p className="max-w-[900px] text-muted-foreground">
              Select the perfect plan to boost your Instagram engagement
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 md:gap-8"
          >
            {plans.map((plan, index) => (
              <Card
                key={index}
                className="flex flex-col justify-between border-blue-200 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors"
              >
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-400">
                    {plan.name}
                  </CardTitle>
                  <CardDescription className="text-blue-200">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className="text-4xl font-bold text-white">
                    {plan.price}
                    <span className="text-lg font-normal text-blue-300">
                      /month
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4 text-blue-400" />
                        <span className="text-sm text-blue-200">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">
                    {plan.cta}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="container flex justify-center pb-12"
      >
        <Button
          variant="ghost"
          className="text-blue-400 hover:text-blue-300"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Back to Top
          <ChevronDown className="ml-2 h-4 w-4 rotate-180" />
        </Button>
      </motion.div>
    </main>
  );
}
