import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-footer',
  templateUrl: './my-footer.component.html',
  styleUrls: ['./my-footer.component.scss'],
})
export class MyFooterComponent implements OnInit {

  footer: any[] = [
    // Row1
    {
      heading: "TECH SKILLO",
      items: [
        {
          title: "Courses",
          link: ""
        },
        {
          title: "Bundles",
          link: ""
        },
        {
          title: "Android App",
          link: ""
        },
        {
          title: "iOS App",
          link: ""
        },
        {
          title: "Feature Request",
          link: ""
        },
        {
          title: "Interships",
          link: ""
        }
      ]
    },
    // Row2
    {
      heading: "COMPANY",
      items: [
        {
          title: "About Us",
          link: ""
        },
        {
          title: "Terms",
          link: ""
        },
        {
          title: "Privacy Policy",
          link: ""
        },
        {
          title: "Pricing Policy",
          link: ""
        },
        {
          title: "SiteMap",
          link: ""
        },
        {
          title: "Contact Us",
          link: ""
        }
      ]
    },
    // Row3
    {
      heading: "COURSES",
      items: [
        {
          title: "C Programming",
          link: ""
        },
        {
          title: "Linux Kernel",
          link: ""
        },
        {
          title: "Device Drivers",
          link: ""
        },
        {
          title: "Angular",
          link: ""
        },
        {
          title: "Ionic Framework",
          link: ""
        },
        {
          title: "More Courses",
          link: ""
        }
      ]
    },

    // Row4
    {
      heading: "LINKS",
      items: [
        {
          title: "Careers",
          link: ""
        },
        {
          title: "Partners",
          link: ""
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit() {}

  


}
