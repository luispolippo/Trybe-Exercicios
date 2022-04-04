import Client from './Client';
import Item from './Item';

enum PaymentType {
  CARTAO = 'Cartão',
  DINHEIRO = 'Dinheiro'
}

enum DiscountPercentage {
  '10%' = 0.1,
  '20%' = 0.2,
  '30%' = 0.3,
  '40%' = 0.4,
  '50%' = 0.5
}

class Order {
  private _client: Client;
  private _itens: Item[];
  private paymentType: PaymentType;
  private discountPercent?: DiscountPercentage;

  constructor(
    client: Client, 
    itens: Item[], 
    paymentType: PaymentType, 
    discountPercentage: DiscountPercentage
  ) {
    this._client = client;
    this._itens = itens;
    this.paymentType = paymentType;
    this.discountPercent = discountPercentage;
  }

  get totalOrder(): number {
    const total = this._itens.reduce((acc, cur) => {
      return acc + cur.price;
    }, 0);
    return total;
  }

  get totalOrderWithDiscount(): number {
    const total = this.totalOrder;
    if (this.discountPercent) {
      return total - (total * this.discountPercent);
    }
    return total;
  }
}

const client1 = new Client('João');
const item1 = new Item('Batata frita', 10.00);
const item2 = new Item('Refrigerante', 5.00);
const order1 = new Order(client1, [item1, item2], PaymentType.DINHEIRO, DiscountPercentage["10%"]);
console.log(order1.totalOrder);
console.log(order1.totalOrderWithDiscount);