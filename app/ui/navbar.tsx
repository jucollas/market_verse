import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import AcmeLogo from '@/app/ui/acme-logo';
import { PowerIcon } from '@heroicons/react/24/outline';

export default function TopNav() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center px-3 py-4 bg-blue-600">
        <div>
          <Link href="/">
            <div className="flex items-center text-white cursor-pointer">
              <div className="w-32 md:w-40">
                <AcmeLogo />
              </div>
            </div>
          </Link>
        </div>
        <div className="flex justify-between px-3 py-2 bg-gray-50">
            <NavLinks />
        </div>
        <button className="flex items-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600">
          <PowerIcon className="w-6" />
          <span className="hidden md:block">Sign Out</span>
        </button>
      </div>
    </div>
  );
}
