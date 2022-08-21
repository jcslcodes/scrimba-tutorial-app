import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersComponent }  from './customers.component';
import {CustomersListComponent} from "./customers-list/customers-list.component";
import {FilterTextboxComponent} from "./customers-list/filter-textbox.component";
import {SharedModule} from "../shared/shared.module";
import {FormsModule} from "@angular/forms";
import {CustomersRoutingModule} from "./customers-routing.module";


@NgModule({
  imports: [CommonModule, SharedModule, FormsModule, CustomersRoutingModule],
  exports: [
    CustomersComponent
  ],
  declarations: [CustomersComponent, CustomersListComponent, FilterTextboxComponent]
})
export class CustomersModule { }
