
import { Activity, Component, Home, Mail, Package, ScrollText, SunMoon } from 'lucide-react';
import { Dock, DockIcon, DockItem, DockLabel } from '@/components/ui/dock';
import { Link } from 'react-router-dom';

const data = [
  {
    title: 'Home',
    icon: <Home className='h-full w-full text-white' />,
    href: '#',
  },
  {
    title: 'Products',
    icon: <Package className='h-full w-full text-white' />,
    href: '#',
  },
  {
    title: 'Components',
    icon: <Component className='h-full w-full text-white' />,
    href: '#',
  },
  {
    title: 'Activity',
    icon: <Activity className='h-full w-full text-white' />,
    href: '#',
  },
  {
    title: 'Change Log',
    icon: <ScrollText className='h-full w-full text-white' />,
    href: '#',
  },
  {
    title: 'Email',
    icon: <Mail className='h-full w-full text-white' />,
    href: '#',
  },
  {
    title: 'Theme',
    icon: <SunMoon className='h-full w-full text-white' />,
    href: '#',
  }
];

export function DockNavigation() {
  return (
    <div className='absolute bottom-2 left-1/2 max-w-full -translate-x-1/2'>
      <Dock className='items-end pb-3'>
        {data.map((item, idx) => (
          <DockItem
            key={idx}
            className='aspect-square rounded-full bg-[#364f6b] shadow-lg hover:bg-[#364f6b]/80 transition-colors'
          >
            <DockLabel className="bg-[#364f6b] text-white">{item.title}</DockLabel>
            <DockIcon>{item.icon}</DockIcon>
          </DockItem>
        ))}
      </Dock>
    </div>
  );
}
