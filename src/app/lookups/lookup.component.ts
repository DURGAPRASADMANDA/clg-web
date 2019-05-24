import { Component, OnInit} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from 'ng2-translate';
import { Router, ActivatedRoute } from '@angular/router';
import { LookupService } from './lookup.service';
@Component({
  selector: 'app-lookup-root',
  templateUrl: './lookup.component.html',
  providers: [LookupService]
})
export class LookupComponent implements OnInit {
    title = 'dhruva-web';
    toastermessage: any;
    lookupList: any;
    clientList: any;
    client: any;
    lTypeName: any;
    lName: any;
    lookupDes: any;
    constructor(private LookupService: LookupService, private router: Router,
                private toastr: ToastrService,
                private translateService: TranslateService) {
    }
    ngOnInit() {
      this.getLookups();
      this.getClients();
    }
    getLookups() {
      this.LookupService.lookups('SUBJECTS')
        .subscribe(data => {
          this.lookupList = data;
        },
        error => {
        });
    }
    getClients() {
      this.LookupService.clientList()
        .subscribe(data => {
          // alert(JSON.stringify(data));
          this.clientList = data;
        },
        error => {
        });
    }
    public saveLookup() {
      const lookupObj = {
        client: {
          clientName: this.client.split('~')[1],
          clientId: this.client.split('~')[0]
      },
      lookupTypeName: this.lTypeName,
      lookupName: this.lName,
      description: this.lookupDes,
      createdBy: 'Dhruva',
      updatedBy: 'Dhruva'
      };
      // alert(JSON.stringify(lookupObj));
      this.LookupService.saveLookup(lookupObj)
        .subscribe(data => {
          alert('Lookup added succesfully');
          this.router.navigate(['/coursesoffered']);
          this.toastermessage = 'Lookup ' + this.translateService.get('TOSTER_MSG.ADD');
          this.toastr.success(this.toastermessage.value);
          // this.coursesOfferedList = data;
        },
        error => {
        });
    }
}
