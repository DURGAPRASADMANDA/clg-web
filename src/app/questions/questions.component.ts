import { Component, OnInit} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from 'ng2-translate';
import { QuestionsService } from './questions.service';
import { LookupService } from '../lookups/lookup.service';
@Component({
  selector: 'app-questions-root',
  templateUrl: './questions.component.html',
  providers: [QuestionsService]
})
export class QuestionsComponent implements OnInit {
    title = 'dhruva-web';
    coursesOfferedList: any;
    clientList: any;
    client: any;
    subjectNames: any;
    subject: any;
    question: any;
    optionA: any;
    optionB: any;
    optionC: any;
    optionD: any;
    optionE: any;
    key: any;
    complexLevels: any;
    complexLevel: any;
    constructor(private QstnService: QuestionsService,
                private toastr: ToastrService,
                private translateService: TranslateService) {
    }
    ngOnInit() {
      this.coursesOffered();
      this.getClients();
      this.subjectLookups();
      this.complexLevelLookups();
    }
    public saveQuestion() {
      const qstnObj = {
        client: {
          clientName: this.client.split('~')[1],
          clientId: this.client.split('~')[0]
      },
      subject: {
          subjectName: this.subject.split('~')[1],
          subjectId: this.subject.split('~')[0],
      },
      question: this.question,
      optionA: this.optionA,
      optionB: this.optionB,
      optionC: this.optionC,
      optionD: this.optionD,
      optionE: this.optionE,
      key: this.key,
      complexLevel: this.complexLevel.split('~')[1]
      };
      this.QstnService.saveQuestion(qstnObj)
        .subscribe(data => {
          this.coursesOfferedList = data;
        },
        error => {
        });
    }
    subjectLookups() {
      this.QstnService.lookups('SUBJECTS')
        .subscribe(data => {
          this.subjectNames = data;
        },
        error => {
        });
    }
    complexLevelLookups() {
      this.QstnService.lookups('COMPLEX_LEVEL')
        .subscribe(data => {
          // alert(JSON.stringify(data));
          this.complexLevels = data;
        },
        error => {
        });
    }
    coursesOffered() {
      this.QstnService.coursesOffered()
        .subscribe(data => {
          this.coursesOfferedList = data;
        },
        error => {
        });
    }
    getClients() {
      this.QstnService.clientList()
        .subscribe(data => {
          // alert(JSON.stringify(data));
          this.clientList = data;
        },
        error => {
        });
    }
}
