import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

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
     })
  }
}