import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Image } from '@nextui-org/react';
import { type Result } from '@/types/types';

type Props = {
  params: {
    id: string;
  };
};

const fetchCharacter = async (id: string) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`,
    {
      cache: 'no-cache',
      next: {
        tags: ['characte'],
      },
    },
  );
  const data: Result = await response.json();
  return data;
};

export default async function CharacterPage({ params: { id } }: Props) {
  const character = await fetchCharacter(id);
  if (!character.id) return notFound();

  return (
    <section className="screens space-y-4 lg:space-y-8 min-h-screen h-full my-5">
      <div className="flex flex-col gap-y-6 lg:flex-row lg:gap-x-16 lg:gap-y-0">
        <Image
          src={character.image}
          alt={character.name}
          width={320}
          isBlurred
          className="m-5 w-1/2 md:w-3/4 lg:w-fit mx-auto"
        />
        <div className="flex-1 flex flex-col justify-center gap-y-4">
          <h1 className="text-3xl md:text-4xl font-bold">{character.name}</h1>
          <div>
            <p className="text-xl md:text-2xl">
              <span className="font-bold">Specie:</span> {character.species}
            </p>
            <p className="text-xl md:text-2xl">
              <span className="font-bold">Status:</span> {character.status}
            </p>
          </div>
        </div>
      </div>

      <div>
        <p className="text-lg md:text-xl">
          <span className="font-bold">Gender:</span> {character.gender}
        </p>
        <p className="text-lg md:text-xl">
          <span className="font-bold">Location:</span> {character.location.name}
        </p>
      </div>

      <div>
        <h2 className="text-xl md:text-3xl font-bold">List of Episodes</h2>
        {character.episode.map((episode) => (
          <Link
            href={`/episodes/${episode.split('/').pop()}`}
            key={episode}
            className="text-lg md:text-xl block"
          >
            Episode {episode.split('/').pop()}
          </Link>
        ))}
      </div>
    </section>
  );
}
