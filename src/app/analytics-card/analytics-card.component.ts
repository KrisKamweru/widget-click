import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-analytics-card',
  templateUrl: './analytics-card.component.html',
  styleUrls: ['./analytics-card.component.scss']
})
export class AnalyticsCardComponent implements OnInit {

  constructor() { }

  /*
  Each card is populated with data from the list of objects, 'content'
  Each object contains 3 fields, namely iframeLink, which is the link for the iFrame, 
    websiteName, and views.
  Populate accordingly
  */
  
  @Input('content') content: any = [
    {
      widgetID: " ",
      iframeLink: " ",
      websiteName: " ",
      views: 0,
      creationDate: " "
    }
  ]


  /* 
  Emitter that emits the json data of the card clicked for further use
  */
  @Output('widget') widget = new EventEmitter();

  ngOnInit(): void {
    // for (let item of this.content) {
    //   item.iframeLink = "https://www.youtube.com/embed/s4BibernJxU";
    // }
  }

  log(item: any) {
    console.log(item);
    this.widget.emit(item.widgetID);
  }

}
