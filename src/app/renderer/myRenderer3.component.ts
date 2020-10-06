// Author: T4professor

import { Component } from "@angular/core";
import { ICellRendererAngularComp } from "ag-grid-angular";
import { ICellRendererParams, IAfterGuiAttachedParams } from "ag-grid";
import { SuppressKeyboardEventParams } from "ag-grid/dist/lib/entities/colDef";

@Component({
  selector: "app-myRenderer3",
  template: `
    <table>
      <tr>
        <td>
          {{ label }}
        </td>
      </tr>
      <tr>
        <td>
          <input
            type="text"
            [(ngModel)]="addr1"
            tabindex="101"
            (change)="onChange($event)"
          />
        </td>
      </tr>
      <tr>
        <td>
          <input
            type="text"
            [(ngModel)]="addr2"
            tabindex="102"
            (change)="onChange($event)"
          />
        </td>
      </tr>
    </table>
  `
})

// <tr>
// 	<td><input type="text" value="' + params.value[2] + '"></input></td>
// </tr>
export class MyRendererComponent3 implements ICellRendererAngularComp {
  params;
  label: string;
  addr1: string;
  addr2: string;

  agInit(params): void {
    this.params = params;
    this.label = this.params.value[0] || "";
    this.addr1 = this.params.value[1] || "";
    this.addr2 = this.params.value[2] || "";
  }

  refresh(params?: any): boolean {
    return true;
  }

  public onChange(event) {
    this.params.data[this.params.colDef.field][1] = this.addr1;
    this.params.data[this.params.colDef.field][2] = this.addr2;
    // alert(JSON.stringify(this.params.data[this.params.colDef.field]));
    console.log(JSON.stringify(this.params.data[this.params.colDef.field]));
  }
}
