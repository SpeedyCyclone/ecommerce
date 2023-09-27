import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css'],
})
export class BuyComponent implements OnInit {
  id: any;
  final: any;
  gst: any;
  createForm!: FormGroup;
  ngOnInit() {
    this.createForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
    });
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.gst = this.id / 2;
    this.final = parseFloat(this.id) + parseFloat(this.gst);
  }

  constructor(
    private router: Router,
    private firestore: Firestore,
    private route: ActivatedRoute
  ) {}

  onSubmit(createForm: FormGroup) {
    console.log('Valid?', createForm.valid);
    this.router.navigate(['/success']);
    const collectionInstance = collection(this.firestore, 'ecommerce/buy/form');
    addDoc(collectionInstance, createForm.value)
      .then(() => {
        console.log('gg');
      })
      .catch((e) => {
        console.log(e);
      });
  }
}
