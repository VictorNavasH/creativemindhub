
import { Activity, Component, Home, Mail, Package, ScrollText, SunMoon } from 'lucide-react';
import { Dock, DockIcon, DockItem, DockLabel } from '@/components/ui/dock';
import { Link } from 'react-router-dom';

const data = [
  {
    title: 'Recursos',
    icon: <Home className='h-full w-full text-neutral-600 dark:text-neutral-300' />,
    href: '/recursos',
  },
  {
    title: 'Herramientas',
    icon: <Package className='h-full w-full text-neutral-600 dark:text-neutral-300' />,
    href: '/herramientas',
  },
  {
    title: 'IA Lab',
    icon: <Component className='h-full w-full text-neutral-600 dark:text-neutral-300' />,
    href: '/ia-lab',
  },
  {
    title: 'Notion',
    icon: <ScrollText className='h-full w-full text-neutral-600 dark:text-neutral-300' />,
    href: 'https://notion.com',
  },
  {
    title: 'Mail',
    icon: <Mail className='h-full w-full text-neutral-600 dark:text-neutral-300' />,
    href: '/mail',
  }
];

export function DockNavigation() {
  return (
    <div className='fixed top-4 left-1/2 max-w-full -translate-x-1/2 z-50'>
      <Dock className='items-end pb-3 [&>div]:bg-transparent'>
        {data.map((item, idx) => (
          <Link key={idx} to={item.href}>
            <DockItem
              className='aspect-square rounded-full bg-[#364f6b]/80 mx-2'
            >
              <DockLabel>{item.title}</DockLabel>
              <DockIcon>{item.icon}</DockIcon>
            </DockItem>
          </Link>
        ))}
      </Dock>
    </div>
  );
}
