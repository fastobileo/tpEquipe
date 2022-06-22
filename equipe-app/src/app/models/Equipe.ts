import { Personne } from "./Personne";

export class Equipe {
    constructor(
        public nom: string = "",
        public listePersonnes: Personne[]
    ) { }
}