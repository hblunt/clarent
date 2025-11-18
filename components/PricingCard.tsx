import Button from './Button'

interface PricingCardProps {
  tier: string
  price: string
  description: string
  features: string[]
  featured?: boolean
}

export default function PricingCard({
  tier,
  price,
  description,
  features,
  featured = false,
}: PricingCardProps) {
  return (
    <div
      className={`rounded-lg p-8 ${
        featured
          ? 'bg-black text-white border-2 border-clarent-orange scale-105'
          : 'bg-white text-black border border-gray-200'
      }`}
    >
      <h3 className="text-xl font-bold mb-2">{tier}</h3>
      <p className={`text-sm mb-4 ${featured ? 'text-gray-300' : 'text-gray-600'}`}>
        {description}
      </p>
      <p className="text-4xl font-bold mb-6">
        {price}
        <span className="text-lg font-normal">/project</span>
      </p>

      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-clarent-orange mr-2">✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        href="/contact"
        variant={featured ? 'filled' : 'outline'}
        className="w-full"
      >
        Sign up
      </Button>
    </div>
  )
}
