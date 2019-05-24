import { Component, OnInit} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from 'ng2-translate';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [HomeService]
})
export class HomeComponent implements OnInit {
  title = 'dhruva-web';
  coursesOfferedList: any;
  constructor(private HomeService: HomeService,
    private toastr: ToastrService,
    private translateService: TranslateService) {
  }
  ngOnInit() {
    this.coursesOffered();
  }

  coursesOffered() {
    this.HomeService.coursesOffered('a')
      .subscribe(data => {
        this.coursesOfferedList = data['result'];
      },
      error => {
      });
  }
}
