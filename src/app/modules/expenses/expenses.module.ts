import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpensesRoutingModule } from './expenses-routing.module';
import { ExpensesListComponent } from './components/expenses-list/expenses-list.component';
import { UiExpenseComponent } from './components/ui-expense/ui-expense.component';


@NgModule({
  declarations: [
    ExpensesListComponent,
    UiExpenseComponent
  ],
  imports: [
    CommonModule,
    ExpensesRoutingModule
  ]
})
export class ExpensesModule { }
