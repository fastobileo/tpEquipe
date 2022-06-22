import { Injectable } from '@angular/core';
import { Entreprise } from './models/Entreprise';
import { Equipe } from './models/Equipe';
import { Personne } from './models/Personne';

@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {

  newEquipe: string = "";
  listeEquipes: Equipe[] = [
    new Equipe("test", []),
    new Equipe("equipe 1", [new Personne("leo", "dlr")]),
    new Equipe("test", []),
  ];
  entreprise: Entreprise = new Entreprise("ENI", this.listeEquipes);

  constructor() { }

  public getEntreprise() {
    return this.entreprise;
  }

  public addEquipe(e: Equipe) {
    this.entreprise.listeEquipes.push(e);
  }

  public removeEquipe(i: number) {
    this.entreprise.listeEquipes.splice(i, 1)
  }

  addPersonneToEquipe(i: number, p: Personne) {
    this.entreprise.listeEquipes[i].listePersonnes.push(p);
  }

  removePersonneFromEquipe(i: number, p: number) {
    this.entreprise.listeEquipes[i].listePersonnes.splice(p, 1);
  }

  getAllPersonne() {
    let result: Personne[] = [];
    this.entreprise.listeEquipes.forEach(equipes => {
      equipes.listePersonnes.forEach(personnes => {
        result.push(personnes)
      });
    });
    return result;
  }
}
