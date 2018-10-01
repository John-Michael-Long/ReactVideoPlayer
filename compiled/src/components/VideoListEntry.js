"use strict";

var VideoListEntry = function VideoListEntry(props) {
  return React.createElement(
    "div",
    { className: "video-list-entry media" },
    React.createElement(
      "div",
      { className: "media-left media-middle" },
      React.createElement("img", { className: "media-object", src: props.video.snippet.thumbnails.default.url, alt: "" })
    ),
    React.createElement(
      "div",
      { className: "media-body" },
      React.createElement(
        "div",
        { onClick: function onClick() {
            props.onVideoClick(props.video);
          }, className: "video-list-entry-title" },
        props.video.snippet.title
      ),
      React.createElement(
        "div",
        { className: "video-list-entry-detail" },
        props.video.snippet.description
      )
    )
  );
};

VideoListEntry.propTypes = {
  video: React.PropTypes.object.isRequired
};

window.VideoListEntry = VideoListEntry;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1ZpZGVvTGlzdEVudHJ5LmpzeCJdLCJuYW1lcyI6WyJWaWRlb0xpc3RFbnRyeSIsInByb3BzIiwidmlkZW8iLCJzbmlwcGV0IiwidGh1bWJuYWlscyIsImRlZmF1bHQiLCJ1cmwiLCJvblZpZGVvQ2xpY2siLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicHJvcFR5cGVzIiwiUmVhY3QiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLGlCQUFpQixTQUFqQkEsY0FBaUIsQ0FBQ0MsS0FBRDtBQUFBLFNBQ25CO0FBQUE7QUFBQSxNQUFLLFdBQVUsd0JBQWY7QUFDRTtBQUFBO0FBQUEsUUFBSyxXQUFVLHlCQUFmO0FBQ0UsbUNBQUssV0FBVSxjQUFmLEVBQThCLEtBQUtBLE1BQU1DLEtBQU4sQ0FBWUMsT0FBWixDQUFvQkMsVUFBcEIsQ0FBK0JDLE9BQS9CLENBQXVDQyxHQUExRSxFQUErRSxLQUFJLEVBQW5GO0FBREYsS0FERjtBQUtFO0FBQUE7QUFBQSxRQUFLLFdBQVUsWUFBZjtBQUNFO0FBQUE7QUFBQSxVQUFLLFNBQVMsbUJBQU07QUFBRUwsa0JBQU1NLFlBQU4sQ0FBbUJOLE1BQU1DLEtBQXpCO0FBQWtDLFdBQXhELEVBQTBELFdBQVUsd0JBQXBFO0FBQThGRCxjQUFNQyxLQUFOLENBQVlDLE9BQVosQ0FBb0JLO0FBQWxILE9BREY7QUFFRTtBQUFBO0FBQUEsVUFBSyxXQUFVLHlCQUFmO0FBQTBDUCxjQUFNQyxLQUFOLENBQVlDLE9BQVosQ0FBb0JNO0FBQTlEO0FBRkY7QUFMRixHQURtQjtBQUFBLENBQXJCOztBQWFBVCxlQUFlVSxTQUFmLEdBQTJCO0FBQ3pCUixTQUFPUyxNQUFNQyxTQUFOLENBQWdCQyxNQUFoQixDQUF1QkM7QUFETCxDQUEzQjs7QUFJQUMsT0FBT2YsY0FBUCxHQUF3QkEsY0FBeEIiLCJmaWxlIjoiVmlkZW9MaXN0RW50cnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgVmlkZW9MaXN0RW50cnkgPSAocHJvcHMpID0+KFxuICA8ZGl2IGNsYXNzTmFtZT1cInZpZGVvLWxpc3QtZW50cnkgbWVkaWFcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWxlZnQgbWVkaWEtbWlkZGxlXCI+XG4gICAgICA8aW1nIGNsYXNzTmFtZT1cIm1lZGlhLW9iamVjdFwiIHNyYz17cHJvcHMudmlkZW8uc25pcHBldC50aHVtYm5haWxzLmRlZmF1bHQudXJsfSBhbHQ9XCJcIiAvPlxuICAgIFxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtYm9keVwiPlxuICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiB7IHByb3BzLm9uVmlkZW9DbGljayhwcm9wcy52aWRlbyk7IH19IGNsYXNzTmFtZT1cInZpZGVvLWxpc3QtZW50cnktdGl0bGVcIj57cHJvcHMudmlkZW8uc25pcHBldC50aXRsZX08L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlkZW8tbGlzdC1lbnRyeS1kZXRhaWxcIj57cHJvcHMudmlkZW8uc25pcHBldC5kZXNjcmlwdGlvbn08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG5WaWRlb0xpc3RFbnRyeS5wcm9wVHlwZXMgPSB7XG4gIHZpZGVvOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbn07XG5cbndpbmRvdy5WaWRlb0xpc3RFbnRyeSA9IFZpZGVvTGlzdEVudHJ5O1xuIl19