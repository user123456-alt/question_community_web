import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserCenterRoutingModule } from './user-center-routing.module';
import { UserCenterComponent } from './user-center.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ModalModule } from './modal/modal.module';


@NgModule({
  declarations: [UserCenterComponent],
  imports: [
    CommonModule,
    UserCenterRoutingModule,
    IonicModule,
    FormsModule,
    ModalModule
  ]
})
export class UserCenterModule { }
