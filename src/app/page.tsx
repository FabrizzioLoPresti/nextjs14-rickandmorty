import { Suspense } from 'react';
import CharactersList from '@/components/characters-list';
import Loader from '@/components/loader';

interface Props {
  searchParams: {
    page: string;
  };
}

export default function Home({ searchParams: { page } }: Props) {
  const key = JSON.stringify(page);

  return (
    <main className="screens">
      <Suspense fallback={<Loader />} key={key}>
        <CharactersList page={page} />
      </Suspense>
    </main>
  );
}
