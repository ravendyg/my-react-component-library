'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var MyComponent = function (_a) {
    var text = _a.text, color = _a.color;
    return (React.createElement("div", { color: color }, text));
};

exports.MyComponent = MyComponent;
