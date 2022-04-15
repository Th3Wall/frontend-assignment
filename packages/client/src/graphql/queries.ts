import { gql } from "@apollo/client";

export const GET_POKEMONS = gql`
    query getPokemons ($q: String, $limit: Int, $type: String) {
        pokemons(q: $q, limit: $limit, type: $type) {
            edges {
                node {
                    id
                    name
                    classification
                    types
                }
            }
            pageInfo {
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