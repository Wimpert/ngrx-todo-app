import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter-badge',
  templateUrl: './counter-badge.component.html',
  styleUrls: ['./counter-badge.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterBadgeComponent {

  @Input() label: string;
  @Input() badgeLabel: string;


}
