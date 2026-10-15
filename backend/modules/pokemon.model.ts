import { Schema, model } from "mongoose";
import { IPokemon } from "./pokemon.interface";

const statsSchema = new Schema(
  {
    hp: { type: Number, required: true },
    attack: { type: Number, required: true },
    defense: { type: Number, required: true },
    specialAttack: { type: Number, required: true },
    specialDefense: { type: Number, required: true },
    speed: { type: Number, required: true },
  },
  { _id: false },
);

const pokemonSchema = new Schema<IPokemon>(
  {
    image: { type: String, required: [true, "Image is required"], trim: true },
    title: { type: String, required: [true, "Title is required"], trim: true },
    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
    },
    types: {
      type: [String],
      required: [true, "Types are required"],
    },
    abilities: {
      type: [String],
      required: [true, "Abilities are required"],
    },
    stats: {
      type: statsSchema,
      required: [true, "Stats are required"],
    },
    moves: {
      type: [String],
      required: [true, "Moves are required"],
    },
  },
  { timestamps: true, versionKey: false },
);

export const Pokemon = model<IPokemon>("Pokemon", pokemonSchema);
