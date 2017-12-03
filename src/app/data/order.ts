import {CartProduct} from './cartProduct';

export class Order {
  constructor(public fullName: string, public address: string, public price: number, public products: CartProduct[], public isRealised: boolean) {}
}
