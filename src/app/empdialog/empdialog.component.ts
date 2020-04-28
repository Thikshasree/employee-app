import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
	selector: 'app-empdialog',
	templateUrl: './empdialog.component.html',
	styleUrls: ['./empdialog.component.css']
})
export class EmpdialogComponent implements OnInit {

	constructor(@Inject(MAT_DIALOG_DATA) public data:any) { }

	ngOnInit() {}
}
