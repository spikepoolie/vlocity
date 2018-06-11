
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter'
})

export class SearchUserPipe implements PipeTransform {
  transform(items: any[], term: any) {
    if (term === undefined) {
      return items;
  }

  return items.filter(function(item) {
    return item.name.toLowerCase().includes(term.toLowerCase)
  });
  }
}
