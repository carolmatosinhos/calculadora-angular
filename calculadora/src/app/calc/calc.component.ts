import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss']
})
export class CalcComponent implements OnInit {

  @Input() numberone: number = 0
  @Input() numbertwo: number = 0
  resultado: any = '';

  onSomar(){
   this.resultado = this.numberone + this.numbertwo;
  }

  constructor() { }

  ngOnInit(): void {
  }


}
