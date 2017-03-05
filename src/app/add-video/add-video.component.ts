import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MediaService } from './../services/media.service';
import { VIDEO, CATEGORY } from './../models/index';

@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.css']
})
export class AddVideoComponent implements OnInit {

  private videos: VIDEO[];

  constructor(private mediaService:MediaService, private router:Router) { }

  ngOnInit() {

  }

  private addMovie(e) {
    let title = e['title'].value;
    let description = e['description'].value;
    let poster = e['poster'].value;
    let link = e['link'].value;
    let category = e['category'].value;
    let payable = e['payable'].checked;
    category = parseInt(category);

    let video = new VIDEO( title, description, category, payable, 0, link, poster );

    this.mediaService.addNewVideo(video);

    this.router.navigate(['/start']);
  }
}
