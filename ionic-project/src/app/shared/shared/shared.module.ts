import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { IonicModule } from '@ionic/angular';
import { ModalComponent } from '../modal/modal.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    ModalComponent
  ],
  exports: [HeaderComponent,
  ModalComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
    
  ]
})
export class SharedModule { }
