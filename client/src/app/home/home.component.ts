import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
import {SumaPuntajeService} from '../auditc/suma-puntaje.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   model: string;

  constructor(
    // private router: Router;
    private sumaPuntajeService: SumaPuntajeService) { }

    ngOnInit() {
    let model = this.sumaPuntajeService.get_auditC_puntaje();
    console.log(model)
    }

}
