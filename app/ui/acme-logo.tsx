import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

export default function MarketVerseLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row justify-start leading-none text-white`}
    >
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[44px]">Marketverse</p>
    </div>
  );
}
