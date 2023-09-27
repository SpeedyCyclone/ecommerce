import { Component } from '@angular/core';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { collection } from 'firebase/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  items$!: Observable<any>;
  constructor(private firestore: Firestore) {
    this.getData();
  }

  getData() {
    this.items$ = collectionData(
      collection(this.firestore, 'ecommerce/products/search'),
      { idField: 'id' }
    );
    this.items$.subscribe((ok) => {
      console.log(ok);
    });
  }
}
