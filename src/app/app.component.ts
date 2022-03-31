import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  postTexts = [
    'This is a photo of a bay.',
    'This is a photo of a meadow.',
    'This is a photo of leaves.',
  ];

  postImg = [
    'https://ik.imagekit.io/2/photos/img/01.jpg',
    'https://ik.imagekit.io/2/photos/img/02.jpg',
    'https://ik.imagekit.io/2/photos/img/07.jpg',
  ];

  buttonClicked() {
    alert('This is a test!');
  }
 
}
