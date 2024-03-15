import {
  HomeIcon,
  ShoppingBagIcon
} from '@heroicons/react/24/outline';

import { inter } from '@/app/ui/fonts'

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/', icon : HomeIcon},
  { name: 'Shop', href: '/shop', icon : ShoppingBagIcon}
];

export default function NavLinks() {
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <a
            key={link.name}
            href={link.href}
            className={`${inter}flex grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium text-white hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3`}
          >
            <LinkIcon className="w-6" />
            <p className="block">{link.name}</p>
          </a>
        );
      })}
    </>
  );
}
