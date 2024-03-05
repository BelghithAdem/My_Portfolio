import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
  });
  loading = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  sendEmail(e: Event) {
    if (this.contactForm.invalid) {
      return;
    }

    this.loading = true;

    const formData = {
      name: this.contactForm.value.name,
      email: this.contactForm.value.email,
      message: this.contactForm.value.message,
    };

    emailjs
    .send("service_drf3qdq","template_mqvl9qr")
      .then(
        (response: EmailJSResponseStatus) => {
          console.log('E-mail envoyé avec succès!', response);
          this.loading = false;
          this.contactForm.reset();
        },
        (error) => {
          console.error('Erreur lors de l\'envoi de l\'e-mail:', error);
          this.loading = false;
        }
      );
  }
  onSubmit() {}
}














