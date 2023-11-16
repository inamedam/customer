import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer-service.service';
import { ElementRef, Renderer2 } from '@angular/core';
import { ProfileComponent } from '../profile/profile.component';
declare var $: any;
import { MatDialog } from '@angular/material/dialog';
import { HistorylogService } from '../historylog.service';
import { MatSnackBar } from '@angular/material/snack-bar';



declare var $: any;
declare var bootstrapMaterialDesign: any;

@Component({
  selector: 'app-custpro',
  templateUrl: './custpro.component.html',
  styleUrls: ['./custpro.component.css']
})
export class CustproComponent implements OnInit {
  customer: Customer = new Customer();
  isHovered = false;

  onMouseEnter() {
    this.isHovered = true;
    setTimeout(() => {
      this.isHovered = false;
    }, 10000);
  }

  onMouseLeave() {
    this.isHovered = false;
  }

  constructor(private snackBar: MatSnackBar, private route: ActivatedRoute, private customerService: CustomerService, public dialog: MatDialog, private historylogService: HistorylogService) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const customerId = params['id'];
      this.customerService.findCustomerById(customerId).subscribe((customer) => {
        this.customer = customer;
      });
    });
  }

  isColorToggled: boolean = false;
  buttonText: string = 'valide';

  togglecolor() {
    this.isColorToggled = !this.isColorToggled;
    this.buttonText = this.isColorToggled ? 'Not Valid' : 'valide';
  }

  isToggled: boolean = false;
  buttonTText: string = 'valide';

  togglecolor2() {
    this.isToggled = !this.isToggled;
    this.buttonTText = this.isToggled ? 'Not Valid' : 'valide';
  }

  openUpdateModal(customer: Customer) {

    const dialogRef = this.dialog.open(ProfileComponent, {
      data: { customer: customer }
    });

    dialogRef.afterClosed().subscribe(result => {
    });
    this.historylogService.logUpdate('Updated something in the component.');
 }

 showUpdateLog() {
  const updateLog = this.historylogService.updateHistory;
  console.log('Update Log:', updateLog);
  const message = updateLog.join('\n\n'); // Join updates with a newline character
    this.snackBar.open(message, 'Close', {
      duration: 60000, // Duration in milliseconds
    });

}



  ngAfterViewInit() {
    let open = false;

    $('.circle-bg').on('click',  () => {
      if (open === false) {
        $(this).animate({
          height: '+=10px',
          width: '+=10px'
        }, 300);

        $('.outer-icons').animate({
          opacity: 1
        }, 1000);

        $('.icon').fadeOut();
        $(this).html("<i class='icon fa fa-times' style='display: none'></i>");
        $('.icon').fadeIn();

        open = true;
      } else {
        $(this).animate({
          height: '-=10px',
          width: '-=10px'
        }, 200);

        $('.outer-icons').animate({
          opacity: 0
        }, 300);

        $('.icon').fadeOut();
        $(this).html("<i class='icon fa fa-bars' style='display: none'></i>");
        $('.icon').fadeIn();

        open = false;
      }
    });
  }



}
