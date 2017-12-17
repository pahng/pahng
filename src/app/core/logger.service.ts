import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

  public log(message: string) {
    console.log(message);
  }

  public error(message: string) {
    console.error(message);
  }

}
