// Author: T4professor

import { Component } from "@angular/core";
import { ButtonRendererComponent } from "./renderer/button-renderer.component";
import { MyCellEditor } from "./renderer/myCellEditor.component";
import { MyRendererComponent } from "./renderer/myRenderer.component";
import { MyRendererComponent2 } from "./renderer/myRenderer2.component";
import { MyRendererComponent3 } from "./renderer/myRenderer3.component";
import { RadioButtonEditor } from "./renderer/radio-editor.component";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular 9";
  frameworkComponents: any;
  rowDataClicked1 = {};
  rowDataClicked2 = {};
  headerHeight: number;

  constructor() {
    this.frameworkComponents = {
      buttonRenderer: ButtonRendererComponent,
      myRenderer: MyRendererComponent,
      myRenderer2: MyRendererComponent2,
      myRenderer3: MyRendererComponent3,
      radioEditor: RadioButtonEditor,
      myCellEditor: MyCellEditor
    };
    this.headerHeight = 100;
  }

  columnDefs = [
    {
      headerName: "居所住所(CellRender)",
      field: "address",
      cellRenderer: "myRenderer3",
      autoHeight: true,
      width: 400
    },

    {
      headerName: "居所住所(CellEditor)",
      field: "address",
      // cellEditor: "myCellEditor",
      cellEditor: "radioEditor",
      editable: true,
      autoHeight: true,
      width: 400
    },
    {
      headerName: "ラジオボタンCellEditor",
      field: "reki",
      cellEditor: "radioEditor",
      editable: true,
      width: 280
    },
    {
      headerName: "テスト項目",
      cellRenderer: "buttonRenderer",
      cellRendererParams: {
        onClick: this.onBtnClick1.bind(this),
        label: "検索"
      },
      width: 190
    },
    {
      headerName: "登録番号",
      cellRenderer: "myRenderer",
      autoHeight: true,
      cellStyle: { color: "white", "background-color": "green" },
      width: 250
    },
    {
      headerName: "免許証番号",
      cellRenderer: "myRenderer2",

      autoHeight: true,
      cellStyle: { color: "black", "background-color": "pink" }
    },
    {
      headerName: "同日開催",
      resizable: true,
      sortable: true,
      cellRenderer: function(params) {
        var htmls = [];
        htmls.push('<table><tr><td><input type="checkbox"/></td></tr><tr><td>');
        htmls.push('  <select name="OS">    <option value="Win"></option>');
        htmls.push('    <option value="Mac">1:対象</option>');
        htmls.push('    <option value="Lin">2:除外</option>');
        htmls.push('    <option value="OTHER">3:保留</option>');
        htmls.push("  </select>");
        htmls.push("</td></tr><tr><td><BR></td></tr></table>");
        return htmls.join("");
      }
    },

    {
      headerName: "ラジオ(cellEditor)",
      field: "model",
      width: 190,
      cellEditor: "radioEditor",
      editable:true
    },

    {
      headerName: "Price",
      field: "price",
      width: 90,
      rowSpan: this.rowSpan
    }
  ];

  rowData = [
    {
      make: "Toyota",
      model: "Celica",
      price: 35000,
      address: ["東京都港区芝５－７－１", "○○マンション1", "１０１室"],
      reki: 1
    },
    {
      make: "Ford",
      model: "Mondeo",
      price: 35000,
      address: ["東京都港区芝５－７－２", "○○マンション2", "１０２室"],
      reki: 2
    },
    {
      make: "Porsche",
      model: "Boxter",
      price: 72000,
      address: ["東京都港区芝５－７－３", "○○マンション3", "１０３室"],
      reki: 1
    },
    {
      make: "Porsche",
      model: "Boxter",
      price: 72000,
      address: ["東京都港区芝５－７－１", "○○マンション3", "１０３室"],
      reki: 1
    }
  ];

  onBtnClick1(e) {
    this.rowDataClicked1 = e.rowData;
  }

  onBtnClick2(e) {
    this.rowDataClicked2 = e.rowData;
  }

  rowSpan(params) {
    // return 2;
  var price = params.data.price;
   console.log(price);
  if (price === 72000) {
    return 2;
  } else {
    return 1;
  }    
}
}
