import { Component, OnInit } from '@angular/core';
import { EntrepriseService } from '../entreprise.service';
import { Entreprise } from '../models/Entreprise';
import { Equipe } from '../models/Equipe';
import { Personne } from '../models/Personne';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  //input
  prenom: string = "";
  nom: string = "";
  newEquipe: string = "";
  equipeSelect: number = -1;

  //import service


  entrepriseService: EntrepriseService;
  entreprise: any;

  constructor() {
    this.entrepriseService = new EntrepriseService()
  }

  ngOnInit(): void {
    this.entreprise = this.entrepriseService.getEntreprise();
  }

  onAddEquipe() {
    if (this.newEquipe != "") {
      this.entrepriseService.addEquipe(new Equipe(this.newEquipe, []));
      this.entreprise = this.entrepriseService.getEntreprise()
    }
  }

  onAddPersonne() {
    if (this.prenom != "" && this.nom != "" && this.equipeSelect != -1)
      this.entrepriseService.addPersonneToEquipe(this.equipeSelect, new Personne(this.nom, this.prenom))
    this.prenom = "";
    this.nom = ""
    this.equipeSelect = -1;
  }
  onDeleteUser(i: number, p: number) {
    this.entrepriseService.removePersonneFromEquipe(i, p);
  }

  public reaload() {
    this.entreprise = this.entrepriseService.getEntreprise();
    console.log("test")
  }
}
