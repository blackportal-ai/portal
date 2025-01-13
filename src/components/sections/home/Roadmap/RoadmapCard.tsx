import { BsThreeDots } from 'react-icons/bs';

import { Button } from '@/components/ui/Button';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/HoverCard';

import { cn } from '@/lib/utils';
import type { RoadmapItem } from '@/types/roadmap';

type Props = {
  item: RoadmapItem;
  index: number;
};

export default function RoadmapCard({ item, index }: Props) {
  return (
    <div className="grid w-full grid-cols-[1fr_40px_1fr]">
      <div
        className={cn(
          'text-xl text-muted-foreground',
          index % 2 === 0 ? 'order-1 text-right' : 'order-3',
        )}
      >
        <p>{item.quarter}</p>
      </div>

      <div className="order-2 flex flex-col items-center gap-1">
        <span className="my-[8px] flex rounded-full bg-primary p-[6px]"></span>
        <span className="h-full w-0 border-2"></span>
      </div>

      <div className={cn(index % 2 === 0 ? 'order-3' : 'order-1 text-right')}>
        <h3 className="text-xl font-semibold">{item.title}</h3>

        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="ghost">
              <BsThreeDots />
            </Button>
          </HoverCardTrigger>

          <HoverCardContent className="text-left">
            {item.description}
          </HoverCardContent>
        </HoverCard>
      </div>
    </div>
  );
}
