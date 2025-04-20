import { Badge } from '@/components/ui/Badge';
import type { Feature } from '@/types/features';
import { FaCheck } from 'react-icons/fa6';

type Props = {
  item: Feature;
};

export default function FeatureCard({ item }: Props) {
  return (
    <div className="flex gap-2">
      <FaCheck className="text-primary mt-1 h-5 min-h-5 w-5 min-w-5" />

      <div>
        <div className="flex items-center gap-3">
          <h4 className="text-lg font-semibold">{item.title}</h4>
          {item.isFuture ? <Badge size="sm">Future</Badge> : null}
        </div>
        <p className="text-muted-foreground text-sm">{item.text}</p>
      </div>
    </div>
  );
}
