import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';
import { values } from '@/data/values';

export default function Values() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="mb-10 text-center">
          <h2 className="mb-3 text-3xl font-bold md:text-4xl">
            Our values drive everything we do
          </h2>
        </div>

        <ul className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
          {values.map((value, idx) => (
            <li key={`value-${idx}`}>
              <Card className="h-full">
                <CardHeader>
                  <div className="pb-2">
                    <value.icon className="h-6 w-6" />
                  </div>

                  <CardTitle className="text-xl">{value.title}</CardTitle>
                  <CardDescription className="text-lg leading-snug">
                    {value.text}
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
