import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scicalc',
  templateUrl: './scicalc.component.html',
  styleUrls: ['./scicalc.component.css']
})
export class ScicalcComponent implements OnInit {
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
