import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RowElement } from 'src/app/interfaces/row-element';

@Component({
  selector: 'app-row-detail-dialog',
  templateUrl: './row-detail-dialog.component.html',
  styleUrls: ['./row-detail-dialog.component.css']
})
export class RowDetailDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: RowElement) { }

  ngOnInit(): void {
  }

}
