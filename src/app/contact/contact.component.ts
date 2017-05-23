import { Component, OnInit } from '@angular/core';
import { UserService } from "app/contact/user.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
 lat: number = 29.1304046;
  lng: number = 75.7173577;
  constructor(private userService:UserService) { }

  ngOnInit() {
  }

}
