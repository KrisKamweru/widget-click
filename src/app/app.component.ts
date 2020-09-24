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
      iframeLink: "https://unsplash.com/",
      websiteName: "Unsplash",
      views: 4200,
    },

    {
      iframeLink: "https://imgur.com/",
      websiteName: "Imgur",
      views: 540000,
    },

    {
      iframeLink: "https://dribbble.com/",
      websiteName: "Dribble",
      views: 50400900,
    },
  ]
}
