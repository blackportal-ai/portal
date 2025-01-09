import { Link } from '@/components/ui/Link';
import BlackPortalLogo from '@/components/icons/BlackPortalLogo';
import ModeToggle from './ModeToggle';
import MobileNav from './MobileNav';

import { mainMenu } from '@/data/main-menu';
import { socialLinks } from '@/data/social-links';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-card/80 shadow backdrop-blur">
      <nav className="flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <MobileNav />

          <Link className="text-xl font-bold" href="/">
            <BlackPortalLogo className="h-6 w-auto" />
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <ul className="hidden font-semibold md:block">
            {mainMenu.map((menuItem, idx) => (
              <li key={`main-menu-item-${idx}`}>
                <Link className="hover:text-primary" href={menuItem.href}>
                  {menuItem.title}
                </Link>
              </li>
            ))}
          </ul>

          <ModeToggle />

          <ul className="hidden items-center gap-4 md:flex">
            {socialLinks.map(({ icon: Icon, href }, idx) => (
              <li key={`social-link-${idx}`}>
                <Link className="hover:text-primary" href={href}>
                  <Icon className="h-4 w-4" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
