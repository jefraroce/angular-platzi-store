import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnInit } from '@angular/core';

import { Product } from '../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnChanges, OnInit {
  @Input() product: Product;
  // Debemos especificar el tipo de dato que deseamos emitir, any deja abierta la posibilidad a cualquier tipo
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  constructor() {
    console.log('1. constructor')
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('2. ngOnChanges', changes)
  }

  ngOnInit() {
    console.log('3. ngOnInit')
  }

  ngDoCheck() {
    console.log('4. ngDoCheck')
  }

  ngOnDestroy() {
    console.log('5. ngOnDestroy')
  }

  addCart() {
    console.log('Añadir al carrito');
    this.productClicked.emit(this.product.id);
  }
}