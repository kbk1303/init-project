import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ObservableRowData } from '../interfaces/observable-row-data';

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {

  private container = Array<ObservableRowData>();

  private datacontainer$ = new BehaviorSubject<ObservableRowData[]>([]);
  private data$: Observable<ObservableRowData[]> = this.datacontainer$.asObservable();

  constructor() { 
    if(this.container.length == 0) {
      this.datacontainer$.next(this.container);
    }
  }

  addData(data: ObservableRowData): void {
    this.container.push(data);
    this.datacontainer$.next(this.container);
  }

  getAllData(): Observable<ObservableRowData[]> {
    return this.data$;
  }
}
