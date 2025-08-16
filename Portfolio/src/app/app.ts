import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Main } from "./Pages/main/main";
import { Footer } from "./footer/footer";
import { MobileMenu } from "./mobile-menu/mobile-menu";
import { Header } from "./header/header";
 

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, MobileMenu, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Portfolio');
}
