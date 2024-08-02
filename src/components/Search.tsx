'use client';

import { Input } from './ui/input';
import { Button } from './ui/button';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

const Search = () => {
  const searchParams = useSearchParams();
  console.log('searchParams: ', searchParams);
  const { replace } = useRouter();
  const [query, setQuery] = useState(searchParams.get('query') || '');

  const handleSearch = (value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set('query', value);
    } else {
      params.delete('query');
    }

    replace(`/search?${params.toString()}`);
  };

  return (
    <div className="flex w-full h-[50px] gap-2 mb-6 md:order-2 md:gap-1 xl:gap-8">
      <Input
        className="order-1 border search-input-hero rounded-[5px] h-full border-primary-500  min-w-[208px] xl:pl-2.5 2xl:pl-4 focus-visible:ring-offset-0 focus-visible:ring-0"
        type="search"
        placeholder=" "
        onChange={(e) => setQuery(e.target.value)}
        defaultValue={searchParams.get('query')?.toString() || ''}
      />

      <Button
        className="order-1 border  text-background-100 font-semibold  border-primary-500 hover:bg-transparent hover:text-primary-500 bg-primary-500 h-full px-6 py-[11.5px] min-w-[113px] leading-[27px] text-[18px]"
        // onClick={() => handleSearch(query)}
      >
        Search
      </Button>
    </div>
  );
};

export default Search;
