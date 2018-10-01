'use strict';

var searchYouTube = function searchYouTube(options, callback) {

  var url = 'https://www.googleapis.com/youtube/v3/search';
  $.ajax({
    url: url,
    type: 'GET',
    contentType: 'application/json',
    key: options.key,
    data: {
      key: options.key,
      part: 'snippet',
      q: options.query,
      maxResults: options.max || 5,
      type: 'video',
      embeddable: 'true'
    },
    success: function success(data) {

      data = data.items;
      console.log('Successfully fetched video list');
      return callback ? callback(data) : data;
    },
    error: function error(data) {
      console.error('Failed to fetch video list');
    }
  });
};

window.searchYouTube = searchYouTube;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvc2VhcmNoWW91VHViZS5qcyJdLCJuYW1lcyI6WyJzZWFyY2hZb3VUdWJlIiwib3B0aW9ucyIsImNhbGxiYWNrIiwidXJsIiwiJCIsImFqYXgiLCJ0eXBlIiwiY29udGVudFR5cGUiLCJrZXkiLCJkYXRhIiwicGFydCIsInEiLCJxdWVyeSIsIm1heFJlc3VsdHMiLCJtYXgiLCJlbWJlZGRhYmxlIiwic3VjY2VzcyIsIml0ZW1zIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLGdCQUFnQixTQUFoQkEsYUFBZ0IsQ0FBQ0MsT0FBRCxFQUFVQyxRQUFWLEVBQXVCOztBQUV6QyxNQUFJQyxNQUFNLDhDQUFWO0FBQ0FDLElBQUVDLElBQUYsQ0FBTztBQUNMRixTQUFLQSxHQURBO0FBRUxHLFVBQU0sS0FGRDtBQUdMQyxpQkFBYSxrQkFIUjtBQUlMQyxTQUFLUCxRQUFRTyxHQUpSO0FBS0xDLFVBQU07QUFDSkQsV0FBS1AsUUFBUU8sR0FEVDtBQUVKRSxZQUFNLFNBRkY7QUFHSkMsU0FBR1YsUUFBUVcsS0FIUDtBQUlKQyxrQkFBWVosUUFBUWEsR0FBUixJQUFlLENBSnZCO0FBS0pSLFlBQU0sT0FMRjtBQU1KUyxrQkFBWTtBQU5SLEtBTEQ7QUFhTEMsYUFBUyxpQkFBU1AsSUFBVCxFQUFlOztBQUV0QkEsYUFBT0EsS0FBS1EsS0FBWjtBQUNBQyxjQUFRQyxHQUFSLENBQVksaUNBQVo7QUFDQSxhQUFPakIsV0FBV0EsU0FBU08sSUFBVCxDQUFYLEdBQTRCQSxJQUFuQztBQUNELEtBbEJJO0FBbUJMVyxXQUFPLGVBQVNYLElBQVQsRUFBZTtBQUNwQlMsY0FBUUUsS0FBUixDQUFjLDRCQUFkO0FBQ0Q7QUFyQkksR0FBUDtBQXVCRCxDQTFCRDs7QUE0QkFDLE9BQU9yQixhQUFQLEdBQXVCQSxhQUF2QiIsImZpbGUiOiJzZWFyY2hZb3VUdWJlLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHNlYXJjaFlvdVR1YmUgPSAob3B0aW9ucywgY2FsbGJhY2spID0+IHtcblxuICB2YXIgdXJsID0gJ2h0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL3lvdXR1YmUvdjMvc2VhcmNoJztcbiAgJC5hamF4KHtcbiAgICB1cmw6IHVybCxcbiAgICB0eXBlOiAnR0VUJyxcbiAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIGtleTogb3B0aW9ucy5rZXksXG4gICAgZGF0YToge1xuICAgICAga2V5OiBvcHRpb25zLmtleSxcbiAgICAgIHBhcnQ6ICdzbmlwcGV0JyxcbiAgICAgIHE6IG9wdGlvbnMucXVlcnksXG4gICAgICBtYXhSZXN1bHRzOiBvcHRpb25zLm1heCB8fCA1LFxuICAgICAgdHlwZTogJ3ZpZGVvJyxcbiAgICAgIGVtYmVkZGFibGU6ICd0cnVlJ1xuICAgIH0sXG4gICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgXG4gICAgICBkYXRhID0gZGF0YS5pdGVtcztcbiAgICAgIGNvbnNvbGUubG9nKCdTdWNjZXNzZnVsbHkgZmV0Y2hlZCB2aWRlbyBsaXN0Jyk7XG4gICAgICByZXR1cm4gY2FsbGJhY2sgPyBjYWxsYmFjayhkYXRhKSA6IGRhdGE7XG4gICAgfSxcbiAgICBlcnJvcjogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGZldGNoIHZpZGVvIGxpc3QnKTtcbiAgICB9XG4gIH0pO1xufTtcblxud2luZG93LnNlYXJjaFlvdVR1YmUgPSBzZWFyY2hZb3VUdWJlO1xuIl19