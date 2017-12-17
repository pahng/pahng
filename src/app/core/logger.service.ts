import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

  public log(message?: any, ...restOfMessages: any[]) {
    console.log(message, restOfMessages);
  }

  public error(message?: any, ...restOfMessages: any[]) {
    console.error(message, restOfMessages);
  }

}
