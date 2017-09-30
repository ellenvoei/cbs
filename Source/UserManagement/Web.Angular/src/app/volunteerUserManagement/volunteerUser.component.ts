import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { VolunteerService } from './volunteerUser.service';

@Component({
  selector: 'cbs-volunteer-form',
  templateUrl: 'volunteerUser.component.html',
  styleUrls: [ 'volunteerUser.component.scss' ]
})
export class VolunteerFormComponent implements OnInit {
  volunteerUserForm: FormGroup;
  languages = [
    { value: 'lang-1', viewValue: 'English'},
    { value: 'lang-2', viewValue: 'French'},
    { value: 'lang-3', viewValue: 'Chechewa'}
  ];

  constructor(private formBuilder: FormBuilder,
              private userService: VolunteerService
  ) {}

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.volunteerUserForm = this.formBuilder.group({
      firstName: [ '', [ Validators.required ] ],
      lastName: [ '', [ Validators.required ] ],
      age: ['', [ Validators.required ] ],
      sex: ['', [ Validators.required ] ],
      nationalSociety: ['', [ Validators.required ] ],
      language: ['', [ Validators.required ] ],
      gpsLocation: ['', [ Validators.required ] ],
      mobilePhoneNumber: ['', [ Validators.required ] ]
    });
  }

  addVolunteerUser(form, isValidForm) {
    if (isValidForm) {
      console.log(form)
    }
    this.addUser(form)
  }

  async addUser(form) {
    this.userService.saveVolunteer(form);
    console.log('Clicked button');
  }
}
