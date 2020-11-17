import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  qtde: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Farinha', qtde: 2},
  {position: 2, name: 'Feijão', qtde: 3},
  {position: 3, name: 'Açucar', qtde: 5},
  {position: 4, name: 'Manteiga', qtde: 2},
  {position: 5, name: 'Fermento', qtde: 1},
];

@Component({
  selector: 'spa-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})


export class TableComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'qtde'];
  dataSource = ELEMENT_DATA;

  constructor() { 
  }
  
  ngOnInit(): void {
  }

  mudarQtde() {
    let lnValAnt = ELEMENT_DATA[0].qtde;
    ELEMENT_DATA[0].qtde = lnValAnt + 1;
  }

}
