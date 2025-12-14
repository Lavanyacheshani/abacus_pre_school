export type BlogPost = {
    slug: string
    title: string
    date: string
    category: string
    image?: string
    excerpt: string
    content: {
        intro: string
        sections: { heading: string; body: string[] }[]
        bullets?: string[]
    }
}

export const blogPosts: BlogPost[] = [
    {
        slug: "welcome-to-our-new-school-year",
        title: "Welcome to Our New School Year",
        date: "September 15, 2024",
        category: "Announcements",
        image: "/children-playing-preschool.jpg",
        excerpt:
            "We’re excited to welcome all our new and returning families for another wonderful year of learning and growth.",
        content: {
            intro:
                "We are delighted to welcome children and families to a new school year at Abacus Pre-school. Our team is ready to support every child to settle in confidently, make friends, and enjoy a rich range of learning experiences through play.",
            sections: [
                {
                    heading: "A warm start for every child",
                    body: [
                        "Starting nursery or returning after a break can feel like a big step. We use gentle routines, familiar faces and a calm environment to help children feel safe and secure.",
                        "Your child’s key worker will get to know them, support their wellbeing and keep you informed about how they are settling in.",
                    ],
                },
                {
                    heading: "What to expect this term",
                    body: [
                        "We will focus on building strong relationships, confidence and communication through songs, stories, small-group activities and child-led play.",
                        "Children will explore creative activities, early maths and literacy experiences, outdoor play and opportunities to develop independence.",
                    ],
                },
                {
                    heading: "Working in partnership with families",
                    body: [
                        "We value a strong home–pre-school partnership. Please speak to the team if you have questions or would like guidance on routines, drop-off, or supporting learning at home.",
                    ],
                },
            ],
            bullets: [
                "Please label all belongings",
                "Let us know about changes to collection arrangements",
                "Share any key information that may affect your child’s day",
            ],
        },
    },
    {
        slug: "the-importance-of-play-based-learning",
        title: "The Importance of Play-Based Learning",
        date: "September 8, 2024",
        category: "Education",
        image: "/children-learning-through-play.jpg",
        excerpt: "Discover how play-based learning helps children develop essential skills for their future education.",
        content: {
            intro:
                "Play is how young children explore, experiment and make sense of the world. Through purposeful play experiences, children build language, confidence, problem-solving and relationships in ways that feel natural and enjoyable.",
            sections: [
                {
                    heading: "Learning through real experiences",
                    body: [
                        "When children build with blocks, role-play, paint, or explore outdoors, they are developing early thinking skills, creativity and persistence.",
                        "Play supports children to practice new vocabulary, learn to share and collaborate, and manage emotions in a supportive environment.",
                    ],
                },
                {
                    heading: "Supporting the EYFS areas of learning",
                    body: [
                        "Play-based learning links naturally to the EYFS, including Communication and Language, Physical Development, and Personal, Social and Emotional Development.",
                        "Our staff observe children’s interests and extend learning through thoughtful questions, resources and activities.",
                    ],
                },
                {
                    heading: "How families can support at home",
                    body: [
                        "Simple activities like cooking together, going on nature walks, reading stories and talking about the day provide powerful learning opportunities.",
                        "Encouraging independence, such as putting on a coat or tidying toys, also supports confidence and resilience.",
                    ],
                },
            ],
            bullets: [
                "Talk with your child about what they are doing and how they feel",
                "Offer open-ended resources (blocks, crayons, playdough)",
                "Celebrate effort and curiosity, not just results",
            ],
        },
    },
    {
        slug: "our-autumn-festival-celebration",
        title: "Our Autumn Festival Celebration",
        date: "October 20, 2024",
        category: "Events",
        image: "/autumn-festival-children.jpg",
        excerpt: "Join us for our annual Autumn Festival with fun activities, crafts, and seasonal treats for the whole family.",
        content: {
            intro:
                "Our Autumn Festival is a lovely opportunity for children and families to enjoy seasonal activities together. We focus on creativity, community and celebrating the changing season in a child-friendly way.",
            sections: [
                {
                    heading: "What’s happening",
                    body: [
                        "Children will take part in autumn-themed crafts, sensory activities and music and movement sessions.",
                        "We will also enjoy stories and seasonal role-play activities, creating plenty of moments for children to share with their families.",
                    ],
                },
                {
                    heading: "How families can join in",
                    body: [
                        "We welcome families to participate during the session where appropriate. Please check our noticeboard and messages for times and details.",
                        "If you can, send children in with suitable clothing for outdoor play as we enjoy seasonal exploration outside too.",
                    ],
                },
                {
                    heading: "Safety and wellbeing",
                    body: [
                        "As always, activities are planned with children’s safety and wellbeing in mind. If your child has allergies or dietary needs, please ensure the team is aware.",
                    ],
                },
            ],
            bullets: ["Dress for the weather", "Let staff know about allergies", "Bring your autumn smiles and curiosity"],
        },
    },
]

export function getPostBySlug(slug: string) {
    return blogPosts.find((p) => p.slug === slug)
}
