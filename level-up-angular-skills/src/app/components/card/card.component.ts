import { CommonModule } from '@angular/common';
import {
  Component,
  ContentChild,
  Directive,
  Input,
  TemplateRef,
} from '@angular/core';

@Directive({
  selector: 'app-card-footer',
  standalone: true,
})
export class CardFooterDirective {}

@Directive({
  selector: 'app-card-header',
  standalone: true,
})
export class CardHeaderDirective {}

@Directive({
  selector: '[appCardMainContent]',
  standalone: true,
})
export class CardContentDirective {
  constructor(public template: TemplateRef<any>) {}
}

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- https://codepen.io/mcraiganthony/pen/NxGxqm -->
    <div class="card">
      <div class="card__image card__image--fence"></div>
      <div class="card__content">
        <div class="card__title">{{title}}</div>

        <!-- Content -->
        <div class="card__content">This is the shorthand for flex-grow, flex-shrink and flex-basis combined.
          The second and third parameters (flex-shrink and flex-basis) are optional. Default is 0 1 auto.
        </div>
         <!-- Content -->

        <!-- Footer -->
        <button class="btn btn--block card__btn">Button</button>
         <!-- Footer -->

      </div>
    </div>
  `,
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() title?: string;
  @ContentChild(CardContentDirective) carMainContent?: CardContentDirective;
}
