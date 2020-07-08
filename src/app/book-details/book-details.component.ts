import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookDetailsService } from '../book-details.service';
import { BookDetail } from './detail';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  constructor(private Activaterroute : ActivatedRoute,
              private bookDetailsService : BookDetailsService ) { }

              sub;
              id: any;
              bookdetails: BookDetail;

  ngOnInit(): void {

    this.sub = this.Activaterroute.paramMap.subscribe(param =>{
      this.id = param.get('id');
      this.bookdetails = this.bookDetailsService.getBook(this.id);
      // this.bookdetails = bookdetails.find(b => b.id == this.id);

    });
  }

}
