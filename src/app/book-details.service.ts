import { Injectable } from '@angular/core';
import { BookDetail } from './book-details/detail';


@Injectable({
  providedIn: 'root'
})
export class BookDetailsService {

  constructor() { }

  public getBooks() {

    let bookDetail: BookDetail[];

    bookDetail = [
      { id: 1, name: 'The Kite Runner', author: ' Khaled Hosseini', genre: 'Historical Fiction', numberofPages: 372, rating: 'Execllent' },
      { id: 2, name: 'The Book Thief', author: ' Markus Zusak', genre: 'Historical Fiction', numberofPages: 584, rating: 'Execllent' },
      { id: 3, name: 'Thousand Splendid Sun', author: 'Khaled Hosseini', genre: 'Domestic Fiction', numberofPages: 384, rating: 'Good' },
      { id: 4, name: 'The Godfather', author: '‎Mario Puzo', genre: 'crime nove', numberofPages: 700, rating: 'Execllent' },
      { id: 5, name: 'The Boy in the Striped Pyjamas', author: 'John Boyne', genre: 'Historical drama', numberofPages: 216, rating: 'Good' },
      { id: 6, name: 'Sapiens', author: 'Yuval Noah Harari', genre: 'Non-fiction', numberofPages: 443, rating: 'Best' },
      { id: 7, name: 'Angels and Demons', author: ' Dan Brown', genre: 'Conspiracy fiction', numberofPages: 616, rating: 'Execllent' },
      { id: 8, name: 'Looking for Alaska', author: 'John Green', genre: 'Young adult fiction', numberofPages: 297, rating: 'Good' },
      { id: 9, name: 'Hippie', author: 'Paulo Coelho', genre: 'Biographical Fiction', numberofPages: 400, rating: 'Average' },
      { id: 10, name: 'Faults in your star', author: ' John Green', genre: 'Romance novel', numberofPages: 313, rating: 'Good' },
    ]

    return bookDetail;
  }

  public getBook(id) {
    let bookDetail: BookDetail[] = this.getBooks();
    return bookDetail.find(b => b.id == id);
  }
}
