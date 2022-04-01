import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proposals',
  templateUrl: './proposals.component.html',
  styleUrls: ['./proposals.component.scss'],
})
export class ProposalsComponent implements OnInit {
  names = ['Friend1', 'Friend2', 'Friend3'];
  texts = [
    'This is a photo of a bay.',
    'This is a photo of a meadow.',
    'This is a photo of leaves.',
  ];
  images = [
    'https://ik.imagekit.io/2/photos/img/01.jpg',
    'https://ik.imagekit.io/2/photos/img/02.jpg',
    'https://ik.imagekit.io/2/photos/img/07.jpg',
  ];

  constructor() {}

  ngOnInit(): void {}
}
