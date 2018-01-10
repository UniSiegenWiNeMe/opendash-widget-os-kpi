export default class SettingsController {

  static $inject = ['od.data.service', 'lodash'];

  constructor($data, _) {
    let items = $data.listByType('Number');

    this.devices = _.map(items, item => {
      return {
        value: [item[0].id, item[1]],
        name: `${item[0].name} - ${item[0].valueTypes[item[1]].name}`,
      };
    });
  }
}