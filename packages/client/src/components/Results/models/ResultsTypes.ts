import { PokemonNode } from '../../../shared/interfaces/interfaces';

export interface ResultsProps {
    results: PokemonNode[];
    loading: boolean;
    hasMoreData: boolean | undefined;
    loadMoreHandler: () => void;
}