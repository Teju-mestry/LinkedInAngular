import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-item-list',
  templateUrl: './media-item-list.component.html',
  styleUrls: ['./media-item-list.component.css']
})
export class MediaItemListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  mediaItems = [
    {
      id: 1,
      name: 'Firebug',
      medium: 'Series',
      category: 'Science Fiction',
      year:2008,
      watchedOn: 2347987023,
      isFavourite: false
    },
    {
      id: 2,
      name: 'Nachos',
      medium: 'Series',
      category: 'Comedy',
      year:2010,
      watchedOn: 2347798023,
      isFavourite: false
    },
    {
      id: 3,
      name: 'Lovingly you',
      medium: 'Series',
      category: 'Love',
      year:2015,
      watchedOn: 23364987023,
      isFavourite: false
    },
    {
      id: 4,
      name: 'Yours',
      medium: 'Series',
      category: 'Fiction',
      year:2000,
      watchedOn: 23456457023,
      isFavourite: true
    },
    {
      id: 5,
      name: 'WalkTalk',
      medium: 'Series',
      category: 'Thriller',
      year:2012,
      watchedOn: 23456457023,
      isFavourite: false
    }
  ]

  onDeleteMediaItem(event){

  }
}
