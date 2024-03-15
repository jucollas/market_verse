import { FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';

const links = [
    { href: 'https://twitter.com/juansegarizaoP2', icon : FaTwitter},
    { href: 'https://github.com/jucollas/', icon : FaGithub},
    { href: 'https://www.instagram.com/garizaojuan2/', icon : FaInstagram}
    
];

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="text-white">
            <p>&copy; {new Date().getFullYear()} MarketVerse Inc. All rights reserved.</p>
          </div>
          <div className="flex gap-4">
            {links.map((link) => {
                const LinkIcon = link.icon;
                return (
                <Link key={link.href} href={link.href} passHref>
                    <LinkIcon size={24} className="text-gray-300 hover:text-gray-400 cursor-pointer" />
                </Link>
                );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}