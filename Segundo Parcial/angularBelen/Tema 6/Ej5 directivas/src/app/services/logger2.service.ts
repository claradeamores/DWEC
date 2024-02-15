import { Injectable } from '@angular/core';

@Injectable()
export class Logger2 {
  log(msg: any) {
    const fecha = new Date().toISOString();
    console.log(`${fecha} INFO ${msg}`);
  }
  error(msg: any) {
    const fecha = new Date().toISOString();
    console.error(`${fecha} ERROR ${msg}`);
  }
  warn(msg: any) {
    const fecha = new Date().toISOString();
    console.warn(`${fecha} WARN ${msg}`);
  }
}
