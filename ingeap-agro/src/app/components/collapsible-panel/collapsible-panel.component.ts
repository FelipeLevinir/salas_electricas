import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-collapsible-panel',
  templateUrl: './collapsible-panel.component.html',
  styleUrls: ['./collapsible-panel.component.scss']
})
export class CollapsiblePanelComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() imageUrl: string = '';
  @Input() items: string[] = [];

  isCollapsed = true;

  togglePanel() {
    this.isCollapsed = !this.isCollapsed;
  }
}
