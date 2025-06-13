import { Component } from '@angular/core';
import { safelink } from '../auth/safe.directive';

@Component({
  selector: 'app-learning-resources',
  templateUrl: './learning-resources.component.html',
  styleUrl: './learning-resources.component.css',
  standalone: true,
  imports: [safelink]
})
export class LearningResourcesComponent {}
