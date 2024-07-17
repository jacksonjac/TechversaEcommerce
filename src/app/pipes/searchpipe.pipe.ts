import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchpipe'
})
export class SearchpipePipe implements PipeTransform {
  transform(value: any[], searchText: string): any[] {
    if (!value) return [];
    if (!searchText) return value;

    // Remove unwanted characters from the search text
    searchText = searchText.toLowerCase().replace(/[_\-.]/g, '');

    return value.filter((item: any) => {
      // Remove unwanted characters from the item title
      const title = item.title.toLowerCase().replace(/[_\-.]/g, '');
      return title.includes(searchText);
    });
  }

}
