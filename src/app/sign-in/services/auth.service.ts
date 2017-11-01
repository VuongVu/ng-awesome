import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from 'angularfire2/firestore';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';

import { User } from '../models/User';

@Injectable()
export class AuthService {
  user: Observable<User>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
  ) {
    this.user = this.afAuth.authState.switchMap(user => {
      if (user) {
        return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
      } else {
        return Observable.of(null);
      }
    });
  }

  // Set user data to firestore on sign in
  private updateUserData(user: User) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`,
    );
    const data: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
    };

    return userRef.set(data);
  }

  private oAuthSignInPopup(provider: firebase.auth.AuthProvider) {
    return this.afAuth.auth
      .signInWithPopup(provider)
      .then(credential => {
        this.updateUserData(credential.user);
      })
      .catch((err: any) => {
        return Observable.throw(err);
      });
  }

  facebookSignIn() {
    const provider = new firebase.auth.FacebookAuthProvider();

    return this.oAuthSignInPopup(provider);
  }

  googleSignIn() {
    const provider = new firebase.auth.GoogleAuthProvider();

    return this.oAuthSignInPopup(provider);
  }

  credentialSignIn(email: string, password: string) {
    return this.afAuth.auth
      .signInWithEmailAndPassword(email, password)
      .then((credential: any) => {
        this.updateUserData(credential.user);
      })
      .catch((err: any) => {
        return Observable.throw(err);
      });
  }

  signOut() {
    this.afAuth.auth.signOut().then(() => this.router.navigate['/']);
  }
}
