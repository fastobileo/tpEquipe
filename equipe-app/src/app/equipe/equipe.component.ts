import { Component, Input, OnInit } from '@angular/core';
import { EntrepriseService } from '../entreprise.service';
import { HomeComponent } from '../home/home.component';
import { Entreprise } from '../models/Entreprise';
import { Equipe } from '../models/Equipe';
import { Personne } from '../models/Personne';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.scss']
})
export class EquipeComponent implements OnInit {

  @Input()
  entrepriseSended!: Entreprise;

  entrepriseService = new EntrepriseService()

  constructor() { }

  ngOnInit(): void {

  }

  onRemoveEquipe(i: number) {
    this.entrepriseService.removeEquipe(i);
    console.log(this.entrepriseService.getEntreprise());
  }
}
