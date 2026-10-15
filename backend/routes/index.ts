import { Router } from "express";
import { pokemonRouter } from "../modules/pokemon.routes";

const router = Router();

const moduleRoutes = [
  {
    path: "/pokemon",
    route: pokemonRouter,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
