"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      videos: _this.props.videos,
      selectedVideo: null,
      inputString: '',
      timeoutID: null
    };
    _this.searchYouTube = function (searchString) {
      var options = {
        query: searchString,
        key: YOUTUBE_API_KEY,
        max: 5
      };
      _this.props.searchYouTube(options, function (data) {
        _this.setState({
          videos: data,
          selectedVideo: data.length ? data[0] : null
        });
      });
    };
    return _this;
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {

      this.searchYouTube(this.state.inputString);
    }
  }, {
    key: "handleVideoListEntryClick",
    value: function handleVideoListEntryClick(video) {
      this.setState({
        selectedVideo: video
      });
    }
  }, {
    key: "handleSearchClick",
    value: function handleSearchClick(searchString) {
      if (this.state.timeoutID) {
        clearTimeout(this.state.timeoutID);
      }
      this.searchYouTube(searchString);
    }
  }, {
    key: "handleSearchTextChange",
    value: function handleSearchTextChange(event) {
      if (this.state.timeoutID) {
        clearTimeout(this.state.timeoutID);
      }
      this.setState({
        inputString: event.target.value,
        timeoutID: setTimeout(this.searchYouTube.bind(this, event.target.value), 500)
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "nav",
          { className: "navbar" },
          React.createElement(
            "div",
            { className: "col-md-6 offset-md-3" },
            React.createElement(Search, { onSearchClick: this.handleSearchClick.bind(this), onTextChange: this.handleSearchTextChange.bind(this), inputString: this.state.inputString })
          )
        ),
        React.createElement(
          "div",
          { className: "row" },
          React.createElement(
            "div",
            { className: "col-md-7" },
            React.createElement(VideoPlayer, { video: this.state.selectedVideo })
          ),
          React.createElement(
            "div",
            { className: "col-md-5" },
            React.createElement(
              "div",
              { className: "videoListClass" },
              React.createElement(VideoList, { onVideoClick: this.handleVideoListEntryClick.bind(this), videos: this.state.videos })
            )
          )
        )
      );
    }
  }]);

  return App;
}(React.Component);

window.App = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsInZpZGVvcyIsInNlbGVjdGVkVmlkZW8iLCJpbnB1dFN0cmluZyIsInRpbWVvdXRJRCIsInNlYXJjaFlvdVR1YmUiLCJzZWFyY2hTdHJpbmciLCJvcHRpb25zIiwicXVlcnkiLCJrZXkiLCJZT1VUVUJFX0FQSV9LRVkiLCJtYXgiLCJkYXRhIiwic2V0U3RhdGUiLCJsZW5ndGgiLCJ2aWRlbyIsImNsZWFyVGltZW91dCIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJzZXRUaW1lb3V0IiwiYmluZCIsImhhbmRsZVNlYXJjaENsaWNrIiwiaGFuZGxlU2VhcmNoVGV4dENoYW5nZSIsImhhbmRsZVZpZGVvTGlzdEVudHJ5Q2xpY2siLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxHOzs7QUFDSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEdBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxjQUFRLE1BQUtGLEtBQUwsQ0FBV0UsTUFEUjtBQUVYQyxxQkFBZSxJQUZKO0FBR1hDLG1CQUFhLEVBSEY7QUFJWEMsaUJBQVc7QUFKQSxLQUFiO0FBTUEsVUFBS0MsYUFBTCxHQUFxQixVQUFDQyxZQUFELEVBQWtCO0FBQ3JDLFVBQUlDLFVBQVU7QUFDWkMsZUFBT0YsWUFESztBQUVaRyxhQUFLQyxlQUZPO0FBR1pDLGFBQUs7QUFITyxPQUFkO0FBS0EsWUFBS1osS0FBTCxDQUFXTSxhQUFYLENBQXlCRSxPQUF6QixFQUFrQyxVQUFDSyxJQUFELEVBQVU7QUFDMUMsY0FBS0MsUUFBTCxDQUFjO0FBQ1paLGtCQUFRVyxJQURJO0FBRVpWLHlCQUFlVSxLQUFLRSxNQUFMLEdBQWNGLEtBQUssQ0FBTCxDQUFkLEdBQXdCO0FBRjNCLFNBQWQ7QUFJRCxPQUxEO0FBTUQsS0FaRDtBQVJpQjtBQXFCbEI7Ozs7d0NBRW1COztBQUVsQixXQUFLUCxhQUFMLENBQW1CLEtBQUtMLEtBQUwsQ0FBV0csV0FBOUI7QUFDRDs7OzhDQUV5QlksSyxFQUFPO0FBQy9CLFdBQUtGLFFBQUwsQ0FBYztBQUNaWCx1QkFBZWE7QUFESCxPQUFkO0FBR0Q7OztzQ0FFaUJULFksRUFBYztBQUM5QixVQUFJLEtBQUtOLEtBQUwsQ0FBV0ksU0FBZixFQUEwQjtBQUN4QlkscUJBQWEsS0FBS2hCLEtBQUwsQ0FBV0ksU0FBeEI7QUFDRDtBQUNELFdBQUtDLGFBQUwsQ0FBbUJDLFlBQW5CO0FBQ0Q7OzsyQ0FFc0JXLEssRUFBTztBQUM1QixVQUFJLEtBQUtqQixLQUFMLENBQVdJLFNBQWYsRUFBMEI7QUFDeEJZLHFCQUFhLEtBQUtoQixLQUFMLENBQVdJLFNBQXhCO0FBQ0Q7QUFDRCxXQUFLUyxRQUFMLENBQWM7QUFDWlYscUJBQWFjLE1BQU1DLE1BQU4sQ0FBYUMsS0FEZDtBQUVaZixtQkFBV2dCLFdBQVcsS0FBS2YsYUFBTCxDQUFtQmdCLElBQW5CLENBQXdCLElBQXhCLEVBQThCSixNQUFNQyxNQUFOLENBQWFDLEtBQTNDLENBQVgsRUFBOEQsR0FBOUQ7QUFGQyxPQUFkO0FBSUQ7Ozs2QkFFUTtBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQUssV0FBVSxRQUFmO0FBQ0U7QUFBQTtBQUFBLGNBQUssV0FBVSxzQkFBZjtBQUNFLGdDQUFDLE1BQUQsSUFBUSxlQUFlLEtBQUtHLGlCQUFMLENBQXVCRCxJQUF2QixDQUE0QixJQUE1QixDQUF2QixFQUEwRCxjQUFjLEtBQUtFLHNCQUFMLENBQTRCRixJQUE1QixDQUFpQyxJQUFqQyxDQUF4RSxFQUFnSCxhQUFhLEtBQUtyQixLQUFMLENBQVdHLFdBQXhJO0FBREY7QUFERixTQURGO0FBTUU7QUFBQTtBQUFBLFlBQUssV0FBVSxLQUFmO0FBQ0U7QUFBQTtBQUFBLGNBQUssV0FBVSxVQUFmO0FBQ0UsZ0NBQUMsV0FBRCxJQUFhLE9BQU8sS0FBS0gsS0FBTCxDQUFXRSxhQUEvQjtBQURGLFdBREY7QUFJRTtBQUFBO0FBQUEsY0FBSyxXQUFVLFVBQWY7QUFDRTtBQUFBO0FBQUEsZ0JBQUssV0FBWSxnQkFBakI7QUFDRSxrQ0FBQyxTQUFELElBQVcsY0FBYyxLQUFLc0IseUJBQUwsQ0FBK0JILElBQS9CLENBQW9DLElBQXBDLENBQXpCLEVBQW9FLFFBQVEsS0FBS3JCLEtBQUwsQ0FBV0MsTUFBdkY7QUFERjtBQURGO0FBSkY7QUFORixPQURGO0FBbUJEOzs7O0VBeEVld0IsTUFBTUMsUzs7QUEyRXhCQyxPQUFPN0IsR0FBUCxHQUFhQSxHQUFiIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB2aWRlb3M6IHRoaXMucHJvcHMudmlkZW9zLFxuICAgICAgc2VsZWN0ZWRWaWRlbzogbnVsbCxcbiAgICAgIGlucHV0U3RyaW5nOiAnJyxcbiAgICAgIHRpbWVvdXRJRDogbnVsbFxuICAgIH07XG4gICAgdGhpcy5zZWFyY2hZb3VUdWJlID0gKHNlYXJjaFN0cmluZykgPT4ge1xuICAgICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgIHF1ZXJ5OiBzZWFyY2hTdHJpbmcsXG4gICAgICAgIGtleTogWU9VVFVCRV9BUElfS0VZLFxuICAgICAgICBtYXg6IDVcbiAgICAgIH07XG4gICAgICB0aGlzLnByb3BzLnNlYXJjaFlvdVR1YmUob3B0aW9ucywgKGRhdGEpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgdmlkZW9zOiBkYXRhLFxuICAgICAgICAgIHNlbGVjdGVkVmlkZW86IGRhdGEubGVuZ3RoID8gZGF0YVswXSA6IG51bGwgXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfVxuICBcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgXG4gICAgdGhpcy5zZWFyY2hZb3VUdWJlKHRoaXMuc3RhdGUuaW5wdXRTdHJpbmcpO1xuICB9XG4gIFxuICBoYW5kbGVWaWRlb0xpc3RFbnRyeUNsaWNrKHZpZGVvKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzZWxlY3RlZFZpZGVvOiB2aWRlb1xuICAgIH0pO1xuICB9XG4gIFxuICBoYW5kbGVTZWFyY2hDbGljayhzZWFyY2hTdHJpbmcpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS50aW1lb3V0SUQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnN0YXRlLnRpbWVvdXRJRCk7XG4gICAgfVxuICAgIHRoaXMuc2VhcmNoWW91VHViZShzZWFyY2hTdHJpbmcpO1xuICB9XG4gIFxuICBoYW5kbGVTZWFyY2hUZXh0Q2hhbmdlKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuc3RhdGUudGltZW91dElEKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5zdGF0ZS50aW1lb3V0SUQpO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlucHV0U3RyaW5nOiBldmVudC50YXJnZXQudmFsdWUsICBcbiAgICAgIHRpbWVvdXRJRDogc2V0VGltZW91dCh0aGlzLnNlYXJjaFlvdVR1YmUuYmluZCh0aGlzLCBldmVudC50YXJnZXQudmFsdWUpLCA1MDApXG4gICAgfSk7ICAgICBcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IG9mZnNldC1tZC0zXCI+XG4gICAgICAgICAgICA8U2VhcmNoIG9uU2VhcmNoQ2xpY2s9e3RoaXMuaGFuZGxlU2VhcmNoQ2xpY2suYmluZCh0aGlzKX0gb25UZXh0Q2hhbmdlPXt0aGlzLmhhbmRsZVNlYXJjaFRleHRDaGFuZ2UuYmluZCh0aGlzKX0gaW5wdXRTdHJpbmc9e3RoaXMuc3RhdGUuaW5wdXRTdHJpbmd9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmF2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPiAgIFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTdcIj5cbiAgICAgICAgICAgIDxWaWRlb1BsYXllciB2aWRlbz17dGhpcy5zdGF0ZS5zZWxlY3RlZFZpZGVvfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJ2aWRlb0xpc3RDbGFzc1wiPlxuICAgICAgICAgICAgICA8VmlkZW9MaXN0IG9uVmlkZW9DbGljaz17dGhpcy5oYW5kbGVWaWRlb0xpc3RFbnRyeUNsaWNrLmJpbmQodGhpcyl9IHZpZGVvcz17dGhpcy5zdGF0ZS52aWRlb3N9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9IFxufVxuXG53aW5kb3cuQXBwID0gQXBwO1xuIl19