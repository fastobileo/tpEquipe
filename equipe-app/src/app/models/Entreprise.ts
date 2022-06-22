import { Equipe } from "./Equipe";

export class Entreprise {
    constructor(
        public nom: string = "",
        public listeEquipes: Equipe[]
    ) { }
}