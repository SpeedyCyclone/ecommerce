import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  createForm!: FormGroup;

  constructor(private router: Router, private firestore: Firestore) {}

  ngOnInit() {
    this.createForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      author: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required, Validators.min(1)]),
      delivery: new FormControl('', [Validators.required]),
      details: new FormControl('', [Validators.required]),
    });
  }

  onSubmit(createForm: FormGroup) {
    console.log('Valid?', createForm.valid);
    this.router.navigate(['/success']);

    const collectionInstance = collection(
      this.firestore,
      'ecommerce/products/search'
    );
    addDoc(collectionInstance, createForm.value)
      .then(() => {
        console.log('gg');
      })
      .catch((e) => {
        console.log(e);
      });
  }
}
