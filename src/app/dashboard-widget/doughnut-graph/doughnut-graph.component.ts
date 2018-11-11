import { Component, Input, OnInit } from "@angular/core";
import { Chart } from "chart.js";

@Component({
  selector: "cdk-doughnut-graph",
  templateUrl: "./doughnut-graph.component.html",
  styleUrls: ["./doughnut-graph.component.scss"]
})
export class DoughnutGraphComponent implements OnInit {
  @Input() datasets;

  @Input() height;

  @Input() label;

  @Input() labels;

  // @ts-ignore
  graphId: string = _.uniqueId("doughnut-graph-graph");

  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.createDoughnutGraph();
    }, 500);
  }

  createDoughnutGraph() {
    new Chart(this.graphId, {
      type: "doughnut",
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
          display: true
        },
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
          filler: {
            propagate: false
          }
        },
        title: {
          display: true,
          text: this.label
        }
      }
    });
  }
}
