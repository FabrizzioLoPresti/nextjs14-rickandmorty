import { APIResults } from '@/types/types';
import CharacterCard from './character-card';
import PaginationComponent from './pagination-component';

type Props = {
  page: string;
};

const fetchCharacters = async (page: string) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character?page=${!page ? '1' : page}`,
    {
      cache: 'no-cache',
      next: {
        tags: ['characters-list'],
      },
    },
  );
  const data: APIResults = await response.json();
  return data;
};

const CharactersList = async ({ page }: Props) => {
  const characters = await fetchCharacters(page);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-6 my-10">
        {characters.results.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
      <PaginationComponent
        pages={characters.info.pages}
        actualPage={!page ? 1 : parseInt(page)}
      />
    </>
  );
};

export default CharactersList;
