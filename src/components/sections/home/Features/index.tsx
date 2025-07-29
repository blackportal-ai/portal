import {
  deltaFeatures,
  horizonFeatures,
  nebulaFeatures,
} from '@/data/features';

import FeatureCard from './FeatureCard';

export default function Features() {
  return (
    <section className="animate-in fade-in py-20 duration-1000">
      <div className="container mx-auto max-w-5xl">
        <h2 className="mb-6 text-center text-3xl font-bold">Features</h2>

        <div className="flex flex-col gap-6">
          <div>
            <h3 className="mb-3 text-center text-xl font-bold">Delta</h3>

            <ul className="grid grid-cols-1 gap-2 lg:grid-cols-2">
              {deltaFeatures.map((deltaItem, idx) => (
                <li key={`delta-feature-item-${idx}`}>
                  <FeatureCard item={deltaItem} />
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-center text-xl font-bold">Nebula</h3>

            <ul className="grid grid-cols-1 gap-2 lg:grid-cols-2">
              {nebulaFeatures.map((nebulaItem, idx) => (
                <li key={`nebula-feature-item-${idx}`}>
                  <FeatureCard item={nebulaItem} />
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-center text-xl font-bold">Horizon</h3>

            <ul className="grid grid-cols-1 gap-2 lg:grid-cols-2">
              {horizonFeatures.map((horizonItem, idx) => (
                <li key={`horizon-feature-item-${idx}`}>
                  <FeatureCard item={horizonItem} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
