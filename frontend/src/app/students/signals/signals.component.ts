import { Component, effect, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [],
  template: `
    <p (click)="doIt()">Hi, {{ user().name}}
    </p>
    <p>He is {{ user().age}} years old</p>
    <p>Num {{num()}}</p>
    <div>
      <button (click)="increment()" class="btn btn-primary">+</button>
      <button (click)="decrement()" class="btn btn-primary">-</button>

  `,
  styles: ``
})
export class SignalsComponent implements OnInit {
constructor() {
  effect(() => {
    if(this.num() > 5) {
      console.log("they got to 5!", this.num())
    }
  })
}
  num = signal(0);

  user = signal( {
    name: 'Matthew McConnaughey',
    age: 38,
    email: 'matt@aol.com'
  });

  increment() {
    this.num.set(this.num() + 1)
  }

  decrement() {
    this.num.set(this.num() - 1)
  }

  doIt() {
  }

  ngOnInit() {

  }
  
}

