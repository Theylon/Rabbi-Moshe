import Link from "next/link"
import { Twitter, CoinsIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

const StarOfDavidLogo = () => (
  <svg width="32" height="32" viewBox="0 0 466 466" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M372.158,233.012l63.008-109.114c1.43-2.475,1.43-5.525,0-8c-1.429-2.476-4.07-4-6.928-4H302.204L239.883,3.999
C238.455,1.524,235.814,0,232.957,0c0,0,0,0-0.001,0c-2.857,0-5.497,1.524-6.927,3.998l-62.35,107.9H37.762
c-2.858,0-5.5,1.525-6.928,4c-1.429,2.475-1.429,5.525,0,8l62.999,109.098L30.834,342.102c-1.429,2.476-1.429,5.525,0,8
c1.429,2.475,4.07,4,6.928,4h126.005L226.072,462c1.429,2.475,4.07,4,6.928,4s5.499-1.524,6.928-4l62.306-107.898h126.005
c2.858,0,5.5-1.525,6.929-4c1.429-2.476,1.428-5.525-0.001-8L372.158,233.012z"
      fill="currentColor"
    />
  </svg>
)

export default function Header() {
  return (
    <header className="bg-secondary/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <StarOfDavidLogo />
          <span className="text-xl font-bold font-serif">Rabbi Moshe</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-4">
          <Link href="#features" className="text-primary hover:text-primary/80">
            Features
          </Link>
          <Link href="#cta" className="text-primary hover:text-primary/80">
            Get Started
          </Link>
          <Button
            size="sm"
            className="bg-[#1DA1F2] text-white hover:bg-[#1DA1F2]/90 inline-flex items-center justify-center space-x-2 px-3 py-1"
            asChild
          >
            <a
              href="https://twitter.com/intent/post?text=Hey%20%40RabbiZlaman"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="w-4 h-4 mr-1" />
              <span>Chat on X</span>
            </a>
          </Button>
          <Button
            size="sm"
            className="bg-green-500 text-white hover:bg-green-600 inline-flex items-center justify-center space-x-2 px-3 py-1"
            asChild
          >
            <a href="https://app.virtuals.io/virtuals/669/" target="_blank" rel="noopener noreferrer">
              <CoinsIcon className="w-4 h-4 mr-1" />
              <span>Buy $jew</span>
            </a>
          </Button>
        </nav>
      </div>
    </header>
  )
}

