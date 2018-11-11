import { Component, Input, OnInit } from "@angular/core";
import { Chart } from "chart.js";

@Component({
  selector: "cdk-line-graph",
  templateUrl: "./line-graph.component.html",
  styleUrls: ["./line-graph.component.scss"]
})
export class LineGraphComponent implements OnInit {
  @Input() labels;

  @Input() datasets;

  @Input() title;

  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.createLineChart();
    }, 500);
  }
  createLineChart() {
    new Chart("line-graph", {
      type: "line",
      data: {
        labels: this.labels,
        datasets: this.datasets
      },
      options: {
        elements: {
          line: {
            tension: 0.000001
          }
        },
        legend: {
          display: false
        },
        maintainAspectRatio: false,
        plugins: {
          filler: {
            propagate: false
          }
        },
        title: {
          display: true,
          text: this.title
        }
      }
    });
  }
}
