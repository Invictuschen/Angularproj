import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-servers]',
  // template: `<app-server></app-server>
  //           <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  name = 'Zhouce';
  title = name;
  ServerCreationStatus = 'No server was created';
  Allowserver = true;
  ServerName = 'Test Server';
  ServerCreate = false;
  servers = [ 'Test server', 'Test server 2'];
  constructor()
  {
    setTimeout(() => {
      this.Allowserver = false;
    }, 2000 )
  }
  onCreateServer()
  {
    this.ServerCreationStatus = 'Server was created, the name is' + this.ServerName;
    this.servers.push(this.ServerName);
    this.ServerCreate = true;
  }

  ngOnInit() {
  }
  updateServer( event: Event )
  {
    this.ServerName = (<HTMLInputElement>event.target).value; // to inform typescript that we use htmlinputelement to bind the target value
  }
}
