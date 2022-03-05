import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit, OnDestroy {
  protected subscriptions = [];
  constructor() { }
  ngOnDestroy(): void {
    this.subscriptions.forEach(subscribe => {
      subscribe.unsubscribe();
    });
  }

  ngOnInit(): void {
  }

}
