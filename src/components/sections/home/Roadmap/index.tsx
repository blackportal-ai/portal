import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/Tabs';
import { deltaRoadmap, horizonRoadmap, nebulaRoadmap } from '@/data/roadmap';

import RoadmapCard from './RoadmapCard';

export default function Roadmap() {
  return (
    <section className="animate-in fade-in py-20 duration-1000">
      <div className="container">
        <h2 className="mb-6 text-center text-3xl font-bold">Roadmap</h2>

        <Tabs className="mx-auto max-w-5xl" defaultValue="delta">
          <TabsList className="mb-6 grid w-full grid-cols-3">
            <TabsTrigger value="delta">Delta</TabsTrigger>
            <TabsTrigger value="nebula">Nebula</TabsTrigger>
            <TabsTrigger value="horizon">Horizon</TabsTrigger>
          </TabsList>

          <TabsContent value="delta">
            <ul className="flex flex-col gap-1">
              {deltaRoadmap.map((item, idx) => (
                <li key={`roadmap-item-${idx}`}>
                  <RoadmapCard item={item} index={idx} />
                </li>
              ))}
            </ul>
          </TabsContent>

          <TabsContent value="nebula">
            <ul className="flex flex-col gap-1">
              {nebulaRoadmap.map((item, idx) => (
                <li key={`roadmap-item-${idx}`}>
                  <RoadmapCard item={item} index={idx} />
                </li>
              ))}
            </ul>
          </TabsContent>

          <TabsContent value="horizon">
            <ul className="flex flex-col gap-1">
              {horizonRoadmap.map((item, idx) => (
                <li key={`roadmap-item-${idx}`}>
                  <RoadmapCard item={item} index={idx} />
                </li>
              ))}
            </ul>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
