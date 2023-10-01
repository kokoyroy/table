import { Component, Input, OnInit } from '@angular/core';
import { GenericTableService } from './generic-table.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { DrawerComponent } from '../drawer/drawer.component';

interface IColumn {
  propertyName: string;
  title: string;
  crud: boolean;
}

interface ITableConfig {
  columns: IColumn[];
}

@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.css'],
  standalone: true,
  imports: [CommonModule, DrawerComponent]
})
export class GenericTableComponent implements OnInit {
  @Input() crud = false;
  @Input() title = 'Generic Table';
  @Input() tableConfig?: ITableConfig
  data$?: Observable<any[]>;
  opened = false;

  constructor(private tableService: GenericTableService) { }

  tableconfigurations: ITableConfig = {
    columns: [
      { propertyName: 'id', title: 'ID', crud: false },
      { propertyName: 'name', title: 'Name', crud: true },
      { propertyName: 'username', title: 'User Name', crud: true },
      { propertyName: 'email', title: 'Email', crud: true },
      { propertyName: 'phone', title: 'Phone', crud: true },
      { propertyName: 'website', title: 'Website', crud: true }
    ]
  }

  togleDrawer() {
    console.log(this.opened);
    this.opened = !this.opened;
  }

  drawerClosed() {
    this.opened = false;
  }

  ngOnInit() {
    this.data$ = this.tableService.getData();
  }

}
