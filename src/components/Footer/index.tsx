import { Link } from '@/components/ui/Link';
import BlackPortalLogo from '@/components/icons/BlackPortalLogo';

import { socialLinks } from '@/data/social-links';
import {
  footerCompanyLinks,
  footerDeltaLinks,
  footerNebulaLinks,
} from '@/data/footer-links';
import { cn } from '@/lib/utils';

type Props = {
  isDocs?: boolean;
};

export default function Footer({ isDocs }: Props) {
  return (
    <footer className="bg-background border-t">
      <div className={cn(isDocs ? 'px-4 md:px-8' : 'container')}>
        <div className="grid grid-cols-1 gap-10 py-10 lg:grid-cols-4">
          <div className="order-2 flex flex-col items-center justify-between gap-6 lg:order-1 lg:items-start">
            <div className="flex flex-col items-start gap-4">
              <BlackPortalLogo className="h-7 w-auto" />

              <ul className="text-muted-foreground flex items-center gap-5">
                {socialLinks.map((socialLink, idx) => (
                  <li key={`footer-social-link-${idx}`}>
                    <Link
                      className="hover:text-primary"
                      href={socialLink.href}
                      aria-label={socialLink.label}
                    >
                      <socialLink.icon className="h-5 w-5" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <span className="text-muted-foreground text-sm">
              &copy; {new Date().getFullYear()} BlackPortal
            </span>
          </div>

          <div className="order-1 grid grid-cols-2 gap-6 md:grid-cols-3 lg:order-2 lg:col-span-3 lg:justify-items-end">
            <div>
              <h2 className="mb-2 font-bold">Delta</h2>

              <ul className="text-muted-foreground flex flex-col gap-1">
                {footerDeltaLinks.map((companyLink, idx) => (
                  <li key={`footer-delta-link-${idx}`}>
                    <Link
                      className="hover:text-primary"
                      href={companyLink.href}
                    >
                      {companyLink.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="mb-2 font-bold">Nebula</h2>

              <ul className="text-muted-foreground flex flex-col gap-1">
                {footerNebulaLinks.map((companyLink, idx) => (
                  <li key={`footer-nebula-link-${idx}`}>
                    <Link
                      className="hover:text-primary"
                      href={companyLink.href}
                    >
                      {companyLink.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="mb-2 font-bold">Company</h2>

              <ul className="text-muted-foreground flex flex-col gap-1">
                {footerCompanyLinks.map((companyLink, idx) => (
                  <li key={`footer-company-link-${idx}`}>
                    <Link
                      className="hover:text-primary"
                      href={companyLink.href}
                    >
                      {companyLink.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
