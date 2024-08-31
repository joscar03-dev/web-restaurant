import { Component, OnInit } from '@angular/core';
import { PlatoService } from '../../../../nucleo/servicios/plato.service';

interface Plato {
  id: number;
  nombre: string;
  precio: number;
  img: string;
  descripcion: string;
}

@Component({
  selector: 'app-lista-menu',
  templateUrl: './lista-menu.component.html',
  styleUrls: ['./lista-menu.component.css'],
})
export class ListaMenuComponent {
  platosPopulares: Plato[] = [
    {
      id: 1,
      nombre: 'Plato 1',
      precio: 100,
      img: 'assets/img/plato1.jpg',
      descripcion:
        'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    },
    {
      id: 2,
      nombre: 'Plato 2',
      precio: 150,
      img: 'assets/img/plato2.jpg',
      descripcion:
        'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    },
    {
      id: 3,
      nombre: 'Plato 3',
      precio: 200,
      img: 'assets/img/plato3.jpg',
      descripcion:
        'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    },
    {
      id: 4,
      nombre: 'Plato 4',
      precio: 250,
      img: 'assets/img/plato4.jpg',
      descripcion:
        'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    },
    {
      id: 5,
      nombre: 'Plato 5',
      precio: 300,
      img: 'assets/img/plato5.jpg',
      descripcion:
        'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    },
    {
      id: 6,
      nombre: 'Plato 6',
      precio: 350,
      img: 'assets/img/plato6.jpg',
      descripcion:
        'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    },
  ];
  constructor(private platoService: PlatoService) {}

  platos: Plato[] = [];
  platoSeleccionado: Plato | null = null;
  modalVisible: boolean = false;
  modalParaPedidoVisible: boolean = false;

  // Variables para el pedido
  direccion: string = '';
  cantidad: number = 1;
  total: number = 0;
  conCuantoPaga: number = 0;
  metodoPago: string = 'yape';

  mostrarDetallesPlato(plato: Plato) {
    this.cerrarModal(); // Cierra cualquier otro modal
    this.platoSeleccionado = plato;
    this.modalVisible = true; // Abre el modal de detalles
  }

  seleccionarPlato(plato: Plato): void {
    this.cerrarModal(); // Cierra cualquier otro modal
    this.platoSeleccionado = plato;
    this.modalParaPedidoVisible = true; // Abre el modal para hacer pedido
    this.cantidad = 1;
    this.calcularTotal();
  }

  calcularTotal(): void {
    if (this.platoSeleccionado) {
      this.total = this.platoSeleccionado.precio * this.cantidad;
    }
  }

  cerrarModal(): void {
    this.modalVisible = false;
    this.modalParaPedidoVisible = false;
    this.platoSeleccionado = null;
    this.direccion = '';
    this.cantidad = 1;
    this.total = 0;
    this.conCuantoPaga = 0;
    this.metodoPago = 'yape';
  }

  hacerPedido(): void {
    if (
      !this.direccion ||
      !this.cantidad ||
      this.total <= 0 ||
      this.conCuantoPaga <= 0
    ) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    console.log('Pedido:', {
      plato: this.platoSeleccionado,
      direccion: this.direccion,
      cantidad: this.cantidad,
      total: this.total,
      conCuantoPaga: this.conCuantoPaga,
      metodoPago: this.metodoPago,
    });

    this.cerrarModal();
  }
}
