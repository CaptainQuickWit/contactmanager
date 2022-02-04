import { Component, Input } from '@angular/core'

@Component({
    selector: 'event-thumbnail',
    template:`
    <div class = "well hoverwell thumbnail">
    <h1>Upcoming Angualr Events</h1>
    <div>
        <h2>{{event.name}}</h2>
        <div class = "text-info bg-dark"> Date: {{event.date}}</div>
        <div> Time: {{event.time}}</div>
        <div> Price: \${{event.price}}</div>
        <div class="well hoverwell thumbnail bg-info">
            <span class = "text-dark">Location: {{event.location.address}}</span>
            <span>&nbsp;</span>
            <span>{{event.location.city}}, {{event.location.country}}</span>
        </div>
    </div>
    <hr>
    
 </div>
    `
})
export class EventThumbnailComponent {
    @Input() event: any
}