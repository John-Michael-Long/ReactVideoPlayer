"use strict";

var Search = function Search(props) {
  return React.createElement(
    "div",
    { className: "search-bar form-inline" },
    React.createElement("input", { onChange: props.onTextChange, className: "form-control", type: "text" }),
    React.createElement(
      "button",
      { onClick: function onClick() {
          return props.onSearchClick(props.inputString);
        }, className: "btn hidden-sm-down" },
      React.createElement("span", { className: "glyphicon glyphicon-search" })
    )
  );
};

window.Search = Search;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1NlYXJjaC5qc3giXSwibmFtZXMiOlsiU2VhcmNoIiwicHJvcHMiLCJvblRleHRDaGFuZ2UiLCJvblNlYXJjaENsaWNrIiwiaW5wdXRTdHJpbmciLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsU0FBUyxTQUFUQSxNQUFTLENBQUNDLEtBQUQ7QUFBQSxTQUNYO0FBQUE7QUFBQSxNQUFLLFdBQVUsd0JBQWY7QUFDRSxtQ0FBTyxVQUFVQSxNQUFNQyxZQUF2QixFQUFxQyxXQUFVLGNBQS9DLEVBQThELE1BQUssTUFBbkUsR0FERjtBQUVFO0FBQUE7QUFBQSxRQUFRLFNBQVM7QUFBQSxpQkFBTUQsTUFBTUUsYUFBTixDQUFvQkYsTUFBTUcsV0FBMUIsQ0FBTjtBQUFBLFNBQWpCLEVBQStELFdBQVUsb0JBQXpFO0FBQ0Usb0NBQU0sV0FBVSw0QkFBaEI7QUFERjtBQUZGLEdBRFc7QUFBQSxDQUFiOztBQVNBQyxPQUFPTCxNQUFQLEdBQWdCQSxNQUFoQiIsImZpbGUiOiJTZWFyY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgU2VhcmNoID0gKHByb3BzKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWJhciBmb3JtLWlubGluZVwiPlxuICAgIDxpbnB1dCBvbkNoYW5nZT17cHJvcHMub25UZXh0Q2hhbmdlfSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwidGV4dFwiIC8+XG4gICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5vblNlYXJjaENsaWNrKHByb3BzLmlucHV0U3RyaW5nKX0gY2xhc3NOYW1lPVwiYnRuIGhpZGRlbi1zbS1kb3duXCI+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJnbHlwaGljb24gZ2x5cGhpY29uLXNlYXJjaFwiPjwvc3Bhbj5cbiAgICA8L2J1dHRvbj5cbiAgPC9kaXY+IFxuKTtcblxud2luZG93LlNlYXJjaCA9IFNlYXJjaDtcbiJdfQ==