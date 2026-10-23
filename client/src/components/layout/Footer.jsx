import { Hotel } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-stone bg-ivory">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-2 text-forest">
            <Hotel className="h-5 w-5" />
            <span className="font-display text-lg font-semibold">HotelPro</span>
          </div>
          <p className="text-sm text-charcoal/50">
            &copy; {new Date().getFullYear()} HotelPro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
