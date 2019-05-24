import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from 'ng2-translate';
import { BranchesService } from './branches.service';

@Component({
  selector: 'app-branches-root',
  templateUrl: './branches.component.html',
  providers: [BranchesService]
})
export class BranchesComponent implements OnInit {
  title = 'dhruva-web';
  branchesData: any;
  constructor(
    private BranchesService: BranchesService,
    private toastr: ToastrService,
    private translateService: TranslateService) {
  }
  ngOnInit() {
    this.fetchBranches();
  }

  fetchBranches() {
    this.BranchesService.fetchBranches()
      .subscribe(data => {
        // alert(JSON.stringify(data));
        this.branchesData = data;
      },
        error => {
        });
  }
}
