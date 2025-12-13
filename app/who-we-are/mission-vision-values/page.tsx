import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/layout/footer"

export const metadata = {
  title: "Mission, Vision & Values | Abacus Pre-school",
  description: "Our mission, purpose, vision and core values",
}

export default function MissionVisionValuesPage() {
    return (
        <div className="min-h-screen">
            <Navigation />
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100">
                <div className="container mx-auto px-4 py-16">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
                    Our Mission, Purpose, Vision & Values
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <h2 className="text-3xl font-bold text-indigo-600 mb-4">Mission</h2>
                        <p className="text-gray-700 text-lg">
                            To provide a nurturing, safe, and stimulating environment where every child can develop
                            their full potential through play-based learning and meaningful interactions with caring educators.
                        </p>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <h2 className="text-3xl font-bold text-indigo-600 mb-4">Purpose</h2>
                        <p className="text-gray-700 text-lg">
                            Our purpose is to support the holistic development of young children, fostering their
                            intellectual, emotional, social, and physical growth through innovative and inclusive education.
                        </p>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <h2 className="text-3xl font-bold text-indigo-600 mb-4">Vision</h2>
                        <p className="text-gray-700 text-lg">
                            To be recognized as a leading pre-school where children thrive, families feel supported,
                            and educators are empowered to make a positive impact on early childhood development.
                        </p>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <h2 className="text-3xl font-bold text-indigo-600 mb-4">Values</h2>
                        <ul className="text-gray-700 text-lg space-y-2">
                            <li>✓ <strong>Child-Centered:</strong> Every decision prioritizes the child's wellbeing</li>
                            <li>✓ <strong>Inclusivity:</strong> Welcoming and respecting all families</li>
                            <li>✓ <strong>Excellence:</strong> Continuous improvement in our practice</li>
                            <li>✓ <strong>Collaboration:</strong> Partnership with parents and community</li>
                            <li>✓ <strong>Creativity:</strong> Encouraging imagination and exploration</li>
                        </ul>
                    </div>
                </div>
            </div>
            </div>
            <Footer />
        </div>
    );
}
