import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {
  constructor() { }
    
  ngOnInit() {
    this.startTypingAnimation("version: 7.* - 8.*", "php-version");
    this.startTypingAnimation("5 anos - Laravel", "php-tecs-1");
    this.startTypingAnimation("2 anos - Lumen", "php-tecs-2");
    this.startTypingAnimation("2 anos - Sympony", "php-tecs-3");

    this.startTypingAnimation("version: 12.* - 17.*", "node-version");
    this.startTypingAnimation("2 anos - Express", "node-tecs-1");
    this.startTypingAnimation("1 ano  - NestJS", "node-tecs-2");

    this.startTypingAnimation("version: 5.* - 13.*", "angular-version");
    this.startTypingAnimation("3 anos - Angular", "angular-tecs-1");

    this.startTypingAnimation("version: 8.* - 17.*", "react-version");
    this.startTypingAnimation("2 anos - React", "react-tecs-1");
    this.startTypingAnimation("2 anos - React-Express", "react-tecs-2");
  }

  startTypingAnimation(texto: string = "", idElement: string = "") {
    let i = 0;
    const min = 100;
    const max = 500;

    const randomInteger = Math.floor(Math.random() * (max - min)) + min;
    const interval = setInterval(() => {
      if (i < texto.length) {
        this.typeWriter(i, texto, idElement);
        i++;
      } else {
        clearInterval(interval);
      }
    }, randomInteger);
  }


  typeWriter(textIndex: number = 0, txt:string = "",idElement: string = ""): void {
      (<HTMLInputElement>document.getElementById(idElement)).innerHTML += txt.charAt(textIndex);
  }

}
