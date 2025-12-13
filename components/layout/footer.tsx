export function Footer() {
  return (
    <footer className="bg-dark-teal text-cream py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-cream mb-3">About</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#about" className="hover:text-cream transition-colors">
                    Who We Are
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-cream transition-colors">
                    Our Vision
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-cream transition-colors">
                    Our Approach
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-cream mb-3">Information</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#sessions" className="hover:text-cream transition-colors">
                    Sessions & Fees
                  </a>
                </li>
                <li>
                  <a href="#admissions" className="hover:text-cream transition-colors">
                    Admissions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cream transition-colors">
                    Policies
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-cream mb-3">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-cream transition-colors">
                    Term Dates
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cream transition-colors">
                    News & Events
                  </a>
                </li>
                <li>
                  <a href="#holiday-club" className="hover:text-cream transition-colors">
                    Holiday Club
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-cream mb-3">Contact</h3>
              <p className="text-sm mb-2">1 Cambridge Road, New Malden, Surrey, KT3 3QE</p>
              <p className="text-sm">07934 133 701</p>
            </div>
          </div>
          <div className="border-t border-cream/20 pt-8 text-center text-sm">
            <p>© {new Date().getFullYear()} Abacus Pre-school New Malden. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
