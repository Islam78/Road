import { Component, OnInit, Input, ViewChild } from '@angular/core';
// import { Todo } from 'app/main/apps/todo/todo.model';
import { CoreSidebarService } from '@core/components/core-sidebar/core-sidebar.service';
// import { TodoService } from 'app/main/apps/todo/todo.service';

// ContentHeader component interface
export interface ContentHeader {
  headerTitle: string;
  actionButton: boolean;
  breadcrumb?: {
    type?: string;
    links?: Array<{
      name?: string;
      isLink?: boolean;
      link?: string;
    }>;
  };
}


@Component({
  selector: 'app-content-header',
  templateUrl: './content-header.component.html'
})
export class ContentHeaderComponent implements OnInit {
  public isDataEmpty;
  public todo: any;
  // public todo: Todo;
  public tags;
  public selectTags;
  public selectAssignee;

  @ViewChild('dueDateRef') private dueDateRef: any;

  public dueDateOptions = {
    altInput: true,
    mode: 'single',
    altInputClass: 'form-control flat-picker flatpickr-input invoice-edit-input',
    altFormat: 'F j, Y',
    dateFormat: 'Y-m-d'
  };


  // input variable
  @Input() contentHeader: ContentHeader;

  constructor( private _coreSidebarService: CoreSidebarService, private _todoService: CoreSidebarService) {}

  ngOnInit() {}

  closeSidebar() {
    this._coreSidebarService.getSidebarRegistry('todo-sidebar-right').toggleOpen();
  }
  toggleComplete() {
    this.todo.completed = !this.todo.completed;
    // this._todoService.updateCurrentTodo(this.todo);
  }
}
