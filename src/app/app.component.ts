import { Component, OnInit } from '@angular/core';
import { HomeComponent } from "./home/home.component";
import { RouterModule } from '@angular/router';
import { CommonapiService } from "./commonapi/commonapi.service"
import { JsonPipe } from "@angular/common"
@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterModule, HomeComponent,JsonPipe],
})
export class AppComponent implements OnInit{
  title = 'homes';
  selectedCurrency = 'THB';
  public data: any
  constructor(public common: CommonapiService){

  }
  ngOnInit(): void{
    this.common.fetchMe().subscribe(
      (resp) => {
        this.data = resp;
      }
    )
  }

  selectCurrency(currency: string) {
    this.selectedCurrency = currency;
  }
}