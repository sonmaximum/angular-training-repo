import { Pipe, PipeTransform } from '@angular/core';
import {get} from 'lodash';

@Pipe({
  name: 'findPath'
})
export class FindPathPipe implements PipeTransform {

  transform(target: any, path: string, defaultVal=""): any {
    return get(target, path, defaultVal);
  }

}
