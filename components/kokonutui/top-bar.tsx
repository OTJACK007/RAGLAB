import type React from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function TopBar() {
  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    window.location.href = "mailto:support@humanface.xyz"
  }

  return (
    <div className="absolute top-0 left-0 right-0 z-50 px-4 py-4 md:px-6">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="https://rfpjrfuuupsnlehsmhfo.supabase.co/storage/v1/object/public/myfile//RagLabLogo.png"
            alt="RAGLAB"
            width={32}
            height={32}
          />
          <span className="text-white font-semibold text-lg">RAGLAB</span>
        </div>
        <Button variant="outline" className="bg-white/10 text-white hover:bg-white/20 border-white/20" asChild>
          <a href="mailto:support@humanface.xyz" onClick={handleContactClick}>
            Contact Us
          </a>
        </Button>
      </div>
    </div>
  )
}

