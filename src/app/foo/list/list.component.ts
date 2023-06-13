import { Component, OnInit } from '@angular/core';
import { Foo } from 'src/app/models/foo';
import { FooService } from 'src/app/services/foo.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  foos: Foo[] = [];
  constructor(private fooService: FooService) { }

  ngOnInit(): void {
    this.loadFoos()
  }

  loadFoos(){
    this.fooService.list().subscribe(res => {
      this.foos = res;
    },
    err => console.log(err.message))
  }

}
