import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  createForm!: FormGroup;

  ngOnInit() {
    this.createForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required]),
    });
  }

  constructor(private router: Router, private firestore: Firestore) {}

  onSubmit(createForm: FormGroup) {
    console.log('Valid?', createForm.valid);
    this.router.navigate(['/success']);
    const collectionInstance = collection(
      this.firestore,
      'ecommerce/contact/form'
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
