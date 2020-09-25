import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'widget-click';

  content: any = [
    {
      widgetID: "Ansj47A5",
      iframeLink: "https://unsplash.com/",
      websiteName: "Unsplash",
      views: 4200,
      creationDate: "2019-02-05",
    },

    {
      widgetID: "96ASvu7a",
      iframeLink: "https://imgur.com/",
      websiteName: "Imgur",
      views: 540000,
      creationDate: "2020-10-25",
    },

    {
      widgetID: "gGjh85Df",
      iframeLink: "https://dribbble.com/",
      websiteName: "Dribbble",
      views: 50400900,
      creationDate: "2018-08-17",
    },
  ]
}
