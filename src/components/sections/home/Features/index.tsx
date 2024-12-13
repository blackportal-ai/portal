import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';

import { features } from '@/data/features';

export default function Features() {
  return (
    <section className="py-20">
      <div className="container">
        <h2 className="mb-6 text-center text-3xl font-bold">Features</h2>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, text }, idx) => (
            <Card key={`feature-${idx}`}>
              <CardHeader>
                <Icon className="mb-4 h-10 w-10 text-primary" />

                <CardTitle className="text-xl">{title}</CardTitle>
                <CardDescription>{text}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
