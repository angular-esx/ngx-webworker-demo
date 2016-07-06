var NG_CORE = require("angular2/core");
var BASIC_COMPONENT = require("./component");

function _demoComponent() {
  this.constructor = function () {
    this.color = 'blue';
    this.state = 'disabled';

    var _self = this;
    setTimeout(function() {
      _self.color = 'red';
      _self.state = '';
    }, 2 * 1000);
  };
}

module.exports = NG_CORE.Component({
  selector: 'demo-component',
  template: [
    '<basic-component [color]="color" [state]="state">',
      'Basic Component',
    '</basic-component>'
  ].join(''),
  directives: [BASIC_COMPONENT]
})
.Class(new _demoComponent());