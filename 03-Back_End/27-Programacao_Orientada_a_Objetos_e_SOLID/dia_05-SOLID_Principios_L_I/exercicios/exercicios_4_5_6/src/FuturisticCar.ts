import { Drive, Fly } from './interfaces';

export default class FuturisticCar implements Drive, Fly{
  drive(): void { console.log('Drive a futuristic car'); }
  fly(): void { console.log('Flying a futuristic car'); }
}