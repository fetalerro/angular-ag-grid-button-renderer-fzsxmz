// Author: T4professor

import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams, IAfterGuiAttachedParams } from 'ag-grid';

@Component({
  selector: 'app-myRenderer',
  template: `
<table>
    <tr>
        <td><a href="#">458704016320</a></td>
        <td><BR></td>
    </tr>
    <tr>
        <td>信号（赤色等）</td>
        <td><BR></td>
    </tr>
    <tr>
        <td><BR></td>
        <td>令和2年6月28日</td>
    </tr>
</table>
    `
})

export class MyRendererComponent2 implements ICellRendererAngularComp {

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