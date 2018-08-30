import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(".sidebar .card").click(function(){
      if($(this).hasClass("open")){
        $(this).removeClass("open");
      }else{
        $(".sidebar .card").removeClass("open");
        $(this).addClass("open");
      }
    });
    
  }

}
