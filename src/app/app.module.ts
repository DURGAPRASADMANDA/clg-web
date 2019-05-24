import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ViewContainerRef, Output, EventEmitter, HostListener } from '@angular/core';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';
// import * as moment from 'moment/moment';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule, Http } from '@angular/http';
import {
    AccordionModule, DataTableModule, TabViewModule, ScheduleModule, DataGridModule
    , CalendarModule, Button, Footer, Column
} from '../custommodules/primeng/primeng';
import * as config from './app.config';
import { AppRoutingModule } from './app.routing';
import { ShareModule } from './common/share.module';
import { SimpleLayoutComponent } from './layouts/simple-layout.component';
import { AgeCalComponent } from './agecalculator/agecal.component';
import { ExmPtrnComponent } from './exampatterns/exampatterns.component';
import { ContactUsComponent } from './contactus/contactus.component';
import { BranchesComponent } from './branches/branches.component';
import { CrcsOfrdComponent } from './coursesoffered/coursesoffered.component';
import { OnlineExmComponent } from './onlineexams/onlineexams.component';
import { AboutUsComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { QuestionsComponent} from './questions/questions.component';
import { LookupComponent} from './lookups/lookup.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
// import { NgDatepickerModule } from 'ng2-datepicker';
// import * as frLocale from 'date-fns/locale/fr';
// import { CommonModule } from '@angular/common';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { ToastrModule } from 'ngx-toastr';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';

export function createTranslateLoader(http: Http) {
    return new TranslateStaticLoader(http, '../assets/i18n', '.json');
}
@NgModule({
    declarations: [
        AppComponent,
        AgeCalComponent,
        ExmPtrnComponent,
        ContactUsComponent,
        BranchesComponent,
        CrcsOfrdComponent,
        OnlineExmComponent,
        AboutUsComponent,
        QuestionsComponent,
        LookupComponent,
        HomeComponent,
        SimpleLayoutComponent
    ],
    imports: [
        DataTableModule,
        ShareModule,
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpModule,
        CalendarModule,
        FormsModule,
        OwlDateTimeModule,
        OwlNativeDateTimeModule,
        // NgDatepickerModule,
        FroalaEditorModule.forRoot(), FroalaViewModule.forRoot(),
        ToastrModule.forRoot({
            timeOut: 1500,
        }), TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: (createTranslateLoader),
            deps: [Http]
        }),
        TabsModule.forRoot()
    ],
    providers: [
        {
            provide: 'apiEndPoint',
            useValue: config.API_END_POINT
        },
        {
            provide: 'staticJsonFilesEndPoint',
            useValue: config.STATIC_JSONFILES_END_POINT
        },
        {
            provide: 'defaultCountry',
            useValue: config.DEFAULT_COUNTRY
        },
        {
            provide: 'defaultColor',
            useValue: config.DEFAULT_COLOR
        },
        {
            provide: 'defaultType',
            useValue: config.DEFAULT_TYPE
        },
        {
            provide: 'defaultPrice',
            useValue: config.DEFAULT_PRICE
        },
        {
            provide: 'defaultActive',
            useValue: config.DEFAULT_ACTIVE
        },
        {
            provide: 'defaultInActive',
            useValue: config.DEFAULT_INACTIVE
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
