import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from 'ng2-translate';
import { AboutUsService } from './aboutus.service';

@Component({
    selector: 'aboutus-root',
    templateUrl: './aboutus.component.html',
    providers: [AboutUsService]
})
export class AboutUsComponent implements OnInit {
    title = 'dhruva-web';
    aboutUs: String;
    constructor(private AboutUsService: AboutUsService,
        private toastr: ToastrService,
        private translateService: TranslateService) {
    }
    ngOnInit() {
        this.aboutUsContent();
    }
    aboutUsContent() {
        this.AboutUsService.aboutUs()
            .subscribe(data => {
                this.aboutUs = data[0].aboutUsContent;
            },
                error => {
                });
    }
}
