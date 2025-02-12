
import { Activity, Component, Home, Mail, Package, ScrollText, SunMoon } from 'lucide-react';
import { Dock, DockIcon, DockItem, DockLabel } from '@/components/ui/dock';
import { Link } from 'react-router-dom';

const data = [
  {
    title: 'Home',
    icon: <Home className='h-full w-full text-neutral-600' />,
    href: '#',
  },
  {
    title: 'Products',
    icon: <Package className='h-full w-full text-neutral-600' />,
    href: '#',
  },
  {
    title: 'Components',
    icon: <Component className='h-full w-full text-neutral-600' />,
    href: '#',
  },
  {
    title: 'Activity',
    icon: <Activity className='h-full w-full text-neutral-600' />,
    href: '#',
  },
  {
    title: 'Change Log',
    icon: <ScrollText className='h-full w-full text-neutral-600' />,
    href: '#',
  },
  {
    title: 'Email',
    icon: <Mail className='h-full w-full text-neutral-600' />,
    href: '#',
  },
  {
    title: 'Theme',
    icon: <SunMoon className='h-full w-full text-neutral-600' />,
    href: '#',
  }
];

export function DockNavigation() {
  return (
    <div className='absolute top-2 left-1/2 max-w-full -translate-x-1/2'>
      <div className="bg-white px-6 py-3 rounded-full">
        <Dock className='items-start'>
          {data.map((item, idx) => (
            <DockItem
              key={idx}
              className='aspect-square rounded-full bg-[#E0FCFF] shadow-lg hover:bg-[#E0FCFF]/80 transition-colors'
            >
              <DockLabel className="bg-[#E0FCFF] text-neutral-600">{item.title}</DockLabel>
              <DockIcon>{item.icon}</DockIcon>
            </DockItem>
          ))}
        </Dock>
      </div>
    </div>
  );
}
