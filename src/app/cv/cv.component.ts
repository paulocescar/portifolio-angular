import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {
  constructor() { }
    
  ngOnInit() {
    this.startTypingAnimation("PHP v: 7.* - 8.*", "php-version");
    this.startTypingAnimation("5 anos - Laravel", "php-tecs-1");
    this.startTypingAnimation("2 anos - Lumen", "php-tecs-2");
    this.startTypingAnimation("2 anos - Sympony", "php-tecs-3");

    this.startTypingAnimation("Node v: 12.* - 17.*", "node-version");
    this.startTypingAnimation("2 anos - Express", "node-tecs-1");
    this.startTypingAnimation("1 ano  - NestJS", "node-tecs-2");

    this.startTypingAnimation("Angular v: 5.* - 13.*", "angular-version");
    this.startTypingAnimation("3 anos - Angular", "angular-tecs-1");

    this.startTypingAnimation("React v: 8.* - 17.*", "react-version");
    this.startTypingAnimation("2 anos - React", "react-tecs-1");

    this.startTypingAnimation("Typescript v: 3.* - 5.*", "typescript-version");
    this.startTypingAnimation("3 anos - Typescript", "typescript-tecs-1");

    this.startTypingAnimation("Javascript v: ES6", "javascript-version");
    this.startTypingAnimation("5 anos - Javascript", "javascript-tecs-1");

    this.startTypingAnimation("Docker v: 23.0.3", "docker-version");
    this.startTypingAnimation("2 anos - Docker", "docker-tecs-1");

    this.startTypingAnimation("AWS", "AWS-version");
    this.startTypingAnimation("1 anos - AWS", "AWS-tecs-1");

    this.startTypingAnimation("Azure", "azure-version");
    this.startTypingAnimation("1 anos - Azure", "azure-tecs-1");

    this.startTypingAnimation("MySQL v: 5.* - 8.*", "mysql-version");
    this.startTypingAnimation("5 anos - MySQL", "mysql-tecs-1");

    this.startTypingAnimation("Postgres v: 5.* - 8.*", "postgres-version");
    this.startTypingAnimation("2 anos - Postgres", "postgres-tecs-1");

    this.startTypingAnimation("MongoDB v: 5.* - 8.*", "mongodb-version");
    this.startTypingAnimation("2 anos - MongoDB", "mongodb-tecs-1");

    this.startTypingAnimation("HTML v: 5", "html-version");
    this.startTypingAnimation("5 anos - HTML5", "html-tecs-1");

    this.startTypingAnimation("CSS: 3", "css-version");
    this.startTypingAnimation("5 anos - CSS3", "css-tecs-1");
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
