import { Link } from '@/components/ui/Link';

import { socialLinks } from '@/data/social-links';

export default function Footer() {
  return (
    <footer>
      <div className="container flex items-center justify-between py-8">
        <span>&copy; {new Date().getFullYear()} Delta</span>

        <ul className="flex items-center gap-4">
          {socialLinks.map(({ icon: Icon, href }, idx) => (
            <li key={`footer-social-link-${idx}`}>
              <Link className="hover:text-primary" href={href}>
                <Icon className="h-5 w-5" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
