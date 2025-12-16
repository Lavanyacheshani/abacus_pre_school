import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/layout/footer"
import { StaffGrid } from "./staff-grid"

export const metadata = {
    title: "Our Staff | Abacus Pre-school",
    description: "Meet our dedicated team of educators and support staff.",
}

const staff = [
    {
        name: "Elsie",
        role: "Manager, Paediatric First Aider, Safeguarding Officer/CPO",
        image: "/staff/1.png",
        bio: "Elsie started working at Abacus in 2007 as a Key Worker and took over the manager’s position in 2016. She has over 30 years’ teaching experience in the UK and Sri Lanka. She holds a Bachelor’s in Early Childhood Studies and is working towards a Master’s in Teaching and Learning. Elsie is also fluent in Tamil and Sinhala.",
        languages: ["Tamil", "Sinhala"],
    },
    {
        name: "Tracey",
        role: "Deputy Manager, Paediatric First Aider, SENCO",
        image: "/staff/2.png",
        bio: "Tracey joined Abacus in February 2018 and became Deputy Manager in September 2018. She holds an OFSTED-recognised Level 3 early years qualification and has over 15 years’ experience working with children.",
    },
    {
        name: "Jessie",
        role: "Administrator",
        image: "/staff/3.png",
        bio: "Jessie joined Abacus in May 2024.",
    },
    {
        name: "Sumi",
        role: "Key Worker, Paediatric First Aider",
        image: "/staff/4.png",
        bio: "We welcomed Sumi into our team in February 2017. She has previously worked in a day nursery and has achieved a Level 3 in Childcare.",
        languages: ["Nepalese", "Hindi"],
    },
    {
        name: "Iresha",
        role: "Key Worker",
        image: "/staff/5.png",
        bio: "Iresha joined our team after completing her work placement with us in September 2021. She has completed her Level 3 in Childcare.",
    },
    {
        name: "Tuba",
        role: "Key Worker",
        image: "/staff/6.png",
        bio: "Tuba joined our team in September 2022 after completing her work placement with us. She has completed her Level 3 in Childcare.",
    },
    {
        name: "Caroline",
        role: "Key Worker, Paediatric First Aider",
        image: "/staff/7.png",
        bio: "Caroline is our most senior member of staff, having worked at Abacus for over 20 years. She holds a Level 3 in Childcare.",
    },
    {
        name: "Jayun",
        role: "Team Member",
        image: "/staff/8.png",
        bio: "Jayun joined Abacus in May 2024. In addition to English, Jayun also speaks Korean.",
        languages: ["Korean"],
    },
    {
        name: "Najoua",
        role: "Key Worker, Paediatric First Aider",
        image: "/staff/9.png",
        bio: "Najoua officially joined the team in September 2019. In addition to English, Najoua speaks Arabic and French.",
        languages: ["Arabic", "French"],
    },
]

export default function OurStaffPage() {
    return (
        <div className="min-h-screen bg-cream">
            <Navigation />

            {/* HERO */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute -top-28 left-1/2 h-[360px] w-[860px] -translate-x-1/2 rounded-full bg-gradient-to-r from-teal/16 via-coral/10 to-sage/16 blur-3xl" />
                    <div className="absolute -bottom-28 right-[-120px] h-[360px] w-[360px] rounded-full bg-gradient-to-br from-coral/12 to-transparent blur-3xl" />
                    <div className="absolute inset-0 opacity-[0.05] [background-image:radial-gradient(rgba(42,123,123,0.9)_1px,transparent_1px)] [background-size:28px_28px]" />
                </div>

                <div className="container mx-auto px-4 relative py-14 md:py-20">
                    <div className="max-w-5xl mx-auto">
                        <div className="inline-flex items-center gap-2 rounded-full bg-white/65 backdrop-blur-md border border-white/70 px-4 py-2 shadow-sm">
                            <span className="h-2 w-2 rounded-full bg-coral" />
                            <span className="text-sm font-medium text-dark-teal">Meet the team</span>
                        </div>

                        <h1 className="mt-5 text-4xl md:text-6xl font-bold text-dark-teal tracking-tight">
                            Our{" "}
                            <span className="bg-gradient-to-r from-teal via-sage to-coral bg-clip-text text-transparent">
                                Staff
                            </span>
                        </h1>

                        <p className="mt-4 text-lg md:text-xl text-sage max-w-3xl leading-relaxed">
                            Our dedicated team creates a calm, caring environment where children feel safe,
                            supported, and excited to learn.
                        </p>
                    </div>
                </div>
            </section>

            <StaffGrid staff={staff} />

            <Footer />
        </div>
    )
}
