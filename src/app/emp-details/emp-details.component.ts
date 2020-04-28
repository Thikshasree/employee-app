export interface EmployeeDetails {
	id:string,
	name: string;
	companyName: string;
	emailId: string;
	contactNo: string;
	designation: string;
}

const EMP_DATA: EmployeeDetails[] = [
{id:'1',name: 'Arun Prasad', companyName: 'Abc Technologies', emailId:'arun@gmail.com', contactNo:'7878787878', designation:'Associate Consultant'},
{id:'2',name: 'Lakshmi Agarwal', companyName: 'Xyz Technologies', emailId:'laksh@gmail.com', contactNo:'7454545456', designation:'Senior Consultant'}
];

import { Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import { EmpdialogComponent } from '../empdialog/empdialog.component';
import { ConfirmdialogComponent } from '../confirmdialog/confirmdialog.component';

@Component({
	selector: 'app-emp-details',
	templateUrl: './emp-details.component.html',
	styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent implements OnInit {

	displayedColumns: string[] = ['name', 'companyName', 'emailId', 'contactNo','designation','action'];
	dataSource = EMP_DATA;

	constructor(public dialog:MatDialog) { }

	ngOnInit() {
	}

	onClickDelete(empDetail){
		const dialogRef = this.dialog.open(ConfirmdialogComponent);

		dialogRef.afterClosed().subscribe(result => {
			if(result === "Yes"){
				this.dataSource = this.dataSource.filter(obj=>obj.id!==empDetail.id);
				this.dataSource.map((obj,index)=>obj.id=parseInt(index)+1);
			}
		});
	}

	onClickAdd(){
		const dialogRef = this.dialog.open(EmpdialogComponent,{
			height: '400px',
			width: '600px',
			data:{id:'',name: '', companyName: '', emailId:'', contactNo:'', designation:''}
		});

		dialogRef.afterClosed().subscribe(result => {
			if(result != "Cancel"){
				this.dataSource.push(result);
				this.dataSource=[...this.dataSource];
				this.dataSource.map((obj,index)=>obj.id=parseInt(index)+1);
			}
		});
	}

	onClickEdit(empDetail){
		const dialogRef = this.dialog.open(EmpdialogComponent,{
			height: '400px',
			width: '600px',
			data:{...empDetail}
		});

		dialogRef.afterClosed().subscribe(result => {
			if(result != "Cancel"){
				var index = this.dataSource.findIndex(x => x.id === empDetail.id);
				this.dataSource[index]=result;
				this.dataSource=[...this.dataSource];
			}
		});
	}


}
