import {
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  Input,
  Output,
  EventEmitter
} from "@angular/core";
import { Payee } from "src/app/payees/payees-types";
import * as lodash from "lodash";
import { connectableObservableDescriptor } from "rxjs/internal/observable/ConnectableObservable";

export interface Column {
  field: string;
  label: string;
}

type SortDirection = "asc" | "desc";

@Component({
  selector: "isc-data-grid",
  templateUrl: "./data-grid.component.html",
  styleUrls: ["./data-grid.component.css"],
  styles: [
    `
      thead th {
        cursor: pointer;
      }

      .asc span::after {
        content: " ⬆️";
      }
      .desc span::after {
        content: " ⬇️";
      }
    `
  ]
})
export class DataGridComponent implements OnInit, OnChanges {
  @Input()
  data: Payee[];

  @Input()
  columns: Column[];

  @Output()
  selectRow = new EventEmitter<Payee>();

  displayData: Payee[];
  sortField: string;
  sortDirection: "asc" | "desc";

  constructor() {}

  ngOnInit() {
    this.displayData = Array.isArray(this.data) ? [...this.data] : [];
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["data"] && !changes["data"].isFirstChange()) {
      this.displayData = [...this.data];
      console.log(this.displayData);
    }
  }

  getPath(object, path) {
    return lodash.get(object, path, "");
  }

  getIndicator(field) {
    if (field === this.sortField) {
      return this.sortDirection;
    }
  }

  handleRowClick(payee: Payee) {
    console.log("payee is ",payee)
    this.selectRow.emit(payee);
  }

  handleHeaderClick(sortField: string) {
    console.log("Clicked on ", sortField);
    let sortDirection: SortDirection = "asc";
    if (this.sortField === sortField && this.sortDirection === "asc") {
      sortDirection = "desc";
    }

    this.sortField = sortField;
    this.sortDirection = sortDirection;
    this.displayData = lodash.orderBy(
      this.displayData,
      this.sortField,
      this.sortDirection
    );
  }
}
