import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Calculation, NPVParameter } from '../models/npv';

@Injectable({
    providedIn: 'root'
})
export class NpvService {
    public apiPath = 'https://localhost:44380/';

    constructor(private http: HttpClient) { }

    calculate(parameter: NPVParameter): Observable<Calculation> {
        return this.http.post<Calculation>(this.apiPath + 'api/npv/calculation', parameter );
    }
}
