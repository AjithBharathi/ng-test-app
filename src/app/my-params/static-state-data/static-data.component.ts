import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-static-data',
  templateUrl: './static-data.component.html',
  styleUrls: ['./static-data.component.scss']
})
export class StaticDataComponent {

  constructor(private route: ActivatedRoute) {
    const staticData = this.route.snapshot.data;
    console.log('Static Data:', staticData);

    this.route.data.subscribe(data => {
      console.log('Static Data (Observable):', data);
    });


    /////////////////////////////////////////////////////

    const state = history.state;
    console.log('State Data: ', state);


    /*
    ⚠️ Important Notes about "State"

    | Point           | Description                                                                                                   |
    | --------------- | ------------------------------------------------------------------------------------------------------------- |
    | 🔄 Not reactive | `history.state` is not an observable. You get it **once** at navigation time.                                 |
    | 🚫 Not in URL   | It won’t appear in the URL (unlike queryParams).                                                              |
    | 🔁 Refresh loss | If you refresh the page, the `state` will be lost — use services or state management if you need persistence. |

    ✅ When to Use It?

    Use state when:

    You pass temporary or sensitive data.
    You don’t want to show it in the URL.
    You only need it during initial component load.
    */


  }

}
