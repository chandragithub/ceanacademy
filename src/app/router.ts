import { Injectable, NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LearningComponent } from './shared/learning/learning.component';
import { InterviewComponent } from "./shared/interview/interview.component";
import { BooksComponent } from "./shared/books/books.component";

const routes: Routes = [
    { path: 'learning', component: LearningComponent },
    { path: 'interview', component: InterviewComponent },
    { path: 'books', component: BooksComponent },
    { path: '', redirectTo: '/learning', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class Router { }




