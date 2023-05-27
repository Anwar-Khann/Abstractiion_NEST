import { Injectable } from '@nestjs/common';
import { privateDecrypt } from 'crypto';

@Injectable()
export abstract class Items{
  abstract Todo();
  buynow(){
    console.log("buy clothes")
    console.log("buy slipper's")
    this.Todo();
  }
}

@Injectable()
export class DoThis extends Items{
  Todo() {
    console.log("check wallet before leaving home")
    console.log("make sure to refuel the bike when returning")
  }
}


@Injectable()
export class Onarrival extends Items{
  Todo() {
    console.log("park the bike/vehicle inside of a garrage")
    console.log("sanitize your hands")
    console.log("check the lock of garage before entering home");
  }
}
@Injectable()
export class AppService {
  constructor(
    private readonly DoThis : DoThis,
    private readonly Onarrival :Onarrival
  ){}
  start(){
    this.DoThis.Todo(),
    this.Onarrival.buynow()
  }
}
