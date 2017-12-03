import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {isNumber} from 'util';

@Component({
  selector: 'left-menu',
  templateUrl: './leftMenu.component.html',
  styleUrls: ['./leftMenu.component.css']
})
export class LeftMenuComponent implements OnInit{
  categories: string[];
  selected: string[] = [];
  @Output() selectedCategories = new EventEmitter<string[]>();
  priceFrom: number;
  priceTo: number;
  @Output() priceFromEmiter = new EventEmitter<number>();
  @Output() priceToEmiter = new EventEmitter<number>();
  name: string;
  @Output() nameEmiter = new EventEmitter<string>();

  constructor(private productService: ProductService) {
  }

  onSelect(category: string) {
    const index: number = this.selected.indexOf(category);
    if ( index > -1) {
      this.selected.splice(index, 1);
    } else {
      this.selected.push(category);
    }

    (this.selected.length === 0) ?
    this.selectedCategories.emit(this.categories) :
    this.selectedCategories.emit(this.selected);
  }

  ngOnInit() {
    this.productService.getCategories().subscribe(data => this.categories = data);
  }

  onBlurFrom() {
    if (isNumber(this.priceFrom)) {
      this.priceFromEmiter.emit(this.priceFrom);
    } else {
      this.priceFromEmiter.emit(-1);
    }
  }

  onBlurTo() {
    if (isNumber(this.priceTo)) {
      this.priceToEmiter.emit(this.priceTo);
    } else {
      this.priceToEmiter.emit(99999999);
    }
  }
  onBlurName() {
    if (this.name === '') {
      this.nameEmiter.emit(' ');
    } else {
      this.nameEmiter.emit(this.name);
    }
  }
}

