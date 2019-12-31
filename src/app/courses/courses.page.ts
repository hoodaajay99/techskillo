import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.page.html',
  styleUrls: ['./courses.page.scss'],
})
export class CoursesPage implements OnInit {

  coursesList:any [] = [
    {
      imgsrc: "assets/imgs/prog-c-lang.png",
      title: "Programming in C Language",
      shortDesc: "Learn C Programming from Beginners to Advanced Course. This tutorial does not require any prior programming experience.",
      link:"https://cprog.techskillo.com"
    },
    {
      imgsrc: "assets/imgs/prog-linux-device-drivers.png",
      title: "Linux Kernel and Device Drivers",
      shortDesc: "Learn Linux Kernel Internals and Device Drivers, including Kernel Modules, Character Drivers, Network Drivers",
      link:"https://ldd.techskillo.com"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
