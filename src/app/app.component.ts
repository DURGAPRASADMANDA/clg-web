import { Component, OnInit, ChangeDetectorRef} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { TranslateModule, TranslateLoader, TranslateStaticLoader, TranslateService } from 'ng2-translate';
import 'rxjs/Rx';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
 })
export class AppComponent implements OnInit {
  private direction: string;
  constructor(private translate: TranslateService,
    private http: Http, private router: Router, private activatedRoute: ActivatedRoute) {
    }
  ngOnInit() {
    this.translate.addLangs(['en']);
    this.translate.setDefaultLang('en');
    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang.match(/en/) ? browserLang : 'en');
    if (this.translate.getBrowserLang() === 'ar') {
      this.direction = 'rtl';
    } else {
      this.direction = 'ltr';
    }
  }
//   openNav(){
//     document.getElementById("mySidenav").style.width = "250px";
//   };
//   closeNav() {
//     document.getElementById("mySidenav").style.width = "0";
//   };
 }
