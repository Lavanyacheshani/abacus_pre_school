import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/layout/footer"

export const metadata = {
  title: "Contact Us | Abacus Pre-school",
  description: "Get in touch with our team",
}

export default function ContactUsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-indigo-600 mb-4">Get In Touch</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Address</h4>
                  <p className="text-gray-700">
                    Abacus Pre-School<br />
                    123 Learning Lane<br />
                    Education City, EC 12345
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Phone</h4>
                  <p className="text-gray-700">
                    <a href="tel:+441234567890" className="text-indigo-600 hover:text-indigo-800">
                      +44 (0) 1234 567890
                    </a>
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Email</h4>
                  <p className="text-gray-700">
                    <a href="mailto:info@abacuspreschool.co.uk" className="text-indigo-600 hover:text-indigo-800">
                      info@abacuspreschool.co.uk
                    </a>
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Opening Hours</h4>
                  <p className="text-gray-700">
                    Monday - Friday: 7:30 AM - 6:00 PM<br />
                    Saturday & Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-indigo-600 mb-6">Send us a Message</h3>
            
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                  placeholder="+44 (0) 1234 567890"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                  placeholder="Tell us how we can help..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="w-full h-96 bg-gray-200 flex items-center justify-center">
            <p className="text-gray-600 text-lg">Map embed would go here</p>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
}
