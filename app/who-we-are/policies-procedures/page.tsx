import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/layout/footer"

export const metadata = {
  title: "Policies & Procedures | Abacus Pre-school",
  description: "We maintain comprehensive policies to ensure the highest standards of care and safety",
}

export default function PoliciesProceduresPage() {
  const policies = [
    { title: "Admissions Policy", description: "Guidelines for enrolling your child at our nursery" },
    { title: "Health & Safety Policy", description: "Comprehensive measures to protect all children and staff" },
    { title: "Safeguarding Policy", description: "Child protection protocols and procedures" },
    { title: "Parent Communication Policy", description: "How we keep parents informed about their children" },
    { title: "Behavior Management Policy", description: "Approach to supporting positive behavior" },
    { title: "Fee & Payment Policy", description: "Fees, payment terms, and billing procedures" },
    { title: "Complaints Procedure", description: "Process for raising and resolving concerns" },
    { title: "Data Protection Policy", description: "How we handle and protect personal information" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Policies & Procedures</h1>
        <p className="text-xl text-gray-600 mb-12">
          We maintain comprehensive policies to ensure the highest standards of care and safety
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {policies.map((policy, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-indigo-600 mb-2">{policy.title}</h3>
              <p className="text-gray-700">{policy.description}</p>
              <button className="mt-4 text-indigo-600 font-semibold hover:text-indigo-800 transition">
                View Policy →
              </button>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Policy Access</h3>
          <p className="text-gray-700 mb-4">
            All policies are available for review by parents and guardians. A full copy of our 
            policy documentation can be provided upon request. We encourage parents to familiarize 
            themselves with our policies to ensure a shared understanding of our approach.
          </p>
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">
            Request Full Policy Documentation
          </button>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
}
