import { pipe } from "fp-ts/lib/pipeable";
import * as O from "fp-ts/lib/Option";
import * as A from "fp-ts/lib/Array";
import { identity } from "fp-ts/lib/function";
import { eqString } from "fp-ts/lib/Eq";
import { data } from "../data/pokemons";
import { toConnection, slice } from "../functions";
import { Connection, Pokemon } from "../types";

const SIZE_LIMIT = 15;

export function query(args: {
  after?: string;
  limit?: number;
  q?: string;
  type?: string;
}): Connection<Pokemon> {
  const { after, q, type, limit = SIZE_LIMIT } = args;

  const filterByQ: (as: Pokemon[]) => Pokemon[] =
    // filter only if q is defined
    q === undefined
      ? identity
      : A.filter(p => p.name.toLowerCase().includes(q.toLowerCase()));

  const filterByType: (as: Pokemon[]) => Pokemon[] =
      // filter only if the type is defined
      type === undefined
          ? identity
          : A.filter(p => p.types.find(t => t.toLowerCase().includes(type.toLowerCase())) !== undefined);

  const sliceByAfter: (as: Pokemon[]) => Pokemon[] =
    // filter only if q is defined
    after === undefined
      ? identity
      : as =>
          pipe(
            as,
            A.findIndex(a => a.id === after),
            O.map(a => a + 1),
            O.fold(() => as, idx => as.slice(idx))
          );

  const results: Pokemon[] = pipe(
    data,
    filterByQ,
    filterByType,
    sliceByAfter,
    // slicing limit + 1 because the `toConnection` function should known the connection size to determine if there are more results
    slice(0, limit + 1)
  );
  return toConnection(results, limit);
}

export function getAllTypes(): string[] {
  const getTypes: (as: Pokemon[]) => string[][] = A.map((p) => p.types);

  const typeResults: string[] = pipe(
      data,
      getTypes,
      (as) => A.flatten(as),
      (as) => A.uniq(eqString)(as),
  );

  return typeResults;
}