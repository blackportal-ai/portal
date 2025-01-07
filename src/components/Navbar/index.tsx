import { Link } from '@/components/ui/Link';
// import DeltaLogo from '@/components/icons/DeltaLogo';

import { socialLinks } from '@/data/social-links';
import ModeToggle from './ModeToggle';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-card/80 shadow backdrop-blur">
      <nav className="flex h-16 items-center justify-between px-4">
        <Link className="text-xl font-bold" href="/">
          Black Portal
          {/* <DeltaLogo className="h-5 w-auto" /> */}
        </Link>

        <div className="flex items-center gap-4">
          <ul className="font-semibold">
            <li>
              <Link
                className="hover:text-primary"
                href="https://docs.rs/deltaml/latest/deltaml/"
              >
                Docs
              </Link>
            </li>
          </ul>

          <ModeToggle />

          <ul className="flex items-center gap-4">
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
