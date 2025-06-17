import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'impurePipe',
  pure: false
})
export class ImpurePipePipe implements PipeTransform {

  transform(todos: any[]): any[] {
    if (!todos) return [];

    return todos.map(todo => ({
      ...todo,
      completed: todo.completed ? '✅ Done' : '❌ Pending'
    }));
  }

}


@Pipe({
  name: 'impureJson',
  pure: false  // 👈 Impure pipe
})
export class ImpureJsonPipe implements PipeTransform {
  transform(value: any): string {
    return JSON.stringify(value);
  }
}


@Pipe({
  name: 'impureSearch',
  pure: false  // 👈 This makes it impure
})
export class ImpureSearchPipe implements PipeTransform {
  transform(items: any[], searchText: string, field: string): any[] {
    if (!items || !searchText) return items;

    return items.filter(item =>
      item[field].toLowerCase().includes(searchText.toLowerCase())
    );
  }
}