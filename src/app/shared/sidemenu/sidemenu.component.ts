import { Component } from '@angular/core';
interface  MenuItem{

  texto:string;
  ruta:string;
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [
    `
    li{
      cursor:pointer;
     
    }
 
    `
  ]
})
export class SidemenuComponent  {

  templateMenu : MenuItem[] =[
    {
      texto:"Basicos",
      ruta:"/template/basicos"
    },
    {
      texto:"Dinamicos",
      ruta:"/template/dinamicos"
    },
    {
      texto:"Switches",
      ruta:"/template/swithces"
    }
    
  ];

  reactiveMenu : MenuItem[] =[
    {
      texto:"Basicos",
      ruta:"/reactive/basicos"
    },
    {
      texto:"Dinamicos",
      ruta:"/reactive/dinamicos"
    },
    {
      texto:"Switches",
      ruta:"/reactive/swithces"
    }
  ]

  authMenu : MenuItem[] =[
    {
      texto:"Registro",
      ruta:"/auth/pages/registro"
    },
    {
      texto:"Login",
      ruta:"/auth/pages/login"
    }
  ]

}
