import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['test.component.css'],
})
export class TestComponent {
  userName = '';
  userAge = 1;

  userClicked = false;

  wrongNameInput = false;
  wrongAgeInput = false;

  ageStyle = {};

  onClick() {
    if (this.notValidate()) return;
    this.userClicked = true;
    this.ageChanged();
  }

  ageChanged() {
    if (this.userAge > 0 && this.userAge <= 10) {
      this.ageStyle = { color: 'red' };
    } else if (this.userAge > 10 && this.userAge <= 20) {
      this.ageStyle = { color: 'blue' };
    } else if (this.userAge > 20 && this.userAge <= 30) {
      this.ageStyle = { color: 'green' };
    } else if (this.userAge > 30) {
      this.ageStyle = { color: 'pink' };
    }
  }

  notValidate() {
    if (this.userName === '') {
      this.wrongNameInput = true;
    }
    if (this.userAge <= 0) {
      this.wrongAgeInput = true;
    }

    return this.wrongNameInput || this.wrongAgeInput;
  }

  nameFocus() {
    if (this.wrongNameInput) this.wrongNameInput = false;
  }
  ageFocus() {
    if (this.wrongAgeInput) this.wrongAgeInput = false;
  }
}
