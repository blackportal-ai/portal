import { HiMenuAlt2 } from 'react-icons/hi';

import { Link } from '@/components/ui/Link';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/Sheet';
import { Button } from '@/components/ui/Button';

import { mainMenu } from '@/data/main-menu';
import { socialLinks } from '@/data/social-links';

export default function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          className="-ml-2 md:hidden [&_svg]:size-6"
          variant="ghost"
          size="icon"
        >
          <HiMenuAlt2 />
        </Button>
      </SheetTrigger>

      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>

        <div className="mt-6 flex flex-col items-center gap-6">
          <ul className="font-bold">
            {mainMenu.map((menuItem, idx) => (
              <li key={`main-menu-item-${idx}`}>
                <Link className="hover:text-primary" href={menuItem.href}>
                  {menuItem.title}
                </Link>
              </li>
            ))}
          </ul>

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
      </SheetContent>
    </Sheet>
  );
}
