import { IResolvers } from "graphql-tools";
import * as pokemons from "./models/pokemons";
import { query, filterByType } from "./models/pokemons";

export const resolvers: IResolvers = {
  Query: {
    // Returns a list of Pokèmons based on the name searched
    pokemons: (_, args) => pokemons.query(args),
    // Returns a list of Pokèmons based on the type searched
    pokemonsByType: (_, args) => pokemons.filterByType(args)
  }
};