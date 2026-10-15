import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Pokemon } from "../../types/pokemon";

async function getPokemon(id: string): Promise<Pokemon | null> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pokemon/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return null;
  }

  const json = await res.json();
  return json.data;
}

export default async function PokemonDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const pokemon = await getPokemon(id);

  if (!pokemon) {
    notFound();
  }

  const stats = [
    { name: "HP", value: pokemon.stats.hp },
    { name: "Attack", value: pokemon.stats.attack },
    { name: "Defense", value: pokemon.stats.defense },
    { name: "Sp. Attack", value: pokemon.stats.specialAttack },
    { name: "Sp. Defense", value: pokemon.stats.specialDefense },
    { name: "Speed", value: pokemon.stats.speed },
  ];

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="mx-auto max-w-3xl">
        <Link href="/" className="text-blue-600 hover:underline">
          &larr; Back
        </Link>

        <div className="mt-6 rounded-xl bg-white p-6 shadow">
          <Image
            src={pokemon.image}
            alt={pokemon.title}
            width={400}
            height={400}
            className="mx-auto h-64 w-full object-contain"
          />

          <h1 className="mt-4 text-center text-3xl font-bold text-gray-800">
            {pokemon.title}
          </h1>

          <div className="mt-3 flex justify-center gap-2">
            {pokemon.types.map((type) => (
              <span
                key={type}
                className="rounded-full bg-red-500 px-3 py-1 text-sm text-white"
              >
                {type}
              </span>
            ))}
          </div>

          <p className="mt-4 text-gray-600">{pokemon.description}</p>

          <h2 className="mt-6 text-xl font-semibold text-gray-800">
            Abilities
          </h2>
          <div className="mt-2 flex flex-wrap gap-2">
            {pokemon.abilities.map((ability) => (
              <span
                key={ability}
                className="rounded bg-gray-100 px-3 py-1 text-sm text-gray-700"
              >
                {ability}
              </span>
            ))}
          </div>

          <h2 className="mt-6 text-xl font-semibold text-gray-800">Stats</h2>
          <div className="mt-2 space-y-2">
            {stats.map((stat) => (
              <div key={stat.name} className="flex items-center gap-3">
                <span className="w-24 text-sm text-gray-600">{stat.name}</span>
                <span className="w-8 text-sm font-semibold">{stat.value}</span>
                <div className="h-2 flex-1 rounded bg-gray-200">
                  <div
                    className="h-2 rounded bg-red-500"
                    style={{ width: `${Math.min(stat.value, 100)}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <h2 className="mt-6 text-xl font-semibold text-gray-800">Moves</h2>
          <div className="mt-2 grid grid-cols-2 gap-2">
            {pokemon.moves.map((move) => (
              <div
                key={move}
                className="rounded border px-3 py-2 text-center text-sm text-gray-700"
              >
                {move}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
