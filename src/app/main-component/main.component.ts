import {Component, TemplateRef, ViewChild} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {Observable} from 'rxjs';

@Component({
  template: `
    <h1>Deactivate Guard with eager URL updating</h1>
    <h3>Repro steps:</h3>
    <ul>
      <li>Click on the <strong>child</strong> link below</li>
      <li>Notice the URL in the address bar updates due to eager URL update strategy</li>
      <li>When the confirmation modal open choose No</li>
      <li>The URL updates back to root</li>
      <li>Click the link again and notice no navigation occurs</li>
    </ul>
    <a [routerLink]="['child']">Child</a>
    <ng-template #confirm>
      <h1>Leave?</h1>
      <button mat-button (click)="close(true)">Yes</button>
      <button mat-button (click)="close(false)">No</button>
    </ng-template>
  `
})
export class MainComponent {

  @ViewChild('confirm') confirm: TemplateRef<any>;
  private _dialogRef: MatDialogRef<any>;

  constructor(private _dialog: MatDialog) { }

  canDeactivate(): Observable<boolean> {
    this._dialogRef = this._dialog.open(this.confirm);
    return this._dialogRef.afterClosed();
  }

  close(yes: boolean) {
    this._dialogRef.close(yes);
  }
}
