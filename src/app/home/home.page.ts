import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  cardsList:any [] = [
    {
      imgsrc: "assets/imgs/prog-c-lang.png",
      title: "Online Courses",
      shortDesc: "Library of online courses, comes with open source content",
      link:"https://cprog.techskillo.com",
      buttonText: "Try Now"
    },
    {
      imgsrc: "assets/imgs/prog-c-lang.png",
      title: "Video Courses",
      shortDesc: "Learn from library of engaging video build with audio video tools",
      link:"https://cprog.techskillo.com",
      buttonText: "Try Now"
    },
    {
      imgsrc: "assets/imgs/prog-linux-device-drivers.png",
      title: "Offline Bootcamps",
      shortDesc: "Learn from our open source course content, practice at your own pace ",
      link:"https://ldd.techskillo.com",
      buttonText: "Try Now"
    },
    {
      imgsrc: "assets/imgs/prog-linux-device-drivers.png",
      title: "Coding Challenges",
      shortDesc: "Test your skills with out state of the art Coding Challenges",
      link:"https://ldd.techskillo.com",
      buttonText: "Try Now"
    }    
  ];

  constructor(private platform: Platform) {
    
  }

}
