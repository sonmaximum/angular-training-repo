import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

import { Payee } from "./payees-types";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class PayeesDaoService {
  baseUrl = "http://localhost:8000/api/v1/banking/payees";

  constructor(private client: HttpClient) {}

  getPayees(): Observable<Payee[]> {
    return this.client
      .get<Payee[]>(this.baseUrl)
      .pipe(catchError(this.handleError));
  }

  getPayeeById(id: string): Observable<Payee> {
    return this.client
      .get<Payee>(`${this.baseUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    const boringError = {
      message: "Error in the DAO.  Please try again."
    };

    return throwError(boringError);
  }
}
