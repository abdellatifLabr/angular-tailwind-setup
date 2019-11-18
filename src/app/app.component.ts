import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="bg-white rounded-lg p-20 m-20 shadow-lg text-center">
      <button class="bg-blue hover:bg-indigo text-white font-bold py-2 px-4 rounded">
        Button
      </button>
    </div>
  `,
  styles: []
})
export class AppComponent {

  constructor() { }

}
