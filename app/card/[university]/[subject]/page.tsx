import { notFound } from "next/navigation"

export default function CardPage({ params }: { params: { university: string; subject: string } }) {
  const { university, subject } = params

  // In a real application, you would fetch the card data based on the university and subject
  // For this example, we'll just display the parameters

  if (!university || !subject) {
    notFound()
  }

  // Convert kebab-case back to readable format
  const readableUniversity = university
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
  const readableSubject = subject
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Card Details</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">
          {readableUniversity} - {readableSubject}
        </h2>
        <p>This is the detailed view of the card.</p>
      </div>
    </div>
  )
}

