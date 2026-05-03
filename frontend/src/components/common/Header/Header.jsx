import { useState } from "react";
import Logo from "./Logo";
import NavMenu from "./NavMenu";
import AuthButtons from "./AuthButtons";
import MobileMenu from "./MobileMenu";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-200 shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-3 md:px-4 lg:px-6 xl:px-16">
        <div className="flex justify-between items-center h-12 md:h-14 lg:h-16">
          
          <Logo />

          <NavMenu />

          <AuthButtons />

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-gray-700 cursor-pointer transition p-2 -mr-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </header>
  );
}

export default Header;