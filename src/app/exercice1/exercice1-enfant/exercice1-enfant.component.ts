import { Input, Output,EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {

  @Input() public result: number;
  @Output() private changeCompteur: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  add(ajout: boolean)  {
    if (ajout) {
      this.result++;
    }
    else
    {
      this.result--;
    }
    this.changeCompteur.emit(this.result);
  }

}
