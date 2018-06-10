import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

import { apiConfig } from '@app/app.config';
import { Transaction, FilterParam } from '@app/shared/models';

@Injectable()
export class DataService {
  debounceTime = 1000;
  getTransactionsURL: string = apiConfig.transaction_url;

  constructor(private httpClient: HttpClient) {}

  getTranscations(filterParam: FilterParam) {
    if (filterParam) {
      this.getTransactionsURL = apiConfig.transaction_url + `?${filterParam}`
    }

    console.log(this.getTransactionsURL);

    return this.httpClient.get(this.getTransactionsURL).pipe(
      map((response: Response) => {
        const data: any = response;

        const transactions: Transaction = data.map(transaction => {
          return {
            id: transaction.id,
            action: transaction.action,
            amount: transaction.amount,
            brandId: transaction.brandId,
            currencyCode: transaction.currencyCode,
            trackingCode: transaction.trackingCode,
            card: {
              expiryMonth: transaction.card.expiryMonth,
              expiryYear: transaction.card.expiryYear,
              firstSixDigits: transaction.card.firstSixDigits,
              lastFourDigits: transaction.card.lastFourDigits,
              holderName: transaction.card.holderName
            }
          };
        });

        return transactions;
      })
    );
  }
}