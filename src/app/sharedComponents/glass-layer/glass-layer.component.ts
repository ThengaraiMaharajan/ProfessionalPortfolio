import { Component } from '@angular/core';

@Component({
  selector: 'app-glass-layer',
  templateUrl: './glass-layer.component.html',
  styleUrl: './glass-layer.component.css',
})
export class GlassLayerComponent {

  showGlassLayer = false;

  constructor() {
    setTimeout(() => {
      this.showGlassLayer = true;
    }, 4000);
  }

}
