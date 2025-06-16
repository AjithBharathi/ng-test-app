import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-my-guard-one',
  templateUrl: './my-guard-one.component.html',
  styleUrls: ['./my-guard-one.component.scss']
})
export class MyGuardOneComponent {

  canDeactivate:boolean = false;

  allowDeativate() {
    this.canDeactivate = true;
  }

  canDeactivateX(): boolean {
    console.log('de activate called')
    if (!this.canDeactivate) {
      return confirm('You have unsaved changes. Do you really want to leave?');
    }
    return true;
  }

  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    if (!this.canDeactivate) {
      $event.preventDefault(); // Tells the browser: "Wait! Don't leave the page yet."
      $event.returnValue = true; // Triggers the default confirmation dialog in modern browsers
    }
  }

}
