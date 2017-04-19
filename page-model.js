import { Selector } from 'testcafe';

export default class Page {
  constructor() {
    this.h1 = Selector('h1');
    this.h3 = Selector('h3');
    this.li = Selector('li');
    this.a = Selector('a');
    this.img = Selector('img');
    this.input = Selector('input');
    this.text01 = Selector('#text01');
    this.text02 = Selector('#text02');
    this.content = Selector('#content');
    this.subpageNav = Selector('#subpage-nav');
    this.subpagesA = Selector('#subpages a');
    this.pageSet1 = Selector('#page-set-1');
    this.pageSet2 = Selector('#page-set-2');
    this.pageSet3 = Selector('#page-set-3');
    this.zoekA = Selector('.zoek a');
    this.author = Selector('.author')
    this.menuA = Selector('.menu a');
    this.modal = Selector('.modal');
    this.nameInput = Selector('input[name=name]');
    this.passwordInput = Selector('input[name=password]');
    this.submitInput = Selector('input[type=submit]');
    this.editAddUnder = Selector('#edit-menu-div a[href$="?edit=page-new&depth=1"]');
    this.editNewMenuTitleInput = Selector('input[name=new_menu_title]');
    this.editNewUrlInput = Selector('input[name=new_url]');
    this.editRemoveConfirmLink = Selector('.edit a[href*="confirm=true"]');
  }
}
