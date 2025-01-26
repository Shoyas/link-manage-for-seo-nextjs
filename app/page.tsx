import { CardComponent } from "./components/Card"

const cards = [
  {
    university: "Harvard University",
    subject: "Computer Science",
    title: "Introduction to Programming",
    description: "Learn the basics of programming with Python",
  },
  {
    university: "Massachusetts Institute of Technology",
    subject: "Mathematics",
    title: "Linear Algebra",
    description: "Explore vectors, matrices, and linear transformations",
  },
  {
    university: "Stanford University",
    subject: "Physics",
    title: "Quantum Mechanics",
    description: "Dive into the world of quantum physics",
  },
]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold mb-8">Course Cards</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <CardComponent key={index} {...card} />
        ))}
      </div>
    </main>
  )
}

