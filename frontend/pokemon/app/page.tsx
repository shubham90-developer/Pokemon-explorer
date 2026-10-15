"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Pokemon } from "./types/pokemon";

export default function Home() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPokemons = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pokemon`);
        const json = await res.json();
        setPokemons(json.data);
      } catch (error) {
        console.log("Failed to fetch pokemons", error);
      } finally {
        setLoading(false);
      }
    };

    getPokemons();
  }, []);

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-yellow-400 to-red-500 px-6 py-12 text-center text-white">
        <h1 className="text-4xl font-bold">Pokemon Explorer</h1>
        <p className="mt-2 text-lg">
          Search and discover your favourite pokemons
        </p>

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search pokemon by name..."
          className="mt-6 w-full max-w-md rounded-full px-5 py-3 text-gray-800 shadow-md outline-none focus:ring-4 focus:ring-yellow-200"
        />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-10">
        {loading ? (
          <p className="text-center text-gray-500">Loading pokemons...</p>
        ) : filteredPokemons.length === 0 ? (
          <p className="text-center text-gray-500">No pokemons found.</p>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filteredPokemons.map((pokemon) => (
              <Link
                key={pokemon._id}
                href={`/pokemon/${pokemon._id}`}
                className="group rounded-xl bg-white p-4 shadow transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="rounded-lg bg-gray-100 p-3">
                  <Image
                    src={pokemon.image}
                    alt={pokemon.title}
                    width={300}
                    height={300}
                    className="h-48 w-full object-contain transition group-hover:scale-105"
                  />
                </div>
                <h2 className="mt-4 text-center text-xl font-semibold text-gray-800">
                  {pokemon.title}
                </h2>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
