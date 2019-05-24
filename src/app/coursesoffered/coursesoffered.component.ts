import { Component, OnInit} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from 'ng2-translate';
import { CrsOfrdService } from './coursesoffered.service';
@Component({
  selector: 'app-coursesoffered-root',
  templateUrl: './coursesoffered.component.html',
  providers: [CrsOfrdService]
})
export class CrcsOfrdComponent implements OnInit {
    title = 'dhruva-web';
    coursesOfferedList: any;
    constructor(private CrsOfrdService: CrsOfrdService,
      private toastr: ToastrService,
      private translateService: TranslateService) {
    }
    ngOnInit() {
      this.coursesOffered();
    }
  
    coursesOffered() {
      this.CrsOfrdService.coursesOffered()
        .subscribe(data => {
          this.coursesOfferedList = data;
        },
        error => {
        });
    }
}
