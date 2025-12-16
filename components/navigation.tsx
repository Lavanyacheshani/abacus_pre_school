"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useId, useMemo, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, Menu, X, CalendarDays } from "lucide-react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"

type NavItem = { label: string; href: string }
type NavGroup = { key: "who" | "sessions"; label: string; items: NavItem[] }

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
          { label: "Our Staff", href: "/who-we-are/our-staff" },
          { label: "Our Mission, Purpose, Vision & Values", href: "/who-we-are/mission-vision-values" },
          { label: "Learning Journeys", href: "/who-we-are/learning-journeys" },
          { label: "Policies & Procedures", href: "/who-we-are/policies-procedures" },
          { label: "Contact Us", href: "/contact" },
        ],
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

  /* Sticky header */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  /* Lock body scroll on mobile */
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

  /* ESC support */
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeAll()
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

  return (
    <header
      className={[
        "sticky top-0 z-50 border-b",
        scrolled
          ? "bg-cream border-teal/15 shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
          : "bg-cream border-teal/10",
      ].join(" ")}
    >
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between" aria-label="Primary">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-full overflow-hidden shadow-[0_12px_28px_rgba(0,0,0,0.12)]">
              <Image
                src="/4.jpg"
                alt="Abacus Pre-school logo"
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="leading-tight">
              <h1 className="text-xl font-bold text-dark-teal">ABACUS</h1>
              <p className="text-xs text-sage">NEW MALDEN PRESCHOOL</p>
            </div>
          </Link>

          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-7">
            <NavLink href="/">Home</NavLink>

            <Dropdown
              group={groups[0]}
              open={openDesktop}
              setOpen={safeSetOpenDesktop}
              scheduleClose={scheduleCloseDesktop}
              dropdownId={dropdownId}
              motionProps={dropdownMotion}
            />

            <NavLink href="/news">Blogs</NavLink>
            <NavLink href="/events">Events</NavLink>

            <Dropdown
              group={groups[1]}
              open={openDesktop}
              setOpen={safeSetOpenDesktop}
              scheduleClose={scheduleCloseDesktop}
              dropdownId={dropdownId}
              motionProps={dropdownMotion}
              footerLink={{ href: "/sessions-and-fees", label: "View Sessions & Fees" }}
            />

            <Button
              size="sm"
              className="bg-coral hover:bg-coral-dark text-cream rounded-full px-5"
              asChild
            >
              <Link href="/contact#book-visit" className="inline-flex items-center gap-2">
                <CalendarDays className="h-4 w-4" />
                Book a Visit
              </Link>
            </Button>
          </div>

          {/* Mobile button */}
          <button
            className="lg:hidden rounded-xl px-3 py-2 text-dark-teal hover:bg-sage/5"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </nav>
      </div>

      {/* Mobile drawer – FULLY OPAQUE */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.aside
            className="fixed inset-y-0 right-0 z-50 w-[92%] max-w-md bg-white border-l border-sage/10 shadow-[0_20px_70px_rgba(0,0,0,0.18)]"
            initial={{ x: "8%" }}
            animate={{ x: 0 }}
            exit={{ x: "8%" }}
          >
            <div className="flex items-center justify-between px-5 py-5 border-b border-sage/10">
              <span className="font-bold text-dark-teal">Menu</span>
              <button onClick={closeAll} aria-label="Close menu">
                <X className="w-6 h-6 text-dark-teal" />
              </button>
            </div>

            <div className="px-4 py-4 space-y-2">
              <MobileLink href="/" onClick={closeAll}>Home</MobileLink>
              <MobileLink href="/news" onClick={closeAll}>Blogs</MobileLink>
              <MobileLink href="/events" onClick={closeAll}>Events</MobileLink>

              {groups.map((g) => (
                <MobileDropdown
                  key={g.key}
                  group={g}
                  open={openMobile}
                  setOpen={setOpenMobile}
                  onNavigate={closeAll}
                />
              ))}

              <Button asChild className="mt-4 w-full rounded-full bg-coral text-cream">
                <Link href="/contact#book-visit" onClick={closeAll}>
                  Book a Visit
                </Link>
              </Button>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </header>
  )
}

/* ---------- helpers ---------- */

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group relative font-medium text-dark-teal hover:text-teal px-2 py-1"
    >
      {children}
      <span className="absolute left-2 right-2 -bottom-1 h-[2px] bg-gradient-to-r from-teal to-coral scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
    </Link>
  )
}

function Dropdown({
  group,
  open,
  setOpen,
  scheduleClose,
  dropdownId,
  motionProps,
  footerLink,
}: any) {
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(group.key)}
      onMouseLeave={scheduleClose}
    >
      <button
        className="inline-flex items-center gap-1 font-medium text-dark-teal hover:text-teal px-2 py-1"
        aria-haspopup="menu"
        aria-expanded={open === group.key}
        aria-controls={`${dropdownId}-${group.key}`}
      >
        {group.label}
        <ChevronDown className={open === group.key ? "rotate-180 transition" : "transition"} />
      </button>

      <AnimatePresence>
        {open === group.key && (
          <motion.div
            {...motionProps}
            id={`${dropdownId}-${group.key}`}
            role="menu"
            className="absolute top-full left-0 mt-3 w-[320px] rounded-2xl bg-white border border-sage/10 shadow-xl"
          >
            <div className="p-2">
              {group.items.map((item: NavItem) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-xl px-3 py-3 text-sm text-sage hover:text-dark-teal hover:bg-sage/5"
                >
                  {item.label}
                </Link>
              ))}
              {footerLink && (
                <Link
                  href={footerLink.href}
                  className="mt-1 block rounded-xl px-3 py-3 font-semibold text-dark-teal bg-teal/10 hover:bg-teal/15"
                >
                  {footerLink.label}
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function MobileLink({ href, onClick, children }: any) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block rounded-xl px-4 py-3 font-medium text-dark-teal hover:bg-sage/5"
    >
      {children}
    </Link>
  )
}

function MobileDropdown({ group, open, setOpen, onNavigate }: any) {
  return (
    <div className="rounded-xl border border-sage/10">
      <button
        className="w-full flex items-center justify-between px-4 py-3 font-medium text-dark-teal"
        onClick={() => setOpen(open === group.key ? null : group.key)}
      >
        {group.label}
        <ChevronDown className={open === group.key ? "rotate-180 transition" : "transition"} />
      </button>

      <AnimatePresence>
        {open === group.key && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            {group.items.map((item: NavItem) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onNavigate}
                className="block px-6 py-2 text-sm text-sage hover:text-dark-teal"
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
