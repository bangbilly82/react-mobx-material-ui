import { observable } from "mobx";

export default class CardState {

  @observable title;
  @observable description;

  constructor() {
    this.title = "This is card title";
    this.description = "Card Description";
  }

}