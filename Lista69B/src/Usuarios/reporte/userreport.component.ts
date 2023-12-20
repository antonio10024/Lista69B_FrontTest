import { Component, inject } from '@angular/core';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-userreport',
  templateUrl: './userreport.component.html',
  styleUrls: ['./userreport.component.scss']
})
export class UserreportComponent {
  //servicios inyectados
  private engine = inject(UsuarioService);

  //@inpunt

  //variable formulario



  //metodos 



}


