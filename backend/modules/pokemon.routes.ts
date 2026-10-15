import { Router } from "express";
import { getAllPokemons, getPokemonById } from "./pokemon.controller";

const router = Router();

router.get("/", getAllPokemons);
router.get("/:id", getPokemonById);

export const pokemonRouter = router;
