import { Component, OnInit, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  @Output() changeTabEmitter = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  onChangeTab(event: Event, tab: string) {
    console.log(event);
    this.changeTabEmitter.emit(tab);
  }
}
