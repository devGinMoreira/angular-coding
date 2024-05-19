import { Component } from '@angular/core';
import { CardComponent, CardFooterDirective, CardHeaderDirective } from "../components/card/card.component";

@Component({
    selector: 'app-content-projection',
    standalone: true,
    templateUrl: './content-projection.component.html',
    styleUrl: './content-projection.component.scss',
    imports: [CardComponent, CardFooterDirective, CardHeaderDirective]
})
export class ContentProjectionComponent {

}
