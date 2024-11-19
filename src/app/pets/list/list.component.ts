import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { PetsService } from '../services/pets.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [AsyncPipe, MatTableModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  private petsService = inject(PetsService);

  public pets$ = this.petsService.findByStatus('available');
}
