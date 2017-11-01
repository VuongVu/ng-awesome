import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  constructor(private title: Title, private afAuth: AngularFireAuth) {
    title.setTitle('Sign In | Angular Awesome');
  }

  ngOnInit() {}

  onLoginWithFacebook() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }

  onLoginWithGoogle() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
}
