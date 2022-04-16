import { gql } from "@apollo/client";

export const GET_POKEMONS = gql`
    query getPokemons($q: String, $after: ID, $limit: Int, $type: String) {
        pokemons(q: $q, after: $after, limit: $limit, type: $type) {
            edges {
                cursor
                node {
                    id
                    name
                    classification
                    types
                }
            }
            pageInfo {
                endCursor
                hasNextPage
            }
        }
    }
`;

export const GET_POKEMON_TYPES = gql`
    query getAllPokemonTypes {
        pokemonsTypes
    }
`;