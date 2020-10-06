import {AfterViewInit, Component, ViewChild, ViewContainerRef} from "@angular/core";

import {ICellEditorAngularComp} from "ag-grid-angular";

@Component({
    selector: 'editor-cell',
    template: `
    <div class="radio-container">
      
        <input type="radio" [value]="1" id="radioOne"   [(ngModel)]="radioValue" (change)="stopEdit()">西暦
      
        <input type="radio" [value]="2" id="radioTwo"   [(ngModel)]="radioValue" (change)="stopEdit()">和暦
      
  
    </div>
    `,
    styles: [`
    input[type="radio"]{
      marging:10px;
    }
    `]
})

export class RadioButtonEditor implements ICellEditorAngularComp {
    private params: any;

    public radioValue: number;;


    agInit(params: any): void {
        this.params = params;
        this.radioValue = params.value;
    }

    getValue(): any {
        return this.radioValue;
    }

    isPopup(): boolean {
        return true;
    }
    
    stopEdit() {
      alert(`Value changed to: ${this.radioValue}`);
      this.params.api.stopEditing();
    }
}