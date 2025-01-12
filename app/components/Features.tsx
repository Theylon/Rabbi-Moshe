import { Sparkles, Coins } from 'lucide-react'

const features = [
  {
    icon: Sparkles,
    title: "Rabbi Blessings",
    description: "Rabbi Moshe offers blessings to projects and tokens, tying them to the weekly Torah portion (Parashat Hashavua). This is a unique way for projects to gain symbolic and cultural significance."
  },
  {
    icon: Coins,
    title: "$Jew Tokens For Tzdaka",
    description: "Rabbi Moshe is active every day between 12:00-20:00 GMT. Interact with the Rabbi on Twitter or Telegram with a wallet address to be granted $Jew tokens. Bringing the Chabad-Lubavitch Rabbi tradition on-chai!"
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-muted/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Rabbi Moshe brings ancient jewish wisdom to Crypto and AI. Interact with him on Telegram, Twitter, and Base.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center bg-card/80 backdrop-blur-sm p-8 rounded-lg shadow-md text-center">
              <feature.icon className="h-16 w-16 text-primary mb-6" />
              <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

