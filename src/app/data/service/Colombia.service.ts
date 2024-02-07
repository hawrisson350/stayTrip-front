import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Colombia } from '@data/schema/utils.enum';
import { Observable, shareReplay, map } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class ColombiaService {

    private _Colombia: Observable<Colombia[]> | undefined;

    constructor(private http: HttpClient) { }

    get Colombia(): Observable<Colombia[]> {
        if (!this._Colombia) {
            this._Colombia = this.http.get<Colombia[]>('assets/colombia.min.json')
                .pipe(
                    shareReplay(1)
                );
        }
        return this._Colombia;
    }

    getCityListByDepartment(department: any): Observable<string[]> {
        return this.Colombia.pipe(
            map(colombia => {
                const findDepartment = colombia.find(item => item.id === department);
                return findDepartment ? findDepartment.ciudades : [];
            })
        );
    }

}
