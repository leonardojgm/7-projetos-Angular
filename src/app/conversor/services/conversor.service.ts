import { Injectable } from '@angular/core';
// Importamos o HttpClient ao invés do Http para o Angular 7
//import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Conversao, ConversaoResponse } from '../models';

@Injectable()
export class ConversorService {
  //Nova url do fixer.io, que adiciona o parâmetro access_key, que é a chave de autenticação
  //private readonly BASE_URL = "http://api.fixer.io/latest";
  private readonly BASE_URL = "http://data.fixer.io/api/latest?access_key=0138904fb6412bdba3aafede67e6c015";

  constructor(private http: HttpClient) {}

  /**
   * Realiza a chamada para a API de conversão de moedas.
   *
   * @param conversao Conversao
   * @return Observable<ConversaoResponse>
   */
  converter(conversao: Conversao): Observable<any> {
    //Na linha abaixo altere a '?' por '&'
    let params = `&base=${conversao.moedaDe}&symbols=${conversao.moedaPara}`;

    return this.http.get(this.BASE_URL + params);
      // No Angular 6 as duas próximas linha não são mais necessárias
      //.map(response => response.json() as ConversaoResponse)
      //.catch(error => Observable.throw(error));
  }

  /**
   * Retorna a cotação para dado uma response.
   *
   * @param conversaoResponse ConversaoResponse
   * @param conversao Conversao
   * @return number
   */
  cotacaoPara(conversaoResponse: ConversaoResponse, conversao: Conversao): number {
    if (conversaoResponse === undefined) {
      return 0;
    }

    return conversaoResponse.rates[conversao.moedaPara];
  }

  /**
   * Retorna a cotação de dado uma response.
   *
   * @param conversaoResponse ConversaoResponse
   * @param conversao conversao
   * @return string
   */
  cotacaoDe(conversaoResponse: ConversaoResponse, conversao: Conversao): string {
    if (conversaoResponse === undefined) {
      return '0';
    }

    return (1 / conversaoResponse.rates[conversao.moedaPara]).toFixed(4);
  }

  /**
   * Retorna a data da cotação dado uma response.
   *
   * @param conversaoResponse ConversaoResponse
   * @return string
   */
  dataCotacao(conversaoResponse: ConversaoResponse): string {
    if (conversaoResponse === undefined) {
      return '';
    }

    return conversaoResponse.date;
  }
}
