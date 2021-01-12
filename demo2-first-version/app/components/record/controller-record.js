import ModelRecord from './model-record.js';
import ViewRecord from './view-record.js';

export default class ControllerRecord {
  constructor({notify}) {
    this.model = new ModelRecord();
    this.view = new ViewRecord(this.onSort, this.onSearch);

    this.init();
    this.notify = notify;
  }

  init = async () => {
    await this.model.getRecords()
            .then(({ records, categories }) => {
                this.view.render(records, categories.slice(1));
                this.notify('LOADED_DATA', records);
            });
    }

  onSort = (e) => {
        const records = this.model.sort(e.target.dataset.type);
        const categ = this.model.categories;
        this.view.render(records, categ);
      }
    
  onSearch = (e) => {
        const records = this.model.search(e.target.value);
        const categ = this.model.categories;
        this.view.render(records,categ);
      }

  onFilter = (e) => {
        console.log(e.target.type);
        const filteredData = this.model.filter(e.target.type);
    
        this.notify(this.events.AFTER_FILTER, filteredData);
      }
}