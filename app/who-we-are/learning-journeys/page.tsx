import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/layout/footer"

export const metadata = {
  title: "Learning Journeys | Abacus Pre-school",
  description: "Tailored developmental pathways for each age group",
}

export default function LearningJourneysPage() {
  const journeys = [
    {
      ageGroup: "Baby Room (0-12 months)",
      focus: "Sensory Exploration & Bonding",
      description: "Focused on building secure attachments and exploring the world through sensory play."
    },
    {
      ageGroup: "Toddler Room (1-2 years)",
      focus: "Independence & Language Development",
      description: "Supporting early communication, motor skills, and growing independence."
    },
    {
      ageGroup: "Pre-School (2-3 years)",
      focus: "Social Skills & Learning Through Play",
      description: "Building confidence, social interactions, and foundational academic concepts through play."
    },
    {
      ageGroup: "Junior Pre-School (3-4 years)",
      focus: "Creativity & School Readiness",
      description: "Developing problem-solving skills, creativity, and preparing for transition to school."
    },
    {
      ageGroup: "Senior Pre-School (4-5 years)",
      focus: "Academic Foundation & Transition",
      description: "Strengthening academic skills and smoothly transitioning children into primary school."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Learning Journeys</h1>
        <p className="text-xl text-gray-600 mb-12">
          Tailored developmental pathways for each age group
        </p>

        <div className="space-y-6">
          {journeys.map((journey, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-indigo-600 mb-2">{journey.ageGroup}</h3>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">{journey.focus}</h4>
              <p className="text-gray-700 text-lg">{journey.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Approach</h3>
          <p className="text-gray-700 text-lg mb-4">
            Each learning journey is personalized based on the child's individual needs, interests, 
            and pace of development. We use observation, assessment, and continuous feedback to 
            ensure every child receives the support they need to flourish.
          </p>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
}
