import { Component, OnInit } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { from, Observable, of } from "rxjs";
import { concatMap, delay, map, tap } from "rxjs/operators";
import * as firebase from "firebase";

@Component({
  selector: "app-dashboard-crm",
  templateUrl: "./dashboard-real-time.component.html",
  styleUrls: ["./dashboard-real-time.component.scss"]
})
export class DashboardRealTimeComponent implements OnInit {
  newTweets$ = from([
    {
      payload:
        "@Eurostar Btw @eurostar my default option on my account, as it has always been, is vegetarian so we shall see what happens on my return journey!",
      timestamp: firebase.firestore.Timestamp.now(),
      star: "20"
    },
    {
      payload:
        '"@Eurostar : what is the plan today with #9109 train departing Lille at 7.35 AM , please ?\n' +
        'I cant find it in your timetable : any issuesLabels please ?"',
      timestamp: firebase.firestore.Timestamp.now(),
      star: "2k"
    },
    {
      payload:
        'Paid more than 2 flights to take the "scenic" @Eurostar #ES9024 and these are the seats we got... Amazing start to vacation. What\'s more air cond does not work!',
      timestamp: firebase.firestore.Timestamp.now(),
      type: 2,
      star: "2"
    },
    {
      payload:
        "@Eurostar Hi @Eurostar we're sitting outside the channel tunnel now. When will we get moving again?",
      timestamp: firebase.firestore.Timestamp.now(),
      star: "6"
    }
  ]);

  dashCard = [
    {
      colorDark: "#2dee46",
      colorLight: "#2ed840",
      number: 124,
      title: "NEW ISSUES",
      icon: "trending_up"
    },
    {
      colorDark: "#dc354c",
      colorLight: "#fa405b",
      number: 6,
      title: "URGENT",
      icon: "new_releases"
    },
    {
      colorDark: "#e0c942",
      colorLight: "#ffdf4a",
      number: 36,
      title: "TECHNICAL WARNINGS",
      icon: "assignments"
    },
    {
      colorDark: "#66BB6A",
      colorLight: "#81C784",
      number: 561,
      title: "LAST 24H",
      icon: "assessment"
    }
  ];

  dailyDistributionLabels = [
    "6:00",
    "8:00",
    "10:00",
    "12:00",
    "14:00",
    "16:00",
    "18:00",
    "20:00",
    "22:00",
    "0:00",
    "2:00",
    "4:00"
  ];

  dailyDistributions = [
    {
      backgroundColor: "rgba(92, 107, 192, 0.36)",
      borderColor: "rgba(92, 107, 192,.5)",
      data: [
        96.97,
        88.91,
        99.31,
        122.19,
        130.85,
        140.91,
        150.36,
        92.66,
        78.36,
        42.66,
        34.89,
        59.99
      ],
      label: "Dataset",
      fill: "start"
    }
  ];

  issuesLabels = [
    "Wifi issue",
    "Sit damage",
    "On route inconvenience",
    "Others"
  ];

  issueTypes = [
    {
      data: [51, 9, 21, 13],
      backgroundColor: [
        "rgba(255, 99, 132,.7)",
        "rgba(92, 107, 192,.7)",
        "rgba(66, 165, 245,.7)",
        "rgba(38, 166, 154,.7)",
        "rgba(102, 187, 106,.7)"
      ]
    }
  ];

  issusByRouteLabels = ["#9158", "#9152", "#9151", "#9328"];

  issuesByRouteDatasets = [
    {
      data: [41, 19, 16, 18],
      backgroundColor: [
        "rgba(255, 99, 132,.7)",
        "rgba(92, 107, 192,.7)",
        "rgba(66, 165, 245,.7)",
        "rgba(38, 166, 154,.7)",
        "rgba(102, 187, 106,.7)"
      ]
    }
  ];

  happinessLabels = ["Outstanding", "Very Good", "Good", "Fairly"];

  happinessDatasets = [
    {
      data: [21, 39, 12, 22],
      backgroundColor: [
        "rgba(255, 99, 132,.7)",
        "rgba(92, 107, 192,.7)",
        "rgba(66, 165, 245,.7)",
        "rgba(38, 166, 154,.7)",
        "rgba(102, 187, 106,.7)"
      ]
    }
  ];

  tweets$: Observable<any[]>;

  tweets: any[];

  constructor(db: AngularFirestore) {
    this.tweets$ = db
      .collection("/events")
      .valueChanges()
      .pipe(
        tap(item => console.log(item)),
        map(items => {
          // @ts-ignore
          return _(items)
            .filter(item => {
              return (item as any).name === "tweet";
            })
            .orderBy("timestamp", ["desc"])
            .take(4)
            .value();
        }),
        tap(item => console.log(item))
      );
  }

  ngOnInit() {
    this.tweets$
      .pipe(
        tap(tweets => {
          this.tweets = tweets;
        })
      )
      .subscribe(tweets => {
        this.tweets = tweets;
      });

    this.newTweets$
      .pipe(concatMap(val => of(val).pipe(delay(1000))))
      .subscribe(item => {

        if(item.type === 2) {
          this.dashCard[1].number++;
        }

        // @ts-ignore
        this.tweets = _([item, ...this.tweets])
          .take(4)
          .value();
      });
  }
}
