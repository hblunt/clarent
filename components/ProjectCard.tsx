import Link from 'next/link'

interface ProjectCardProps {
  name: string
  description: string
  image?: string
  link: string
}

export default function ProjectCard({
  name,
  description,
  image,
  link,
}: ProjectCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200">
      <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-48 flex items-center justify-center">
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover" />
        ) : (
          <div className="text-gray-400 text-6xl font-bold">
            {name.charAt(0)}
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link
          href={link}
          className="text-clarent-orange hover:text-orange-600 font-medium inline-flex items-center gap-2"
        >
          Call to action →
        </Link>
      </div>
    </div>
  )
}
