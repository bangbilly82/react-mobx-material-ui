import { observable, action } from "mobx";

export default class HeaderState {

  @observable title;
  @observable buttonLabel;

  constructor() {
    this.title = "Ovo";
    this.buttonLabel = "Sign up";
  }

  @action
  changeHeaderTitle (text) {
    this.title = this.title === 'Ovo' ? text : 'Ovo';
  }

}