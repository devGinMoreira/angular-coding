import { Component } from '@angular/core';
import { CardComponent, CardContentDirective, CardFooterDirective, CardHeaderDirective } from "../components/card/card.component";

@Component({
    selector: 'app-content-projection',
    standalone: true,
    templateUrl: './content-projection.component.html',
    styleUrl: './content-projection.component.scss',
    imports: [CardComponent, CardFooterDirective, CardHeaderDirective, CardContentDirective]
})
export class ContentProjectionComponent {

}
