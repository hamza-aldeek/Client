import { Component } from '@angular/core';
import { News } from "../../news/news";
import { Portfolio } from "../../portfolio/portfolio";
import { Resume } from "../../resume/resume";
import { Home } from "../../home/home";
import { Education } from "../../education/education";
import { Experience } from "../../experience/experience";

@Component({
  selector: 'app-main',
  imports: [News, Portfolio, Resume, Home, Education, Experience],
  templateUrl: './main.html',
  styleUrl: './main.css'
})
export class Main {

}
