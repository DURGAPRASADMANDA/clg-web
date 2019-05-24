import { Component, OnInit} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from 'ng2-translate';
import { ContactUsService } from './contactus.service';

@Component({
  selector: 'app-contactus-root',
  templateUrl: './contactus.component.html',
  providers: [ContactUsService]
})
export class ContactUsComponent implements OnInit {
  examPtrnList: any;
  constructor(private ContactUsService: ContactUsService,
    private toastr: ToastrService,
    private translateService: TranslateService) {
  }
  ngOnInit() {
    this.loadExamPtrnList();
  }

  loadExamPtrnList() {
    this.ContactUsService.coursesOffered()
      .subscribe(data => {
        this.examPtrnList = data;
      },
      error => {
      });
  }
}
