import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {
  MatSidenavModule, MatButtonModule, MatIconModule, MatToolbarModule, MatTabsModule, MatExpansionModule,
  MatInputModule, MatDialogModule, MatProgressSpinnerModule, MatAutocompleteModule
} from '@angular/material';
import { RouterModule } from '@angular/router';

import { NetComponent } from './net/net.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ConstructSidenavComponent } from './construct-sidenav/construct-sidenav.component';
import { PinnacleModalComponent } from './construct-sidenav/modals/pinnacle-modal/pinnacle-modal.component';
import { TransitionModalComponent } from './construct-sidenav/modals/transition-modal/transition-modal.component';
import { ConnectionModalComponent } from './construct-sidenav/modals/connection-modal/connection-modal.component';
import { ChartComponent } from './chart/chart.component';

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatTabsModule,
    MatExpansionModule,
    MatInputModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    NetComponent,
    SidenavComponent,
    ToolbarComponent,
    ConstructSidenavComponent,
    PinnacleModalComponent,
    TransitionModalComponent,
    ConnectionModalComponent,
    ChartComponent
  ],
  exports: [
    NetComponent,
    SidenavComponent,
    ToolbarComponent,
    ConstructSidenavComponent,
    ChartComponent
  ],
  entryComponents: [
    PinnacleModalComponent,
    TransitionModalComponent,
    ConnectionModalComponent
  ]
})
export class SharedModule { }
