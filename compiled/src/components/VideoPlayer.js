"use strict";

var VideoPlayer = function VideoPlayer(props) {
  return React.createElement(
    "div",
    { className: "video-player" },
    React.createElement(
      "div",
      { className: "embed-responsive embed-responsive-16by9" },
      React.createElement("iframe", { className: "embed-responsive-item", src: props.video ? "https://www.youtube.com/embed/" + props.video.id.videoId : null, allowFullScreen: true })
    ),
    React.createElement(
      "div",
      { className: "video-player-details" },
      React.createElement(
        "h3",
        null,
        props.video ? props.video.snippet.title : 'Loading'
      ),
      React.createElement(
        "div",
        null,
        props.video ? props.video.snippet.description : 'keep waiting'
      )
    )
  );
};

VideoPlayer.propTypes = {
  video: React.PropTypes.object.isRequired
};

window.VideoPlayer = VideoPlayer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZpZGVvUGxheWVyLmpzeCJdLCJuYW1lcyI6WyJWaWRlb1BsYXllciIsInByb3BzIiwidmlkZW8iLCJpZCIsInZpZGVvSWQiLCJzbmlwcGV0IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInByb3BUeXBlcyIsIlJlYWN0IiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxjQUFjLFNBQWRBLFdBQWMsQ0FBQ0MsS0FBRDtBQUFBLFNBQ2hCO0FBQUE7QUFBQSxNQUFLLFdBQVUsY0FBZjtBQUNFO0FBQUE7QUFBQSxRQUFLLFdBQVUseUNBQWY7QUFDRSxzQ0FBUSxXQUFVLHVCQUFsQixFQUEwQyxLQUFLQSxNQUFNQyxLQUFOLHNDQUErQ0QsTUFBTUMsS0FBTixDQUFZQyxFQUFaLENBQWVDLE9BQTlELEdBQTBFLElBQXpILEVBQStILHFCQUEvSDtBQURGLEtBREY7QUFJRTtBQUFBO0FBQUEsUUFBSyxXQUFVLHNCQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUtILGNBQU1DLEtBQU4sR0FBY0QsTUFBTUMsS0FBTixDQUFZRyxPQUFaLENBQW9CQyxLQUFsQyxHQUEwQztBQUEvQyxPQURGO0FBRUU7QUFBQTtBQUFBO0FBQU1MLGNBQU1DLEtBQU4sR0FBY0QsTUFBTUMsS0FBTixDQUFZRyxPQUFaLENBQW9CRSxXQUFsQyxHQUFnRDtBQUF0RDtBQUZGO0FBSkYsR0FEZ0I7QUFBQSxDQUFsQjs7QUFZQVAsWUFBWVEsU0FBWixHQUF3QjtBQUN0Qk4sU0FBT08sTUFBTUMsU0FBTixDQUFnQkMsTUFBaEIsQ0FBdUJDO0FBRFIsQ0FBeEI7O0FBSUFDLE9BQU9iLFdBQVAsR0FBcUJBLFdBQXJCIiwiZmlsZSI6IlZpZGVvUGxheWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFZpZGVvUGxheWVyID0gKHByb3BzKSA9PihcbiAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlby1wbGF5ZXJcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImVtYmVkLXJlc3BvbnNpdmUgZW1iZWQtcmVzcG9uc2l2ZS0xNmJ5OVwiPlxuICAgICAgPGlmcmFtZSBjbGFzc05hbWU9XCJlbWJlZC1yZXNwb25zaXZlLWl0ZW1cIiBzcmM9e3Byb3BzLnZpZGVvID8gYGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLyR7cHJvcHMudmlkZW8uaWQudmlkZW9JZH1gIDogbnVsbH0gYWxsb3dGdWxsU2NyZWVuPjwvaWZyYW1lPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwidmlkZW8tcGxheWVyLWRldGFpbHNcIj5cbiAgICAgIDxoMz57cHJvcHMudmlkZW8gPyBwcm9wcy52aWRlby5zbmlwcGV0LnRpdGxlIDogJ0xvYWRpbmcnfTwvaDM+XG4gICAgICA8ZGl2Pntwcm9wcy52aWRlbyA/IHByb3BzLnZpZGVvLnNuaXBwZXQuZGVzY3JpcHRpb24gOiAna2VlcCB3YWl0aW5nJ308L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG5WaWRlb1BsYXllci5wcm9wVHlwZXMgPSB7XG4gIHZpZGVvOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5cbndpbmRvdy5WaWRlb1BsYXllciA9IFZpZGVvUGxheWVyO1xuIl19