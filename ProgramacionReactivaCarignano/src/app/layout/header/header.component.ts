import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() public title!: string;
  @Output() public onMenuClick: EventEmitter<void> = new EventEmitter<void>();
  public toggleSidebarVisibility(): void {
    this.onMenuClick.emit();
  }
}
