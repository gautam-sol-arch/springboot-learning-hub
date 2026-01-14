import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Home} from "./pages/home/home";
import {About} from "./pages/about/about";
import {Header} from "./layout/header/header";
import {Footer} from "./layout/footer/footer";
import {Blog} from "./pages/blog/blog";
import {Contact} from "./pages/contact/contact";
import {Courses} from "./pages/courses/courses";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Home,About,Header,Footer,Blog,Contact,Courses],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('springboot-learning-hub');
}
