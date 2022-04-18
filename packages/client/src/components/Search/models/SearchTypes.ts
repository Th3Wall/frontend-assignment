import { QueryResults } from "../../../shared/interfaces/interfaces"

export interface SearchProps {
    nameQuery: string
    pokemonTypesList: QueryResults
    nameQueryHandler: (e: string) => void
    typeQueryHandler: (e: string) => void
}