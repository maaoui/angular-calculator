import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-normalcalc',
  templateUrl: './normalcalc.component.html',
  styleUrls: ['./normalcalc.component.css']
})
export class NormalcalcComponent implements OnInit {
  myoperation = '';
  normal = true;
  scientifique = false;
  update (str: string) {
    this.myoperation = this.myoperation + str;
  }
  calcul() {
    let res: number;
    try {
      // tslint:disable-next-line:no-eval
      res = eval(this.myoperation);
      this.myoperation = res + '';
    } catch (error) {
      this.myoperation = 'error';
    }
  }
  del() {
    this.myoperation = '';
  }
  change() {
    this.normal = !this.normal;
    this.scientifique = !this.scientifique;
}

  constructor() { }

  ngOnInit() {
  }

}
