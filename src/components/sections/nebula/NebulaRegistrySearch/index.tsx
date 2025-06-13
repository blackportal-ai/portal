'use client';

import * as React from 'react';
import { Search, X } from 'lucide-react';

import { Card, CardHeader } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function NebulaRegistrySearch() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const query = searchParams.get('q');
  const [value, setValue] = React.useState('');

  React.useEffect(() => {
    setValue(query ?? '');
  }, [query]);

  const createQueryString = React.useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  function handleOnInput(event: React.ChangeEvent<HTMLInputElement>) {
    const currentValue = event.target.value;

    setValue(currentValue);
    handleSearch(currentValue);
  }

  function handleClear() {
    handleSearch(null);
    setValue('');
  }

  function handleSearch(queryValue: string | null) {
    if (queryValue) {
      router.push(pathname + '?' + createQueryString('q', queryValue));
    } else {
      router.push(pathname);
    }
  }

  return (
    <Card className="py-3">
      <CardHeader className="gap-0 px-3">
        <div className="relative">
          <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />

          <Input
            className="pl-8"
            placeholder="Search datasets or model"
            value={value}
            onInput={handleOnInput}
          />

          {value.length ? (
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
