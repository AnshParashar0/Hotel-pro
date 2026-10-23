import { Link } from 'react-router-dom';
import { Hotel } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-stone bg-ivory/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 text-forest transition-colors hover:text-forest-light">
          <Hotel className="h-6 w-6" />
          <span className="font-display text-xl font-semibold tracking-tight">HotelPro</span>
        </Link>

        <div className="flex items-center gap-6">
          <Link
            to="/rooms"
            className="text-sm font-medium text-charcoal/70 transition-colors hover:text-forest"
          >
            Rooms
          </Link>
          <Link
            to="/login"
            className="rounded-md bg-forest px-4 py-2 text-sm font-medium text-ivory transition-colors hover:bg-forest-light"
          >
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
