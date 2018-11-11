import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dashboard-historical",
  templateUrl: "./dashboard-historical.component.html",
  styleUrls: ["./dashboard-historical.component.scss"]
})
export class DashboardHistoricalComponent implements OnInit {
  labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];

  datasets = [
    {
      backgroundColor: "#5DFF6C",
      borderColor: "#5DFF6C",
      data: [
        25,
        14.91,
        37.31,
        22.19,
        30.85,
        40.91,
        50.36,
        12.66,
        28.36,
        32.66,
        24.89,
        19.99
      ],
      label: "Outstanding",
      fill: false
    },
    {
      backgroundColor: "#A7F0FF",
      borderColor: "#A7F0FF",
      data: [
        25,
        24.91,
        47.31,
        32.19,
        50.85,
        20.91,
        30.36,
        12.66,
        28.36,
        32.66,
        24.89,
        19.99
      ],
      label: "Very Good",
      fill: false
    },
    {
      backgroundColor: "#A7F0FF",
      borderColor: "#A7F0FF",
      data: [
        25,
        14.91,
        27.31,
        22.19,
        40.85,
        30.91,
        20.36,
        16.66,
        21.36,
        38.66,
        21.89,
        12.99
      ],
      label: "Fairly",
      fill: false
    },
    {
      backgroundColor: "#f84459",
      borderColor: "#f84459",
      data: [
        25,
        4.91,
        7.31,
        2.19,
        6.85,
        9.91,
        3.36,
        6.66,
        5.36,
        8.66,
        4.89,
        2.99
      ],
      label: "Poor",
      fill: false
    }
  ];

  constructor() {}

  ngOnInit() {}
}
