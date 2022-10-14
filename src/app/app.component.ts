import { Component,OnInit,AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import {TreeNode} from 'primeng/api';
import { jsPDF } from 'jspdf';
// import * as $ from 'jquery';
import * as html2canvas from 'html2canvas';
declare const $: any;

declare global {
  interface JQuery {
    (selector: string): JQuery;
    orgchart(): JQuery;
  }
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('chartContainer',{static:false}) chartContainer!:ElementRef;
  constructor() {

  }
  ngAfterViewInit(): void {

  }

  show(){
    var datascource = {
      name: "Lao Lao",
      title: "general manager",
      children: [
        { name: "Bo Miao", title: "department manager" },
        {
          name: "Su Miao",
          title: "department manager",
          children: [
            { name: "Tie Hua", title: "senior engineer" },
            {
              name: "Hei Hei",
              title: "senior engineer",
              children: [
                { name: "Pang Pang", title: "engineer" },
                { name: "Xiang Xiang", title: "UE engineer" }
              ]
            }
          ]
        },
        { name: "Hong Miao", title: "department manager" },
        { name: "Chun Miao", title: "department manager" },

        { name: "Hong Miao", title: "department manager" },
        { name: "Chun Miao", title: "department manager" },
        { name: "Hong Miao", title: "department manager" },
        { name: "Chun Miao", title: "department manager" },
        { name: "Hong Miao", title: "department manager" },
        { name: "Chun Miao", title: "department manager" },
        { name: "Hong Miao", title: "department manager" },
        { name: "Chun Miao", title: "department manager" },
        { name: "Hong Miao", title: "department manager" },
        { name: "Chun Miao", title: "department manager" },
        { name: "Hong Miao", title: "department manager" },
        { name: "Chun Miao", title: "department manager" },
        { name: "Hong Miao", title: "department manager" },
        { name: "Chun Miao", title: "department manager" }
      ]
    };
    ( <any> $(this.chartContainer.nativeElement)).orgchart({
      data:datascource,
      visibleLevel: 2,
      nodeContent: "title",
      exportButton: true,
      exportFilename: "MyOrgChart",
      exportFileextension: "pdf"
    });
  }

}
