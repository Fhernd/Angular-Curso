import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-tabla-multiplicar',
  templateUrl: './tabla-multiplicar.component.html',
  styleUrls: ['./tabla-multiplicar.component.css']
})
export class TablaMultiplicarComponent implements OnInit {

  numero!: number;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parametros: ParamMap) => {
      this.numero = parseInt(parametros.get('numero')!);
    });
  }

}
