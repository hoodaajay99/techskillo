import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyFooterComponent } from './my-footer/my-footer.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [MyFooterComponent],
  exports: [MyFooterComponent],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
