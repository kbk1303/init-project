import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { delay } from 'rxjs';
import { ObservableRowData } from 'src/app/interfaces/observable-row-data';
import { DataProviderService } from 'src/app/services/data-provider.service';

@Component({
  selector: 'app-observable-table-data',
  templateUrl: './observable-table-data.component.html',
  styleUrls: ['./observable-table-data.component.css']
})
export class ObservableTableDataComponent implements OnInit {
  id: number = 1;
  counter = 0;
  setId: number | any;
  displayedColumns: string[] = ['id', 'name', 'imageUrl'];
  public dataSource =  new MatTableDataSource<ObservableRowData>();

  constructor(private dataProvider: DataProviderService) {
    this.dataProvider.getAllData().subscribe((data: ObservableRowData[]) => {
      this.dataSource.data = data;
    });
    
    this.setId = setInterval(() => {
      this.dataProvider.addData({id: ''+this.id, name: 'name '+this.id, imageUrl: 'dæfljæglkfælg'+ ' '+ this.id});  
      this.id++;  
      this.counter++;
      if(this.counter > 10) {
        clearInterval(this.setId);
      }
    }, 3000);
   

   }

  ngOnInit(): void {
  }
  clickedRow(row: ObservableRowData): void {
    console.log('row', row);
  }
}
