
import { Home, FileText } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"

export function TubelightNavbar() {
  const navItems = [
    { name: 'Recursos', url: '/recursos', icon: Home },
    { name: 'IA Lab', url: '/ia-lab', icon: FileText },
    { name: 'Notion', url: 'https://notion.com', icon: FileText },
    { name: 'Web', url: '/web', icon: FileText }
  ]

  return <NavBar items={navItems} />
}
