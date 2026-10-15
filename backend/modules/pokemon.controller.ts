import { Request, Response } from "express";
import { Pokemon } from "./pokemon.model";

export const getAllPokemons = async (req: Request, res: Response) => {
  try {
    const pokemons = await Pokemon.find();
    res.status(200).json({ success: true, data: pokemons });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to fetch pokemons" });
  }
};

export const getPokemonById = async (req: Request, res: Response) => {
  try {
    const pokemon = await Pokemon.findById(req.params.id);

    if (!pokemon) {
      return res
        .status(404)
        .json({ success: false, message: "Pokemon not found" });
    }

    res.status(200).json({ success: true, data: pokemon });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to fetch pokemon" });
  }
};
