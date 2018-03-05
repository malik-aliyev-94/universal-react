import { observable, computed, action } from 'mobx';
import { config } from '../../config';

class AppStore {
  @observable data;

  constructor() {
    this.data = {
      title: "Universal React"
    }
  }

}

export default new AppStore();
