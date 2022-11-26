import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss']
})
export class CalcComponent implements OnInit {

  numberone: number = 0;
  numbertwo: number = 0;
  resultado: any = 0;

  @ViewChild('numberOne') campoUm!: ElementRef;
  @ViewChild('numberTwo') campoDois!: ElementRef;

  onSomar() {
    this.resultado = Number(this.campoUm.nativeElement.value) + Number(this.campoDois.nativeElement.value);
  }

  constructor() { }

  ngOnInit(): void {
  }


}
