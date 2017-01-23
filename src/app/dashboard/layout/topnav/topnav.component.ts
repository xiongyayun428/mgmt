import { Component } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent {
  
  message: Array<any> = [];
  alter: Array<any> = [];
  main: Array<any> = [];

  constructor() {
    this.addMessage();
    this.addAlert();
    this.addMain();
  }
  
  addMessage() {
    this.message.push({
      image: 'http://i.huffpost.com/gadgets/slideshows/461162/slide_461162_6224974_sq50.jpg',
      head: 'XYY',
      date: '2017-01-01 12:00:00',
      body: 'this is test',
      url: 'aaaaa',
    });
    this.message.push({
      image: 'http://i.huffpost.com/gadgets/slideshows/461162/slide_461162_6224974_sq50.jpg',
      head: '亚运熊',
      date: '2017-01-01 12:00:00',
      body: '这就是一个测试而已，哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
      url: 'bbbbb',
    });
    this.message.push({
      image: 'http://i.huffpost.com/gadgets/slideshows/461162/slide_461162_6224974_sq50.jpg',
      head: '测试',
      date: '2017-01-01 12:00:00',
      body: '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
      url: 'cccc',
    });
  }
  
  addAlert() {
    this.alter.push({
      name: 'aaaaa',
      badge: '重要',
      url: 'cccc',
    });
    this.alter.push({
      name: 'bbbbbbbbbbb',
      badge: '一般',
      url: 'cccc',
    });
    this.alter.push({
      name: 'cccccccccccccccccc',
      badge: '加急',
      url: 'cccc',
    });
  }
  
  addMain() {
    this.main.push({
      name: 'Profile',
      routerLink: 'profile',
      className: 'fa fa-fw fa-user'
    });
    this.main.push({
      name: 'Settings',
      routerLink: 'settings',
      className: 'fa fa-fw fa-gear'
    });
    this.main.push({
      name: 'Inbox',
      routerLink: 'inbox',
      className: 'fa fa-fw fa-envelope'
    });
    this.main.push({
      name: 'Log Out',
      routerLink: 'logout',
      className: 'fa fa-fw fa-power-off'
    });
  }

  
  changeTheme(color: string): void {
    let link: any = $('<link>');
    link
      .appendTo('head')
      .attr({type : 'text/css', rel : 'stylesheet'})
      .attr('href', 'themes/app-' + color + '.css');
  }

  rtl(): void {
    let body: any = $('body');
    body.toggleClass('rtl');
  }

  sidebarToggler(): void  {
    let sidebar: any = $('#sidebar');
    let mainContainer: any = $('.main-container');
    sidebar.toggleClass('sidebar-left-zero');
    mainContainer.toggleClass('main-container-ml-zero');
  }

}
