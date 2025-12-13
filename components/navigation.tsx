"use client"

import Link from "next/link"
import { useEffect, useId, useMemo, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, Menu, X, CalendarDays } from "lucide-react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"

type NavItem = { label: string; href: string }
type NavGroup = { key: "who" | "news" | "sessions"; label: string; items: NavItem[] }

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDesktop, setOpenDesktop] = useState<NavGroup["key"] | null>(null)
  const [openMobile, setOpenMobile] = useState<NavGroup["key"] | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  const dropdownId = useId()
  const closeTimer = useRef<number | null>(null)

  const groups: NavGroup[] = useMemo(
    () => [
      {
        key: "who",
        label: "Who We Are",
        items: [
          // Your requested structure can map to these pages/anchors:
          { label: "Our Staff", href: "/who-we-are/our-staff" },
          { label: "Our Mission, Purpose, Vision & Values", href: "/who-we-are/mission-vision-values" },
          { label: "Learning Journeys", href: "/who-we-are/learning-journeys" },
          { label: "Policies & Procedures", href: "/who-we-are/policies-procedures" },
          { label: "Contact Us", href: "/contact" },
        ],
      },
      {
        key: "news",
        label: "News & Events",
        items: [{ label: "Blogs", href: "/news" }],
      },
      {
        key: "sessions",
        label: "Sessions & Fees",
        items: [
          { label: "Admissions", href: "/admissions" },
          { label: "Holiday Club", href: "/holiday-club" },
        ],
      },
    ],
    []
  )

  // Sticky header polish on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Lock body scroll when mobile menu open
  useEffect(() => {
    if (!mobileMenuOpen) return
    const original = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = original
    }
  }, [mobileMenuOpen])

  const safeSetOpenDesktop = (key: NavGroup["key"] | null) => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current)
    setOpenDesktop(key)
  }

  const scheduleCloseDesktop = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current)
    closeTimer.current = window.setTimeout(() => setOpenDesktop(null), 110)
  }

  const closeAll = () => {
    setOpenDesktop(null)
    setOpenMobile(null)
    setMobileMenuOpen(false)
  }

  // Keyboard: ESC closes menus
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenDesktop(null)
        setOpenMobile(null)
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [])

  const dropdownMotion = {
    initial: shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10, scale: 0.98 },
    animate: shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 },
    exit: shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10, scale: 0.98 },
    transition: { duration: 0.18, ease: "easeOut" as const },
  }

  const overlayMotion = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.18 },
  }

  const drawerMotion = {
    initial: shouldReduceMotion ? { x: 0 } : { x: "8%" },
    animate: { x: 0 },
    exit: shouldReduceMotion ? { x: 0 } : { x: "8%" },
    transition: { duration: 0.22, ease: "easeOut" as const },
  }

  return (
    <header
      className={[
        "sticky top-0 z-50 border-b",
        scrolled ? "bg-cream/85 backdrop-blur-md border-teal/15 shadow-[0_10px_30px_rgba(0,0,0,0.06)]" : "bg-cream/95 border-teal/10",
      ].join(" ")}
    >
      {/* Subtle animated gradient line */}
      <div className="relative h-[3px] overflow-hidden">
        <div className="absolute inset-0 opacity-80 bg-gradient-to-r from-teal via-coral to-teal animate-[navGradient_8s_linear_infinite]" />
      </div>

      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between" aria-label="Primary">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-teal to-dark-teal flex items-center justify-center shadow-[0_12px_28px_rgba(0,0,0,0.12)]">
              <span className="text-cream text-xl font-bold">A</span>
              {/* Soft glow */}
              <span className="pointer-events-none absolute -inset-3 rounded-full bg-gradient-to-br from-teal/25 to-coral/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="leading-tight">
              <h1 className="text-xl font-bold text-dark-teal tracking-tight">Abacus Pre-school</h1>
              <p className="text-xs text-sage">New Malden</p>
            </div>
          </Link>

          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-7">
            <NavLink href="/">Home</NavLink>

            {groups.map((g) => (
              <div
                key={g.key}
                className="relative"
                onMouseEnter={() => safeSetOpenDesktop(g.key)}
                onMouseLeave={scheduleCloseDesktop}
              >
                <button
                  type="button"
                  className="inline-flex items-center gap-1 text-dark-teal hover:text-teal transition-colors font-medium outline-none focus-visible:ring-2 focus-visible:ring-teal/40 rounded-xl px-2 py-1"
                  aria-haspopup="menu"
                  aria-expanded={openDesktop === g.key}
                  aria-controls={`${dropdownId}-${g.key}`}
                  onFocus={() => safeSetOpenDesktop(g.key)}
                  onBlur={() => scheduleCloseDesktop()}
                >
                  {g.label}
                  <ChevronDown className={["w-4 h-4 transition-transform", openDesktop === g.key ? "rotate-180" : ""].join(" ")} />
                </button>

                <AnimatePresence>
                  {openDesktop === g.key && (
                    <motion.div
                      {...dropdownMotion}
                      id={`${dropdownId}-${g.key}`}
                      role="menu"
                      className="absolute top-full left-0 mt-3 w-[320px] rounded-2xl border border-sage/10 bg-white/90 backdrop-blur-md shadow-[0_18px_60px_rgba(0,0,0,0.14)] overflow-hidden"
                      onMouseEnter={() => safeSetOpenDesktop(g.key)}
                      onMouseLeave={scheduleCloseDesktop}
                    >
                      <div className="p-2">
                        {g.items.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            role="menuitem"
                            className="group flex items-center justify-between gap-3 rounded-xl px-3 py-3 text-sage hover:text-dark-teal hover:bg-sage/5 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-teal/35"
                            onClick={() => setOpenDesktop(null)}
                          >
                            <span className="text-sm font-medium">{item.label}</span>
                            <span className="h-8 w-8 rounded-xl bg-gradient-to-br from-teal/10 to-coral/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </Link>
                        ))}

                        {g.key === "sessions" && (
                          <Link
                            href="/sessions-and-fees"
                            role="menuitem"
                            className="mt-1 flex items-center justify-between rounded-xl px-3 py-3 text-dark-teal bg-teal/10 hover:bg-teal/15 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-teal/35"
                            onClick={() => setOpenDesktop(null)}
                          >
                            <span className="text-sm font-semibold">View Sessions & Fees</span>
                            <span className="text-xs text-sage">Details</span>
                          </Link>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            {/* CTA with subtle “live” motion accent */}
            <Button
              size="sm"
              className="relative bg-coral hover:bg-coral-dark text-cream rounded-full px-5 shadow-[0_14px_30px_rgba(0,0,0,0.14)] overflow-hidden"
              asChild
            >
              <Link href="/contact#book-visit" className="inline-flex items-center gap-2">
                <motion.span
                  aria-hidden="true"
                  animate={
                    shouldReduceMotion
                      ? {}
                      : {
                        rotate: [0, -6, 6, -4, 4, 0],
                      }
                  }
                  transition={shouldReduceMotion ? {} : { duration: 1.2, repeat: Infinity, repeatDelay: 6 }}
                >
                  <CalendarDays className="h-4 w-4" />
                </motion.span>
                Book a Visit
                {/* Shine */}
                <span className="pointer-events-none absolute -left-1/2 top-0 h-full w-1/2 bg-white/20 skew-x-[-20deg] translate-x-[-120%] group-hover:translate-x-[260%] transition-transform duration-700" />
              </Link>
            </Button>
          </div>

          {/* Mobile button */}
          <button
            className="lg:hidden inline-flex items-center justify-center rounded-xl px-3 py-2 text-dark-teal hover:bg-sage/5 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-teal/40"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </nav>
      </div>

      {/* Mobile overlay + drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.button
              type="button"
              className="fixed inset-0 z-50 bg-black/30 backdrop-blur-[2px]"
              aria-label="Close menu overlay"
              onClick={() => setMobileMenuOpen(false)}
              {...overlayMotion}
            />
            <motion.aside
              className="fixed right-0 top-0 bottom-0 z-[60] w-[92%] max-w-md bg-white/95 backdrop-blur-md border-l border-sage/10 shadow-[0_20px_70px_rgba(0,0,0,0.18)]"
              {...drawerMotion}
              aria-label="Mobile menu"
            >
              <div className="flex items-center justify-between px-5 py-5 border-b border-sage/10">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-teal to-dark-teal flex items-center justify-center">
                    <span className="text-cream text-lg font-bold">A</span>
                  </div>
                  <div className="leading-tight">
                    <div className="font-bold text-dark-teal">Abacus Pre-school</div>
                    <div className="text-xs text-sage">New Malden</div>
                  </div>
                </div>

                <button
                  className="inline-flex items-center justify-center rounded-xl px-3 py-2 text-dark-teal hover:bg-sage/5 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-teal/40"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="px-4 py-4">
                <Link
                  href="/"
                  className="block rounded-xl px-4 py-3 text-dark-teal hover:bg-sage/5 transition-colors font-medium outline-none focus-visible:ring-2 focus-visible:ring-teal/35"
                  onClick={closeAll}
                >
                  Home
                </Link>

                <div className="mt-2 space-y-2">
                  {groups.map((g) => (
                    <div key={g.key} className="rounded-2xl border border-sage/10 bg-white/60">
                      <button
                        type="button"
                        onClick={() => setOpenMobile(openMobile === g.key ? null : g.key)}
                        className="w-full flex items-center justify-between rounded-2xl px-4 py-4 text-dark-teal hover:bg-sage/5 transition-colors font-medium outline-none focus-visible:ring-2 focus-visible:ring-teal/35"
                        aria-expanded={openMobile === g.key}
                      >
                        {g.label}
                        <ChevronDown
                          className={[
                            "w-5 h-5 transition-transform",
                            openMobile === g.key ? "rotate-180" : "",
                          ].join(" ")}
                        />
                      </button>

                      <AnimatePresence initial={false}>
                        {openMobile === g.key && (
                          <motion.div
                            initial={shouldReduceMotion ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                            animate={shouldReduceMotion ? { height: "auto", opacity: 1 } : { height: "auto", opacity: 1 }}
                            exit={shouldReduceMotion ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="overflow-hidden"
                          >
                            <div className="px-3 pb-3">
                              {g.items.map((item) => (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  className="block rounded-xl px-4 py-2 text-sage hover:text-dark-teal hover:bg-sage/5 transition-colors outline-none focus-visible:ring-2 focus-visible:ring-teal/35"
                                  onClick={closeAll}
                                >
                                  {item.label}
                                </Link>
                              ))}

                              {g.key === "sessions" && (
                                <Link
                                  href="/sessions-and-fees"
                                  className="mt-2 block rounded-xl px-4 py-3 text-dark-teal bg-teal/10 hover:bg-teal/15 transition-colors font-semibold outline-none focus-visible:ring-2 focus-visible:ring-teal/35"
                                  onClick={closeAll}
                                >
                                  View Sessions & Fees
                                </Link>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>

                <div className="mt-5">
                  <Button className="w-full bg-coral hover:bg-coral-dark text-cream rounded-full shadow-[0_14px_30px_rgba(0,0,0,0.14)]" asChild>
                    <Link href="/contact#book-visit" onClick={closeAll} className="inline-flex items-center justify-center gap-2">
                      <CalendarDays className="h-4 w-4" />
                      Book a Visit
                    </Link>
                  </Button>

                  <p className="mt-3 text-xs text-sage text-center">
                    Have a question? Visit the Contact page for enquiries and visits.
                  </p>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Keyframes (kept local so you can paste immediately). You can move to globals later. */}
      <style jsx global>{`
        @keyframes navGradient {
          0% { transform: translateX(-30%); }
          100% { transform: translateX(30%); }
        }
      `}</style>
    </header>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="relative text-dark-teal hover:text-teal transition-colors font-medium outline-none focus-visible:ring-2 focus-visible:ring-teal/40 rounded-xl px-2 py-1"
    >
      {children}
      <span className="pointer-events-none absolute left-2 right-2 -bottom-1 h-[2px] rounded-full bg-gradient-to-r from-teal to-coral scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
    </Link>
  )
}
