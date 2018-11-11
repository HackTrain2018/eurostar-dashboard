import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "tweets",
  templateUrl: "./tweets.component.html",
  styleUrls: ["./tweets.component.scss"]
})
export class TweetsComponent implements OnInit {
  public showLoader: boolean = false;

  @Input() events;

  ngOnInit() {}

  reload() {
    this.showLoader = true;
    setTimeout(() => {
      this.showLoader = false;
    }, 2000);
  }
}
