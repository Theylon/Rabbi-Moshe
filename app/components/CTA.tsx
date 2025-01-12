import { Button } from '@/components/ui/button'
import { Twitter, TextIcon as Telegram, CoinsIcon } from 'lucide-react'

export default function CTA() {
  return (
    <section id="cta" className="bg-primary/90 backdrop-blur-sm py-20 text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Want to contribute and help build the Rabbi?</h2>
        <p className="mb-8 max-w-2xl mx-auto">
          Join our Telegram group to become part of our growing community.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button 
            size="lg" 
            className="bg-[#0088cc] text-white hover:bg-[#0088cc]/90 inline-flex items-center justify-center space-x-2 px-6 py-3 w-full sm:w-auto"
            asChild
          >
            <a href="https://t.me/+9Mz34HZirSg5NjFk" target="_blank" rel="noopener noreferrer">
              <Telegram className="w-5 h-5 mr-2" />
              <span>Join The Telegram Community</span>
            </a>
          </Button>
          <Button 
            size="lg" 
            className="bg-[#1DA1F2] text-white hover:bg-[#1DA1F2]/90 inline-flex items-center justify-center space-x-2 px-6 py-3 w-full sm:w-auto"
            asChild
          >
            <a href="https://twitter.com/intent/post?text=Hey%20%40RabbiZlaman" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-5 h-5 mr-2" />
              <span>Chat with me on Twitter</span>
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
    </section>
  )
}

