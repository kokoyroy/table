import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css'],
  standalone: true,
  imports: [CommonModule]

})
export class DrawerComponent {
  @Output() drawerClose: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() title = 'Drawer Title';
  @Input() opened = false;


  closeDrawer() {
    this.drawerClose.emit(true);
  }
}
