import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../models/User';
import { UserService } from '../../services/user.service'
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    email: ''
  }
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;
  showUserForm: boolean = false;
  @ViewChild('userForm') form: any;
  data: any;
  // currentStyles  : {}

  constructor(private userService: UserService) { }

  ngOnInit() {
    // this.dataService.getData().subscribe(data => {
    // console.log(data)
    // })

    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.loaded = true;
    })
    // setTimeout(() => {
    // },2000)

    // this.showExtended = false;
    // this.addUser(
    //   {
    //     firstName : 'John2233',
    //     lastName : 'Doe2232',
    //     // age : 30,
    //     // address : {
    //     //   street : 'wwf332', 
    //     //   city : 'gfsag2133',
    //     //   state : 'ggase2223'
    //     // }
    //   }
    // )
    // this.setCurrentStyles();
  }

  // addUser() {
  //   this.user.isActive = true;
  //   this.user.registered = new Date()
  //   this.users.unshift(this.user);
  //   this.user = {
  //     firstName : '',
  //   lastName : '',
  //   email : ''
  // }
  onSubmit({ value, valid }: { value: User, valid: boolean }) {

    console.log(value,valid,"HELLo")

    if (!valid) {
      console.log("Not Valid")
    }
    else {
      value.isActive = true;
      value.registered = new Date();
      value.hide = true
      // this.users.unshift(value);
      this.userService.addUser(value)
      this.form.reset();
    }
  }
  toggleHide(user: User) {
    user.hide = !user.hide;
  }
}
  // fireEvent(e){
  //   console.log(e.type)
  // }
  // setCurrentStyles(){
  //   this.currentStyles = {
  //     'padding-top' : this.showExtended ? '0' : '40px'
  //   }
  // }