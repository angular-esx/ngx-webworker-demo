var NG_CORE = require("angular2/core");

function _basicComponent() {
  var _PROP_CLASSES = ['color', 'state'];

  this.constructor = [
    NG_CORE.ElementRef,
    NG_CORE.Renderer,

    function (elementRef, renderer) {
      this.elementRef = elementRef;
      this.renderer = renderer;

      this.classes =  {};
    }
  ];

  this.ngOnChanges = function (changeRecord) {
    for (var i = 0; i < _PROP_CLASSES.length; i++) {
      if(changeRecord[_PROP_CLASSES[i]]){
        this.setClasses();
        break;
      }
    }
  };

  this.ngAfterViewInit = function () {
    this.renderer.setElementStyle(this.contentElement, 'padding', '10px');
  };

  this.setClasses = function () {
    var _classes = {},
        _prop_class;
    
    for (var i = 0; i < _PROP_CLASSES.length; i++) {
      _prop_class = _PROP_CLASSES[i];

      if(this[_prop_class]) { _classes[_prop_class + '-' + this[_prop_class]] = true; }
    }

    this.classes = _classes;

    console.log(this.classes);
  };
}

module.exports = NG_CORE.Component({
  selector: 'basic-component',
  template: '<div #content [ngClass]="classes"><ng-content></ng-content></div>',
  styleUrls: ['app/component.css'],
  properties: ['color', 'state'],
  queries: {
    contentElement: new NG_CORE.ViewChild('content', { read: NG_CORE.ElementRef })
  }
})
.Class(new _basicComponent());