import * as React from 'react';

import NebulaRegistryHero from '@/components/sections/nebula/NebulaRegistryHero';
import NebulaRegistryList from '@/components/sections/nebula/NebulaRegistryList';
import NebulaRegistrySearch from '@/components/sections/nebula/NebulaRegistrySearch';

export default function NebulaRegistryPage() {
  const [query, setQuery] = React.useState('');

  React.useEffect(() => {
    const paramsString = window.location.search;
    const searchParams = new URLSearchParams(paramsString);

    setQuery(searchParams.get('q') ?? '');
  }, []);

  function handleOnInput(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setQuery(value);

    handleSearchQuery(value);
  }

  function handleClear() {
    handleSearchQuery(null);
    setQuery('');
  }

  function handleSearchQuery(value: string | null) {
    const url = new URL(window.location.href);

    if (value) {
      url.searchParams.set('q', value);
    } else {
      url.searchParams.delete('q');
    }

    window.history.pushState(null, '', url.toString());
  }

  return (
    <main>
      <NebulaRegistryHero />

      <div className="container">
        <div className="mx-auto mb-12 max-w-5xl">
          <NebulaRegistrySearch
            query={query}
            handleOnInput={handleOnInput}
            handleClear={handleClear}
          />
        </div>
      </div>

      <NebulaRegistryList query={query} />
    </main>
  );
}
