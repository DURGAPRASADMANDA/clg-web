import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgeCalComponent } from './agecalculator/agecal.component';
import { ExmPtrnComponent } from './exampatterns/exampatterns.component';
import { ContactUsComponent } from './contactus/contactus.component';
import { BranchesComponent } from './branches/branches.component';
import { CrcsOfrdComponent } from './coursesoffered/coursesoffered.component';
import { OnlineExmComponent } from './onlineexams/onlineexams.component';
import { AboutUsComponent } from './aboutus/aboutus.component';
import { QuestionsComponent} from './questions/questions.component';
import { LookupComponent} from './lookups/lookup.component';
import { HomeComponent } from './home/home.component';
export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full', },
    { path: 'agecalculator', component: AgeCalComponent },
    { path: 'exampatterns', component: ExmPtrnComponent },
    { path: 'contactus', component: ContactUsComponent },
    { path: 'branches', component: BranchesComponent },
    { path: 'coursesoffered', component: CrcsOfrdComponent },
    { path: 'onlineexams', component: OnlineExmComponent },
    { path: 'aboutus', component: AboutUsComponent },
    { path: 'home', component: HomeComponent },
    { path: 'questions', component: QuestionsComponent },
    { path: 'lookups', component: LookupComponent },
    { path: 'lookups-add', component: LookupComponent }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
