import { socialLinks } from '@/app/layout.config';
import BlackPortalLogo from '@/components/icons/BlackPortalLogo';
import { Link } from '@/components/ui/Link';
import {
  footerCompanyLinks,
  footerDeltaLinks,
  footerHorizonLinks,
  footerNebulaLinks,
} from '@/data/footer-links';
import { cn } from '@/lib/utils';

type Props = {
  isDocs?: boolean;
};

export default function Footer({ isDocs = false }: Readonly<Props>) {
  return (
    <footer className="bg-background border-t">
      <div className={cn(isDocs ? 'px-4 md:px-8' : 'container')}>
        <div className="grid grid-cols-1 gap-10 py-10 lg:grid-cols-5">
          <div className="order-2 flex flex-col items-center justify-between gap-6 lg:order-1 lg:items-start">
            <div className="flex flex-col items-start gap-4">
              <BlackPortalLogo className="h-7 w-auto" />

              <ul className="text-muted-foreground flex items-center gap-5">
                {socialLinks
                  .filter((socialLink) => socialLink.type === 'icon')
                  .map((socialLink, idx) => (
                    <li key={`footer-social-link-${idx}`}>
                      <Link
                        className="hover:text-primary [&_svg]:size-5!"
                        href={socialLink.url}
                        aria-label={socialLink.text as string}
                      >
                        {socialLink.icon}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>

            <span className="text-muted-foreground text-sm">
              &copy; {new Date().getFullYear()} BlackPortal
            </span>
          </div>

          <div className="order-1 grid grid-cols-2 gap-6 md:grid-cols-4 lg:order-2 lg:col-span-4 lg:justify-items-end">
            <div>
              <h2 className="mb-2 font-bold">Delta</h2>

              <ul className="text-muted-foreground flex flex-col gap-1">
                {footerDeltaLinks.map((deltaLink, idx) => (
                  <li key={`footer-delta-link-${idx}`}>
                    <Link className="hover:text-primary" href={deltaLink.href}>
                      {deltaLink.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="mb-2 font-bold">Nebula</h2>

              <ul className="text-muted-foreground flex flex-col gap-1">
                {footerNebulaLinks.map((nebulaLink, idx) => (
                  <li key={`footer-nebula-link-${idx}`}>
                    <Link className="hover:text-primary" href={nebulaLink.href}>
                      {nebulaLink.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="mb-2 font-bold">Horizon</h2>

              <ul className="text-muted-foreground flex flex-col gap-1">
                {footerHorizonLinks.map((horizonLink, idx) => (
                  <li key={`footer-horizon-link-${idx}`}>
                    <Link
                      className="hover:text-primary"
                      href={horizonLink.href}
                    >
                      {horizonLink.title}
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
