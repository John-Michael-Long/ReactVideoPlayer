"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Wrapper = function (_React$Component) {
  _inherits(Wrapper, _React$Component);

  function Wrapper() {
    _classCallCheck(this, Wrapper);

    return _possibleConstructorReturn(this, (Wrapper.__proto__ || Object.getPrototypeOf(Wrapper)).apply(this, arguments));
  }

  _createClass(Wrapper, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        this.props.children
      );
    }
  }]);

  return Wrapper;
}(React.Component);

window.Wrapper = Wrapper;

// NOTE: In order to leverage React's test utility function `findRenderedDOMComponentWithClass`
// for stateless functional components, must wrap them in a class component
// Wrapper.jsx defined a Wrapper component to use in tests: https://github.com/facebook/react/issues/4972
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NwZWMvY29tcG9uZW50cy9XcmFwcGVyLmpzeCJdLCJuYW1lcyI6WyJXcmFwcGVyIiwicHJvcHMiLCJjaGlsZHJlbiIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLE87Ozs7Ozs7Ozs7OzZCQUNLO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFBTSxhQUFLQyxLQUFMLENBQVdDO0FBQWpCLE9BREY7QUFHRDs7OztFQUxtQkMsTUFBTUMsUzs7QUFRNUJDLE9BQU9MLE9BQVAsR0FBaUJBLE9BQWpCOztBQUVBO0FBQ0E7QUFDQSIsImZpbGUiOiJXcmFwcGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgV3JhcHBlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj57dGhpcy5wcm9wcy5jaGlsZHJlbn08L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbndpbmRvdy5XcmFwcGVyID0gV3JhcHBlcjtcblxuLy8gTk9URTogSW4gb3JkZXIgdG8gbGV2ZXJhZ2UgUmVhY3QncyB0ZXN0IHV0aWxpdHkgZnVuY3Rpb24gYGZpbmRSZW5kZXJlZERPTUNvbXBvbmVudFdpdGhDbGFzc2Bcbi8vIGZvciBzdGF0ZWxlc3MgZnVuY3Rpb25hbCBjb21wb25lbnRzLCBtdXN0IHdyYXAgdGhlbSBpbiBhIGNsYXNzIGNvbXBvbmVudFxuLy8gV3JhcHBlci5qc3ggZGVmaW5lZCBhIFdyYXBwZXIgY29tcG9uZW50IHRvIHVzZSBpbiB0ZXN0czogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy80OTcyIl19