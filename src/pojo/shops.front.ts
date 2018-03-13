import { IShopBack } from '../services.back';
import { IFruitFront, FruitFront, fruitsMapper } from './fruits.front';

// --- Frontend shop interface ---

export interface IShopFront {
  id: number;
  name: string;
  fruits: IFruitFront[];
}

// --- Frontend shop class ---

export class ShopFront {
  constructor(public shop: IShopFront) {}

  showcase() {
    console.log(`\nAt "${this.shop.name}", you will find:`);
    this.shop.fruits.forEach(fruit => {
      console.log(new FruitFront(fruit).description());
    })
  }
}

// --- Frontend shop mapper ---

export const shopsMapper = (shopBack: IShopBack): IShopFront => ({
  id: shopBack.id,
  name: shopBack.name, 
  fruits: shopBack.fruits.map(fruitBack => fruitsMapper(fruitBack))
});
