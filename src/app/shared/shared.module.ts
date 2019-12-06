import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DataGridComponent } from "./data-grid/data-grid.component";
import { FindPathPipe } from './find-path.pipe';

@NgModule({
  declarations: [DataGridComponent, FindPathPipe],
  imports: [CommonModule],
  exports: [DataGridComponent, FindPathPipe]
})
export class SharedModule {}
