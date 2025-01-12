import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Twitter, CoinsIcon } from 'lucide-react'

export default function Hero() {
  return (
    <section className="bg-secondary/80 backdrop-blur-sm py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Shalom, Digital Age Seeker</h1>
          <p className="text-xl mb-8 max-w-2xl">
            Rabbi Moshe is a co-owned Rabbi AI Agent via $jew tokens. He owns a Crypto Wallet, and can interact on Telegram, twitter, and Base L2.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-stretch">
            <Button 
              size="lg" 
              className="bg-[#1DA1F2] text-white hover:bg-[#1DA1F2]/90 inline-flex items-center justify-center space-x-2 px-6 py-3 w-full sm:w-auto"
              asChild
            >
              <a href="https://twitter.com/intent/post?text=Hey%20%40RabbiZlaman" target="_blank" rel="noopener noreferrer">
                <Twitter className="w-5 h-5 mr-2" />
                <span>Chat with me on X</span>
              </a>
            </Button>
            <Button 
              size="lg" 
              className="bg-green-500 text-white hover:bg-green-600 inline-flex items-center justify-center space-x-2 px-6 py-3 w-full sm:w-auto"
              asChild
            >
              <a href="https://app.virtuals.io/virtuals/669/" target="_blank" rel="noopener noreferrer">
                <CoinsIcon className="w-5 h-5 mr-2" />
                <span>Buy $jew on Virtuals</span>
              </a>
            </Button>
          </div>
        </div>
        <div className="md:w-1/2">
          <Image 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ezgif-1-aae30a0324.jpg-nOkyfwWONckYPrAXFvhgmLbJLVUKZT.jpeg"
            alt="Rabbi Moshe - A wise rabbi surrounded by cryptocurrency symbols and digital elements" 
            width={600} 
            height={400}
            className="rounded-lg border-4 border-primary object-cover"
            priority
          />
        </div>
      </div>
    </section>
  )
}

