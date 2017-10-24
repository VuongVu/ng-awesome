import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  constructor(meta: Meta, title: Title) {
    title.setTitle('Sign In | Angular Awesome');

    meta.addTags([
      { name: 'author', content: 'Angular.com' },
      { name: 'keywords', content: 'angular seo, angular 4 universal, etc' },
      {
        name: 'description',
        content: 'This is my Angular SEO-based App, enjoy it!',
      },
    ]);
  }

  ngOnInit() {}
}
