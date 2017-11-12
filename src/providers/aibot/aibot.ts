import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

declare function require(name:string);

var apiai = require('apiai');

var app = apiai("58c35b1299894216b20b0acaf8752817");






/*
  Generated class for the AibotProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AibotProvider {
  constructor(public http: Http) {
    console.log('Hello AibotProvider Provider');
  }
    getResponse(text:String){
      var request = app.textRequest(text, {
          sessionId: '1234'
      });
      request.on('response', function(response) {
          console.log(response);
      });

      request.on('error', function(error) {
          console.log(error);
      });

      request.end();
      }
};
