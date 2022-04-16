export interface PageInfo {
    endCursor: string
    hasNextPage: boolean
}

export interface Pokemon {
    id: string
    name: string
    classification: string
    types: string[]
}

export interface PokemonNode {
    id: string
    name: string
    classification: string
    types: string
}

export interface PokemonEdge {
    cursor: string
    node: Pokemon
}

export interface PokemonConnection {
    edges: PokemonEdge[]
    pageInfo: PageInfo
}

export interface QueryResults {
    pokemons: PokemonConnection,
    pokemonsByType: PokemonConnection,
    pokemonsTypes: string[]
}

export interface QueryResultsData {
    data: QueryResults
}