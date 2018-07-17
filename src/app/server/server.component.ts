import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
    serverId = 100;
    serverStatus: string = 'Offline';
    constructor(){
      this.serverStatus = Math.random() > 0.5 ? 'Online' : 'Offline';
    }

    getServerstatus()
    {
      return this.serverStatus;
    }
    getColor()
    {
      return (this.serverStatus === 'Online' ? 'green' : 'red');
    }
}
