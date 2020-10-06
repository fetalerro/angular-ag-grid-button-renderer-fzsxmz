import {AfterViewInit, Component, ViewChild, ViewContainerRef} from "@angular/core";

import {ICellEditorAngularComp} from "ag-grid-angular";

@Component({
    selector: 'editor-cell',
    template: `
<table>
	<tr>
		<td>{{label}}</td>
	</tr>
	<tr>
		<td><input type="text" [(ngModel)]="addr1"/></td>
	</tr>
	<tr>
		<td><input type="text" [(ngModel)]="addr2"/></td>
	</tr>
</table>
    `

})

// <table>
// 	<tr>
// 		<td>{{label}}</td>
// 	</tr>
	// <tr>
	// 	<td><input type="text" [(ngModel)]="addr1"/></td>
	// </tr>
	// <tr>
	// 	<td><input type="text" [(ngModel)]="addr2"/></td>
	// </tr>
// </table>

export class MyCellEditor implements ICellEditorAngularComp {
    private params: any;
  label: string;
  addr1:string;
  addr2:string;


    agInit(params: any): void {
    this.params = params;
    this.label = this.params.value[0] || "";
    this.addr1 = this.params.value[1] || "";
    this.addr2 = this.params.value[2] || "";
    }

    getValue(): any {
        // return this.radioValue;
    }

    isPopup(): boolean {
        return false;
    }
    
    stopEdit() {
      // alert(`Value changed to: ${this.radioValue}`);
      this.params.api.stopEditing();
    }
}