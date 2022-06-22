import { Component, EventEmitter, Input, OnInit, Output, OnChanges } from '@angular/core';
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

  @Output()
  updateEquipeEvent = new EventEmitter<boolean>();

  entrepriseService: EntrepriseService;
  entreprise: any;

  constructor() {
    this.entrepriseService = new EntrepriseService()
  }

  ngOnInit(): void {
    this.entreprise = this.entrepriseService.getEntreprise();
  }

  onRemoveEquipe(i: number) {
    this.entrepriseService.removeEquipe(i);
    this.entreprise = this.entrepriseService.getEntreprise();
  }
}
