import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import * as $ from 'jquery';
@Component({
  selector: 'app-generate',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.scss']
})
export class GenerateComponent implements OnInit {

  title = '';
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe(queryParams => {
      this.title = queryParams.get("word")
      //this.title = 'test text';
      const getFontSize = (textLength) => {
        console.log(textLength);
        const baseSize = 35;
        if (textLength >= baseSize) {
          textLength = baseSize - 2;
          const fontSize = baseSize - textLength;
          return `${fontSize}vmax`;
        }
        const fontSize = baseSize - textLength;
        return `${fontSize}vmin`;
      }

      // const boxes = this.title.split(' ');

      // boxes.forEach(box => {
      //   console.log(box)
      //   $('.fittext').css('font-size', getFontSize(box.length));
      // });

      $('.fittext').css('font-size', getFontSize(this.title.length));

    });
  }
}