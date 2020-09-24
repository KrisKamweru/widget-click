import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-analytics-card',
  templateUrl: './analytics-card.component.html',
  styleUrls: ['./analytics-card.component.scss']
})
export class AnalyticsCardComponent implements OnInit {

  constructor() { }

  // url: string = "https://www.youtube.com/embed/s4BibernJxU";
  url: string = "https://www.google.com";
  showFrame: boolean = false;

  @Input('content') content: any = [
    {
      iframeLink: "",
      websiteName: "",
      views: 0,
    }
  ]

  ngOnInit(): void {
    this.content = [
      {
        iframeLink: "https://www.youtube.com/embed/s4BibernJxU",
        websiteName: "",
        views: 0,
      }
    ]

    this.iFrameToggle()
  }

  returnLink(item) {
    return item.iframeLink;
  }

  iFrameToggle() {
    this.showFrame = false;
    this.showFrame = true;
    console.log(this.url);
  }

}
