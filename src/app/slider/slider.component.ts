import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'Slider',
    templateUrl: './slider.component.html',
})

export class SliderComponent {
    public userType = localStorage.getItem("pemission");
}