import { Component, OnInit} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from 'ng2-translate';
import { ExmPtrnService } from './exampatterns.service';

@Component({
  selector: 'app-exampatterns-root',
  templateUrl: './exampatterns.component.html',
  providers: [ExmPtrnService]
})
export class ExmPtrnComponent implements OnInit {
  title = 'dhruva-web';
  examPtrnList: any;
  constructor(private ExamPtrnService: ExmPtrnService, private toastr: ToastrService, private translateService: TranslateService) {
  }
  ngOnInit() {
    this.loadExamPtrnList();
  }

  loadExamPtrnList() {
    this.ExamPtrnService.getExamPtrnList()
      .subscribe(data => {
        this.examPtrnList = data;
      },
      error => {
      });
  }
}
