import { Component } from '@angular/core';

/**
 * OrderConfirmComponent
 *
 * This component implements an animated order confirmation button inspired by
 * the Coding Stella example. When the user clicks the button, the text
 * switches from “Complete Order” to “Order Placed” and a delivery truck
 * animation plays. After ten seconds the animation resets and the button
 * returns to its default state. The CSS for the animation lives alongside
 * this component in `order‑confirm.component.css`.
 */
@Component({
  selector: 'app-order-confirm',
  templateUrl: './order-confirm.component.html',
  styleUrls: ['./order-confirm.component.css']
})
export class OrderConfirmComponent {
  /**
   * Tracks whether the button is in its animated state. When true the
   * `animate` class is added to the root element and CSS keyframes play.
   */
  isAnimating = false;

  /**
   * Handles click events on the button. If the component is not currently
   * animating it toggles on the animation and schedules a reset after
   * 10 seconds. Subsequent clicks while animating have no effect.
   */
  onClick(): void {
    if (!this.isAnimating) {
      this.isAnimating = true;
      setTimeout(() => {
        this.isAnimating = false;
      }, 10000);
    }
  }
}