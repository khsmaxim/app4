import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string = 'Steve';
  age:number;
  email:string;
  address:Address;
  hobbies:string[];
  hello:any;
  posts:Posts[];
  isEdit:boolean = false;

  constructor(private dataService:DataService) { 
    console.log('constructor');
  }

  ngOnInit() {
    console.log('ngOnInit');
    this.name = 'Jhon Doe';
    this.age = 30;
    this.email = 'khs.maxim@gmail.com';
    this.address = {
      street: '50 Main St',
      city: 'Chicago',
      state: 'AB'
    };
    this.hobbies = ['Write Code', 'Watch Movies'];
    this.hello = 'Hello'; // 4, true, ...

    this.dataService.getPosts().subscribe((posts) => {
      // console.log(posts);
      this.posts = posts;
    });
  }

  onClick() {
    this.name = 'Max';
    this.hobbies.push('New Hobby')
  }

  addHobby(hobby) {
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby) {
    let ii:number = this.hobbies.indexOf(hobby);
    if (ii < 0) return;
    this.hobbies.splice(ii, 1);
  }

  toggleEdit() {
    this.isEdit = !this.isEdit;
  }
}

interface Address {
  street:string;
  city:string;
  state:string;
}

interface Posts {
  id: number,
  title: string,
  body: string,
  userId: number
}
