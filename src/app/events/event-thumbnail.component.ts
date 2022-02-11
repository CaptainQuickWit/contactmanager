import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
    selector: 'event-thumbnail',
    template:`
    <div class = "container well hoverwell thumbnail">
        <h2>{{event.name}}</h2>
        <div> Date: {{event.date}}</div>
        <div> Time: {{event.time}}</div>
        <div> Price: \${{event.price}}</div>
        <div class="">
            <span> Location: {{event.location.address}}</span>
            <span>&nbsp;</span>
            <span class = "pad-left">{{event.location.city}}, {{event.location.country}}</span>
        </div>
        <button class="my-3 btn btn-primary" (click)="handleClickMe()">Click me!</button>
    </div>
    <hr>
    `,
    styles:[`
        .pad-left { margin-left: 10px; }
        .well div { color: #bbb; }
    `]
})
export class EventThumbnailComponent {

    @Input() event: any
    @Output() eventClick = new EventEmitter();

    someProperty:any = "some value"

    handleClickMe() {
        //console.log('clicked');   
        this.eventClick.emit(this.event.name);
    }

    logFoo(){
        console.log('logFoo');
    }
}


