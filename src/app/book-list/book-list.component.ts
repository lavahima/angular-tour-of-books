import { Component, OnInit } from '@angular/core';
import {BOOKS} from './data-booklist'

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  constructor() { }

  book = BOOKS;
  ngOnInit(): void {
  }

}
