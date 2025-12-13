"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sparkles, BookOpen, Award } from "lucide-react"
import { useState, useEffect } from "react"

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      id="home"
      className="relative py-20 md:py-32 bg-gradient-to-br from-cream via-cream-light to-sage/10 overflow-hidden"
    >
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-20 left-10 w-64 h-64 rounded-full bg-gradient-to-br from-teal/30 to-coral/20 blur-3xl animate-float"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        ></div>
        <div
          className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-gradient-to-br from-sage/30 to-orange/20 blur-3xl animate-float-delayed"
          style={{ transform: `translateY(${scrollY * -0.3}px)` }}
        ></div>
        <div
          className="absolute top-1/2 left-1/3 w-56 h-56 rounded-full bg-gradient-to-br from-orange/20 to-teal/20 blur-3xl animate-pulse-slow"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        ></div>
      </div>

      {/* Content */}
      <div
        className={`container mx-auto px-4 relative transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="max-w-3xl mx-auto text-center">
          <Badge className="mb-6 bg-white/20 backdrop-blur-md text-dark-teal border-white/30 rounded-full px-6 py-2 shadow-soft animate-fade-in">
            Ages 2-5 • New Malden, Surrey
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-dark-teal mb-6 text-balance leading-tight animate-slide-up">
            Where Learning Begins with{" "}
            <span className="bg-gradient-to-r from-teal via-sage to-coral bg-clip-text text-transparent animate-gradient">
              Wonder
            </span>
          </h1>
          <p className="text-lg md:text-xl text-sage mb-8 text-pretty leading-relaxed max-w-2xl mx-auto animate-slide-up-delayed">
            At Abacus Pre-school, we nurture curious minds in a warm, inclusive environment where every child can
            explore, grow, and thrive together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up-delayed-2">
            <Button
              size="lg"
              className="bg-teal hover:bg-dark-teal text-cream rounded-full text-lg px-8 shadow-glow hover:shadow-glow-lg transition-all duration-300 hover:scale-105"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Apply Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-teal text-teal hover:bg-teal hover:text-cream rounded-full text-lg px-8 bg-white/50 backdrop-blur-sm transition-all duration-300 hover:scale-105"
            >
              Book a Visit
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Icons */}
      <div className="absolute top-40 right-20 w-20 h-20 opacity-10 animate-spin-slow">
        <BookOpen className="w-full h-full text-teal" />
      </div>
      <div className="absolute bottom-40 left-20 w-16 h-16 opacity-10 animate-bounce-slow">
        <Award className="w-full h-full text-coral" />
      </div>
    </section>
  )
}
