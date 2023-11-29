import Link from 'next/link';
import { Image, Chip } from '@nextui-org/react';
import { type Result } from '@/types/types.d';
import { getSpeciesColor, getStatusColor } from '@/helpers/character-functions';

type Props = {
  character: Result;
};

const CharacterCard = ({ character }: Props) => {
  return (
    <Link
      href={`/characters/${character.id}`}
      className="mx-auto flex flex-col gap-y-2 items-center hover:scale-105 transition-transform ease-in-out cursor-pointer"
    >
      <Image src={character.image} alt={character.name} width={240} />
      <div className="text-center">
        <h2 className="text-2xl font-bold">{character.name}</h2>
      </div>
      <div className="flex flex-row gap-4">
        <Chip color={getSpeciesColor(character.species)} className="text-sm">
          {character.species}
        </Chip>
        <Chip color={getStatusColor(character.status)} className="text-sm">
          {character.status}
        </Chip>
      </div>
    </Link>
  );
};

export default CharacterCard;
