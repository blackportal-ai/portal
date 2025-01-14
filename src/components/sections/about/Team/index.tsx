import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/Avatar';
import { Button } from '@/components/ui/Button';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';
import { Link } from '@/components/ui/Link';

import { team } from '@/data/team';

export default function Team() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="mb-10 text-center">
          <h2 className="mb-3 text-3xl font-bold md:text-4xl">
            It’s All About the People
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
            We’re always on the lookout for passionate individuals to join our
            team. If you’re excited about advancing the future of machine
            learning, we’d love to hear from you!
          </p>
          <Button className="mt-6" variant="secondary" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>

        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {team.map((member, idx) => (
            <li key={`member-${idx}`}>
              <Card className="h-full">
                <CardHeader className="items-center">
                  <Avatar className="mb-3 h-24 w-24">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback className="uppercase">
                      {member.name.split('').slice(0, 2)}
                    </AvatarFallback>
                  </Avatar>

                  <CardTitle className="text-xl">{member.name}</CardTitle>

                  <CardDescription>
                    <ul className="mt-4 flex items-center gap-6">
                      {member.socialLinks?.map((socialLink, idx) => (
                        <li key={`member-social-link-${idx}`}>
                          <Link
                            href={socialLink.href}
                            aria-label={socialLink.label}
                          >
                            <socialLink.icon className="h-4 w-4" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </CardDescription>
                </CardHeader>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
