import { Link } from '@/components/ui/Link';

import { socialLinks } from '@/data/social-links';

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col items-center justify-center gap-4 px-4 py-8">
        <ul className="flex items-center gap-4">
          {socialLinks.map(({ icon: Icon, href }, idx) => (
            <li key={`footer-social-link-${idx}`}>
              <Link className="hover:text-primary" href={href}>
                <Icon className="h-4 w-4" />
              </Link>
            </li>
          ))}
        </ul>

        <span>&copy; {new Date().getFullYear()} Black Portal</span>
      </div>
    </footer>
  );
}
