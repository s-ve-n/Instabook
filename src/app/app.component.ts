import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  postTexts = [
    'This is a photo of a bay.',
    'This is a photo of a beach.',
    'This is a photo of a mountain.',
    'This is a photo of a lake.',
  ];

  postImg = [
    'https://ik.imagekit.io/2/photos/img/01.jpg',
    'https://ik.imagekit.io/2/photos/img/02.jpg',
    'https://ik.imagekit.io/2/photos/img/03.jpg',
    'https://ik.imagekit.io/2/photos/img/04.jpg',
  ];

  buttonClicked() {
    alert('This is a test!');
  }
}
