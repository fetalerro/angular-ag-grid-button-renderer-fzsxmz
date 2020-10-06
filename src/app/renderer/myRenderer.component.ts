// Author: T4professor

import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams, IAfterGuiAttachedParams } from 'ag-grid';

@Component({
  selector: 'app-myRenderer',
  template: `
    <table>
    <tr>
        <td>20001</td>
        <td>ﾔﾏﾀﾞ ﾀﾛｳ　男</td>
    </tr>
    <tr>
        <td>昭和19年3月22日</td>
        <td>令和4年4月22日</td>
    </tr>
    <tr>
        <td>臨時</td>
        <td>臨時認知</td>
    </tr>
  </table>
    `
})

export class MyRendererComponent implements ICellRendererAngularComp {

  params;
  label: string;

  agInit(params): void {
    this.params = params;
    this.label = this.params.label || null;
  }

  refresh(params?: any): boolean {
    return true;
  }

  onClick($event) {
    if (this.params.onClick instanceof Function) {
      // put anything into params u want pass into parents component
      const params = {
        event: $event,
        rowData: this.params.node.data
        // ...something
      }
      this.params.onClick(params);

    }
  }
}