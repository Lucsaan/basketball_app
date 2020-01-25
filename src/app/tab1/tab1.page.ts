import { Component } from '@angular/core';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  users: User[] =  [];

  constructor(
    public alertController: AlertController
  ) {}

  async addUser() {
      const alert = await this.alertController.create({
        header: 'Prompt!',
        inputs: [
          {
            name: 'name',
            type: 'text',
            placeholder: 'Enter name'
          }
        ],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              console.log('Confirm Cancel');
            }
          }, {
            text: 'Ok',
            handler: (data) => {
              this.users.push({name: data.name, id: 1, isChecked: false});
            }
          }
        ]
      });
      await alert.present();
  }

  show() {
    console.log(this.users);
  }
}

export interface User {
  id: number;
  name: string;
  isChecked: boolean;
}
