import { Component, Input, OnInit } from '@angular/core';
import { FriendService } from '../friend.service';

@Component({
  selector: 'app-profile-row',
  templateUrl: './profile-row.component.html',
  styleUrls: ['./profile-row.component.scss'],
})
export class ProfileRowComponent implements OnInit {
  @Input() name: string = 'Bay';
  @Input() img: string = 'https://ik.imagekit.io/2/photos/img/01.jpg';
  @Input() description: string = 'This is a photo of a bay.';
  @Input() canFollow = true;
  constructor(public fs: FriendService) {}

  ngOnInit(): void {}
}
