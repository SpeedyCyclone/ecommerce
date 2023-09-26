import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Firestore, collection, doc, getDoc } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  data: any;
  ngOnInit(): void {
    this.getData();
  }
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private firestore: Firestore,
    private router: Router
  ) {}

  async getData() {
    let id: any = this.route.snapshot.paramMap.get('id');
    const docRef = doc(this.firestore, 'ecommerce/products/search', id);
    const docSnap = await getDoc(docRef);
    this.data = docSnap.data();
    //console.log(this.data.details);

    try {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        //console.log(docSnap.data());
      } else {
        console.log('Document does not exist');
      }
    } catch (error) {
      console.log(error);
    }
  }

  navigateWithState() {}
}
