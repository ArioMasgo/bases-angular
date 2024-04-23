import { NgModule } from '@angular/core';
import { CounterComponent } from './component/counter/counter.componet';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations:[
        CounterComponent
    ],exports:[
        CounterComponent
    ],imports:[
        CommonModule
    ]
})
export class CounterModule{

}