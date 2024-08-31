import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario-contacto',
  templateUrl: './formulario-contacto.component.html',
  styleUrls: ['./formulario-contacto.component.css']
})
export class FormularioContactoComponent {
  nombre: string = '';
  email: string = '';
  mensaje: string = '';

  enviarMensaje() {
    if (this.nombre && this.email && this.mensaje) {
  
      console.log('Mensaje enviado:', { nombre: this.nombre, email: this.email, mensaje: this.mensaje });
      alert('Mensaje enviado exitosamente');
    
      this.nombre = '';
      this.email = '';
      this.mensaje = '';
    } else {
      alert('Por favor, completa todos los campos');
    }
  }
}
