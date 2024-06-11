import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService:UserService,private snack:MatSnackBar,private router:Router) { }

//1. you can make oject by using inrerface or class or 2. direct create object                         
  public user={               
    username:'',
    password:'',
    firstName:'',
    lastName:'',
    email:'',
    phone:''
  };    
  condition:Boolean=true;                

  ngOnInit(): void {}

formSubmit(registrationForm: NgForm) {
  if (registrationForm.valid) {
    // Call your registration service here to save the user
    this.userService.addUser(this.user).subscribe(
      (response) => {
        // Show a success message
        Swal.fire('Registration Successful!', 'User registered successfully.', 'success');
        // Clear the form
        registrationForm.resetForm();
      //  this.user = {}; // Clear user object
      },
      (error) => {
        // Show an error message if the registration fails
        Swal.fire('Error!', 'Failed to register user.', 'error');
      }
    );
  } else {
    // Show an error message if the form is invalid
    Swal.fire('Error!', 'Please fill out all the fields.', 'error');
  }
}
}