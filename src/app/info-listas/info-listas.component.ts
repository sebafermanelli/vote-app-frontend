import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-info-listas',
  templateUrl: './info-listas.component.html',
  styleUrls: ['./info-listas.component.scss']
})
export class InfoListasComponent implements OnInit {
  idList: number | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const idParam = params.get('id');
      if (idParam !== null) {
        this.idList = +idParam;
      }
    });
  }
}
