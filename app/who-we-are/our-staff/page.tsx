import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/layout/footer"

export const metadata = {
  title: "Our Staff | Abacus Pre-school",
  description: "Meet our dedicated team of educators and support staff",
}

export default function OurStaffPage() {
    const staff = [
        {
            name: "Jane Smith",
            role: "Head Teacher",
            experience: "15 years",
            description: "Passionate educator with extensive experience in early childhood development."
        },
        {
            name: "Sarah Johnson",
            role: "Class Teacher",
            experience: "10 years",
            description: "Specializes in creative learning and child-centered approaches."
        },
        {
            name: "Michael Brown",
            role: "Teaching Assistant",
            experience: "8 years",
            description: "Dedicated support staff focused on individual child development."
        }
    ];

    return (
        <div className="min-h-screen">
            <Navigation />
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100">
                <div className="container mx-auto px-4 py-16">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Staff</h1>
                <p className="text-xl text-gray-600 mb-12">
                    Meet our dedicated team of educators and support staff
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {staff.map((member, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                            <p className="text-lg font-semibold text-indigo-600 mb-2">{member.role}</p>
                            <p className="text-gray-600 mb-4">Experience: {member.experience}</p>
                            <p className="text-gray-700">{member.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            </div>
            <Footer />
        </div>
    );
}
