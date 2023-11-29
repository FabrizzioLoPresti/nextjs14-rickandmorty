import { Status, Species } from '@/types/types.d';

export const getSpeciesColor = (specie: Species) => {
  switch (specie) {
    case Species.Human:
      return 'success';
    case Species.Alien:
      return 'warning';
    default:
      return 'primary';
  }
};

export const getStatusColor = (status: Status) => {
  switch (status) {
    case Status.Alive:
      return 'primary';
    case Status.Dead:
      return 'danger';
    case Status.Unknown:
      return 'default';
    default:
      return 'default';
  }
};