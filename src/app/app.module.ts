import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BlockchainComponent } from './blockchain/blockchain.component';

//added for ngrxstore
import { StoreModule } from '@ngrx/store';
import { addCoinReducer } from './reducers/blockchain.reducer';

//added for validation
import { ReactiveFormsModule } from '@angular/forms';
import { DisplayComponent } from './display/display.component';


@NgModule({
  declarations: [
    AppComponent,
    BlockchainComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({blockchain: addCoinReducer}),
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
