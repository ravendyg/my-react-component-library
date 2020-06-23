import React from 'react';

var AnotherComponent = function (_a) {
    var text = _a.text, color = _a.color;
    return (React.createElement("div", { color: color }, text));
};

var MyComponent = function (_a) {
    var text = _a.text, color = _a.color;
    return (React.createElement("div", { color: color }, text));
};

export { AnotherComponent, MyComponent };
