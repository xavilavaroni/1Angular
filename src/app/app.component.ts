import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '1° Tarea de Angular';

  mostrar = true;

  productos = [
    {nombre:'Shampoo', costo:'450'},
    {nombre:'Acondicionador', costo:'380'},
    {nombre:'Jabon', costo:'120'},
    {nombre:'Detergente', costo:'135'},
    {nombre:'Esponja', costo:'60'}
  ];

  hide(): void {
    if (this.mostrar === false) {
      this.mostrar = true;
    } else {
      this.mostrar = false;
    }
  }

}
