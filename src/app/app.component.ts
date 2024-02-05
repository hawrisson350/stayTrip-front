import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './views/partials/footer/footer.component';
import { TopBarComponent } from './views/partials/top-bar/top-bar.component';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, TopBarComponent,SharedModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'stayTrip-front';
}
