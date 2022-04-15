import { IResolvers } from "graphql-tools";
import * as pokemons from "./models/pokemons";

export const resolvers: IResolvers = {
  Query: {
    // Returns a list of Pokèmons based on the name searched
    pokemons: (_, args) => pokemons.query(args),
    // Returns the list of all the Pokèmons types
    pokemonsTypes: (_, __) => pokemons.getAllTypes()
  }
};