import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MomentModule } from 'angular2-moment';
import { AppComponent } from './app.component';

// Material Components
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';

// Global services
import { AuthService } from './auth/auth.service';

// Routing
import { Routing } from './app.routing';

// Material Angular
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatRadioModule } from '@angular/material/radio';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCheckboxModule } from '@angular/material';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatMenuModule } from '@angular/material/menu';

// Screens
import { SigninScreenComponent } from './auth/signin.screen';
import { SignupScreenComponent } from './auth/signup.screen';
import { QuestionScreenComponent } from './question/question.screen';

// Componentes
import { QuestionListComponent } from './question/question-list.component';
import { QuestionDetailComponent } from './question/question-detail.component';
import { QuestionFormComponent } from './question/question-form.component';
import { AnswerFormComponent } from './answer/answer-form.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionDetailComponent,
    AnswerFormComponent,
    SigninScreenComponent,
    SignupScreenComponent,
    QuestionListComponent,
    QuestionScreenComponent,
    QuestionFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MomentModule,
    FormsModule,
    ReactiveFormsModule,
    Routing,
    HttpModule,
    // Material Angular
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCheckboxModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatGridListModule,
    MatRadioModule,
    MatButtonToggleModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatTabsModule,
    MatMenuModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
