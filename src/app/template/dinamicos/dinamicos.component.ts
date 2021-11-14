import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona {

  nombre: string;
  favoritos: Favorito[];
}
interface Favorito {
  id: number;
  nombre: string;
}


@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  @ViewChild("miFormularioDinamico") miFormularioDinamico!: NgForm;
  nombreFavorito:string='';

  persona: Persona = {
    nombre: 'Juan',
    favoritos: [{
      id: 1,
      nombre: 'Destiny'
    },
    {
      id: 2,
      nombre: 'Call of Duty'
    }
    ]
  };


  constructor() { }

  ngOnInit(): void {
  }


  guardar() {

  }

  nombreValido(): boolean {
    console.log('entre');
    return this.miFormularioDinamico?.controls.nombrePersona?.invalid
      && this.miFormularioDinamico?.controls.nombrePersona?.touched;

  }

  eliminar(indice:number){

      this.persona.favoritos.splice(indice,1);
  }

  agregarJuego(){
    const nuevoJuegoFavorito: Favorito = {
      id: this.persona.favoritos.length,
      nombre: this.nombreFavorito
    }
    this.persona.favoritos.push(nuevoJuegoFavorito);
    this.miFormularioDinamico.controls.nombreFavorito.reset();
  }

}
