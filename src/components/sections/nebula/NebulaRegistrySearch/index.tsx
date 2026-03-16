import * as React from 'react';
import { Search, X } from 'lucide-react';

import { Card, CardHeader } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';

type Props = {
  query: string;
  handleOnInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleClear: () => void;
};

export default function NebulaRegistrySearch({
  query,
  handleOnInput,
  handleClear,
}: Props) {
  return (
    <Card className="py-3">
      <CardHeader className="gap-0 px-3">
        <div className="relative">
          <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />

          <Input
            className="pl-8"
            placeholder="Search datasets or model"
            value={query}
            onInput={handleOnInput}
          />

          {query.length ? (
            <button
              className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer"
              type="button"
              onClick={handleClear}
            >
              <X className="h-4 w-4" />
            </button>
          ) : null}
        </div>
      </CardHeader>
    </Card>
  );
}
