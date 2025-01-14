import { Link } from '@/components/ui/Link';
import BlackPortalLogo from '@/components/icons/BlackPortalLogo';

import { socialLinks } from '@/data/social-links';
import { footerCompanyLinks } from '@/data/footer-links';
import { cn } from '@/lib/utils';

type Props = {
  isDocs?: boolean;
};

export default function Footer({ isDocs }: Props) {
  return (
    <footer className="border-t">
      <div className={cn(isDocs ? 'px-4 md:px-8' : 'container')}>
        <div className="grid grid-cols-1 gap-10 py-10 lg:grid-cols-4">
          <div className="lg:col-span-3">
            <div>
              <h2 className="mb-2 font-bold">Company</h2>

              <ul className="flex flex-col gap-1 text-muted-foreground">
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

          <div className="flex flex-col items-center justify-between gap-6 md:items-end">
            <div className="flex flex-col items-end gap-4">
              <BlackPortalLogo className="h-7 w-auto" />

              <ul className="flex items-center gap-5 text-muted-foreground">
                {socialLinks.map(({ icon: Icon, href }, idx) => (
                  <li key={`footer-social-link-${idx}`}>
                    <Link className="hover:text-primary" href={href}>
                      <Icon className="h-5 w-5" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <span className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Black Portal
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
