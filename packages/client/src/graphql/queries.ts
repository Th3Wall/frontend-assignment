import { gql } from "@apollo/client";

export const GET_POKEMONS = gql`
    query SearchPokemons ($q: String) {
        pokemons(q: $q) {
            edges {
                node {
                    id
                    name
                    classification
                    types
                }
            }
        }
    }
`;