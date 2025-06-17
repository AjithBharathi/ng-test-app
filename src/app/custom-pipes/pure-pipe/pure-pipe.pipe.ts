import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'purePipe',
  pure: true  // ✅ This is the default; no need to write it
})
export class PurePipePipe implements PipeTransform {
  transform(completed: boolean): string {
    return completed ? '✅ Done' : '❌ Pending';
  }

}
