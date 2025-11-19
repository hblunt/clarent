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
    <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200">
      <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 h-48 flex items-center justify-center">
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover" />
        ) : (
          <div className="text-zinc-600 text-6xl font-bold">
            {name.charAt(0)}
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white">{name}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
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
