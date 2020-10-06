import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AgGridModule } from 'ag-grid-angular';
import { ButtonRendererComponent } from './renderer/button-renderer.component';
import { MyRendererComponent } from './renderer/myRenderer.component';
import { MyRendererComponent2 } from './renderer/myRenderer2.component';
import { MyRendererComponent3 } from './renderer/myRenderer3.component';
import { MyCellEditor } from "./renderer/myCellEditor.component";
import { RadioButtonEditor } from "./renderer/radio-editor.component";



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AgGridModule.withComponents([ButtonRendererComponent,
    MyRendererComponent,
    MyRendererComponent2,
    MyRendererComponent3,
    MyCellEditor,
    RadioButtonEditor
    ])
  ],
  declarations: [AppComponent, HelloComponent,ButtonRendererComponent,MyRendererComponent,MyRendererComponent2,MyRendererComponent3,MyCellEditor,RadioButtonEditor],
  bootstrap: [AppComponent]
})
export class AppModule { }
