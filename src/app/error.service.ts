import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ErrorService {
  handleError(error: HttpErrorResponse) {
    console.error('Handled by ErrorService:', error);
    alert(`Global Error: ${error.message}`);
  }
}