import Link from 'next/link'
import { Instagram, Twitter, Facebook } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-secondary py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground mb-4 md:mb-0">&copy; {new Date().getFullYear()} Rabbi Moshe. All rights reserved.</p>
          <nav className="mb-4 md:mb-0">
            <ul className="flex space-x-4">
              <li><Link href="/privacy" className="text-primary hover:text-primary/80">Privacy</Link></li>
              <li><Link href="/terms" className="text-primary hover:text-primary/80">Terms</Link></li>
              <li><Link href="/contact" className="text-primary hover:text-primary/80">Contact</Link></li>
            </ul>
          </nav>
          <div className="flex space-x-4">
            <Link href="#" className="text-primary hover:text-primary/80">
              <Instagram className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-primary hover:text-primary/80">
              <Twitter className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-primary hover:text-primary/80">
              <Facebook className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

