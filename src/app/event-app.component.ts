import { Component } from '@angular/core';

@Component({
  selector: 'events-app',
  //templateUrl: './app.component.html',
  template:`<events-list></events-list>
  `,
  /**
   * Style url will be referenced at a later time
   */
  //styleUrls: ['./event-app.component.css']
})
export class EventsAppComponent {
  title = 'eventscheduler';
}
