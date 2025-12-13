"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, Menu, X } from "lucide-react"
import Link from "next/link"

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const toggleDropdown = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu)
  }

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-teal/10">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal to-dark-teal flex items-center justify-center">
              <span className="text-cream text-xl font-bold">A</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-dark-teal">Abacus Pre-school</h1>
              <p className="text-xs text-sage">New Malden</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <Link href="/" className="text-dark-teal hover:text-teal transition-colors font-medium">
              Home
            </Link>

            {/* Who We Are Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center gap-1 text-dark-teal hover:text-teal transition-colors font-medium"
                onMouseEnter={() => setOpenDropdown("who-we-are")}
              >
                Who We Are
                <ChevronDown className="w-4 h-4" />
              </button>
              <div
                className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-medium border border-sage/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all"
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <div className="py-2">
                  <Link
                    href="/who-we-are"
                    className="block px-4 py-3 text-sage hover:text-dark-teal hover:bg-sage/5 transition-colors"
                  >
                    About Us
                  </Link>
                  <Link
                    href="/who-we-are#vision"
                    className="block px-4 py-3 text-sage hover:text-dark-teal hover:bg-sage/5 transition-colors"
                  >
                    Our Vision & Values
                  </Link>
                  <Link
                    href="/who-we-are#approach"
                    className="block px-4 py-3 text-sage hover:text-dark-teal hover:bg-sage/5 transition-colors"
                  >
                    Our Approach
                  </Link>
                  <Link
                    href="/who-we-are#learning"
                    className="block px-4 py-3 text-sage hover:text-dark-teal hover:bg-sage/5 transition-colors"
                  >
                    Learning Philosophy
                  </Link>
                  <Link
                    href="/contact"
                    className="block px-4 py-3 text-sage hover:text-dark-teal hover:bg-sage/5 transition-colors"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>

            {/* News & Events Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center gap-1 text-dark-teal hover:text-teal transition-colors font-medium"
                onMouseEnter={() => setOpenDropdown("news")}
              >
                News & Events
                <ChevronDown className="w-4 h-4" />
              </button>
              <div
                className="absolute top-full left-0 mt-2 w-48 bg-white rounded-2xl shadow-medium border border-sage/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all"
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <div className="py-2">
                  <Link
                    href="/news"
                    className="block px-4 py-3 text-sage hover:text-dark-teal hover:bg-sage/5 transition-colors"
                  >
                    Latest News & Blogs
                  </Link>
                </div>
              </div>
            </div>

            {/* Sessions & Fees Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center gap-1 text-dark-teal hover:text-teal transition-colors font-medium"
                onMouseEnter={() => setOpenDropdown("sessions")}
              >
                Sessions & Fees
                <ChevronDown className="w-4 h-4" />
              </button>
              <div
                className="absolute top-full left-0 mt-2 w-48 bg-white rounded-2xl shadow-medium border border-sage/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all"
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <div className="py-2">
                  <Link
                    href="/sessions-and-fees"
                    className="block px-4 py-3 text-sage hover:text-dark-teal hover:bg-sage/5 transition-colors"
                  >
                    Sessions & Fees
                  </Link>
                  <Link
                    href="/admissions"
                    className="block px-4 py-3 text-sage hover:text-dark-teal hover:bg-sage/5 transition-colors"
                  >
                    Admissions
                  </Link>
                  <Link
                    href="/holiday-club"
                    className="block px-4 py-3 text-sage hover:text-dark-teal hover:bg-sage/5 transition-colors"
                  >
                    Holiday Club
                  </Link>
                </div>
              </div>
            </div>

            <Button size="sm" className="bg-coral hover:bg-coral-dark text-cream rounded-full">
              Book a Visit
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-dark-teal"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-sage/10 pt-4">
            <div className="space-y-1">
              <Link
                href="/"
                className="block px-4 py-3 text-dark-teal hover:bg-sage/5 rounded-xl transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>

              {/* Who We Are Mobile */}
              <div>
                <button
                  onClick={() => toggleDropdown("who-we-are")}
                  className="w-full flex items-center justify-between px-4 py-3 text-dark-teal hover:bg-sage/5 rounded-xl transition-colors font-medium"
                >
                  Who We Are
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${openDropdown === "who-we-are" ? "rotate-180" : ""}`}
                  />
                </button>
                {openDropdown === "who-we-are" && (
                  <div className="ml-4 space-y-1 mt-1">
                    <Link
                      href="/who-we-are"
                      className="block px-4 py-2 text-sage hover:text-dark-teal hover:bg-sage/5 rounded-xl transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      About Us
                    </Link>
                    <Link
                      href="/who-we-are#vision"
                      className="block px-4 py-2 text-sage hover:text-dark-teal hover:bg-sage/5 rounded-xl transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Our Vision & Values
                    </Link>
                    <Link
                      href="/who-we-are#approach"
                      className="block px-4 py-2 text-sage hover:text-dark-teal hover:bg-sage/5 rounded-xl transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Our Approach
                    </Link>
                    <Link
                      href="/who-we-are#learning"
                      className="block px-4 py-2 text-sage hover:text-dark-teal hover:bg-sage/5 rounded-xl transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Learning Philosophy
                    </Link>
                    <Link
                      href="/contact"
                      className="block px-4 py-2 text-sage hover:text-dark-teal hover:bg-sage/5 rounded-xl transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Contact Us
                    </Link>
                  </div>
                )}
              </div>

              {/* News & Events Mobile */}
              <div>
                <button
                  onClick={() => toggleDropdown("news")}
                  className="w-full flex items-center justify-between px-4 py-3 text-dark-teal hover:bg-sage/5 rounded-xl transition-colors font-medium"
                >
                  News & Events
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${openDropdown === "news" ? "rotate-180" : ""}`}
                  />
                </button>
                {openDropdown === "news" && (
                  <div className="ml-4 space-y-1 mt-1">
                    <Link
                      href="/news"
                      className="block px-4 py-2 text-sage hover:text-dark-teal hover:bg-sage/5 rounded-xl transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Latest News & Blogs
                    </Link>
                  </div>
                )}
              </div>

              {/* Sessions & Fees Mobile */}
              <div>
                <button
                  onClick={() => toggleDropdown("sessions")}
                  className="w-full flex items-center justify-between px-4 py-3 text-dark-teal hover:bg-sage/5 rounded-xl transition-colors font-medium"
                >
                  Sessions & Fees
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${openDropdown === "sessions" ? "rotate-180" : ""}`}
                  />
                </button>
                {openDropdown === "sessions" && (
                  <div className="ml-4 space-y-1 mt-1">
                    <Link
                      href="/sessions-and-fees"
                      className="block px-4 py-2 text-sage hover:text-dark-teal hover:bg-sage/5 rounded-xl transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Sessions & Fees
                    </Link>
                    <Link
                      href="/admissions"
                      className="block px-4 py-2 text-sage hover:text-dark-teal hover:bg-sage/5 rounded-xl transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Admissions
                    </Link>
                    <Link
                      href="/holiday-club"
                      className="block px-4 py-2 text-sage hover:text-dark-teal hover:bg-sage/5 rounded-xl transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Holiday Club
                    </Link>
                  </div>
                )}
              </div>

              <div className="px-4 pt-4">
                <Button size="sm" className="w-full bg-coral hover:bg-coral-dark text-cream rounded-full">
                  Book a Visit
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
