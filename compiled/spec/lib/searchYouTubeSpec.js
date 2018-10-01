'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var getURLSearchParams = function getURLSearchParams(url) {
  return url.split('?')[1].split('&').reduce(function (map, params) {
    var _params$split = params.split('='),
        _params$split2 = _slicedToArray(_params$split, 2),
        key = _params$split2[0],
        value = _params$split2[1];

    map[key] = value;
    return map;
  }, {});
};

var hasSameShape = function hasSameShape(objectOne, objectTwo) {
  if (Object.keys(objectOne).length !== Object.keys(objectTwo).length) {
    return false;
  }

  for (var key in objectOne) {
    if (!key in objectTwo) {
      return false;
    }

    if (_typeof(objectOne[key]) !== _typeof(objectTwo[key])) {
      return false;
    }

    if (Object.prototype.toString.call(objectOne[key]) === '[object Object]') {
      return hasSameShape(objectOne[key], objectTwo[key]);
    }
  }

  return true;
};

describe('searchYouTube', function () {
  var requests, xhr;

  beforeEach(function () {
    requests = [];
    xhr = sinon.useFakeXMLHttpRequest();
    xhr.onCreate = function (req) {
      requests.push(req);
    };
  });

  afterEach(function () {
    if (xhr.restore) {
      xhr.restore();
    }
  });

  it('should send a GET request', function () {
    searchYouTube({}, function () {});

    expect(requests[0].method).to.equal('GET');
  });

  it('should accept `key`, `query`, and `max` options and send them in GET request', function () {
    searchYouTube({ key: 'API_KEY', query: 'cats', max: 10 }, function () {});

    var params = getURLSearchParams(requests[0].url);
    expect(params.key).to.equal('API_KEY');
    expect(params.q).to.equal('cats');
    expect(params.maxResults).to.equal('10');
  });

  it('should GET videos with the same shape as `exampleVideoData`', function (done) {
    var options = {
      key: window.YOUTUBE_API_KEY,
      query: 'react',
      max: 5
    };

    xhr.restore();

    searchYouTube(options, function (data) {
      expect(hasSameShape(data, window.exampleVideoData)).to.be.true;
      done();
    });
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NwZWMvbGliL3NlYXJjaFlvdVR1YmVTcGVjLmpzIl0sIm5hbWVzIjpbImdldFVSTFNlYXJjaFBhcmFtcyIsInVybCIsInNwbGl0IiwicmVkdWNlIiwibWFwIiwicGFyYW1zIiwia2V5IiwidmFsdWUiLCJoYXNTYW1lU2hhcGUiLCJvYmplY3RPbmUiLCJvYmplY3RUd28iLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJjYWxsIiwiZGVzY3JpYmUiLCJyZXF1ZXN0cyIsInhociIsImJlZm9yZUVhY2giLCJzaW5vbiIsInVzZUZha2VYTUxIdHRwUmVxdWVzdCIsIm9uQ3JlYXRlIiwicmVxIiwicHVzaCIsImFmdGVyRWFjaCIsInJlc3RvcmUiLCJpdCIsInNlYXJjaFlvdVR1YmUiLCJleHBlY3QiLCJtZXRob2QiLCJ0byIsImVxdWFsIiwicXVlcnkiLCJtYXgiLCJxIiwibWF4UmVzdWx0cyIsImRvbmUiLCJvcHRpb25zIiwid2luZG93IiwiWU9VVFVCRV9BUElfS0VZIiwiZGF0YSIsImV4YW1wbGVWaWRlb0RhdGEiLCJiZSIsInRydWUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLElBQUlBLHFCQUFxQixTQUFyQkEsa0JBQXFCLENBQVNDLEdBQVQsRUFBYztBQUNyQyxTQUFPQSxJQUNKQyxLQURJLENBQ0UsR0FERixFQUNPLENBRFAsRUFFSkEsS0FGSSxDQUVFLEdBRkYsRUFHSkMsTUFISSxDQUdHLFVBQUNDLEdBQUQsRUFBTUMsTUFBTixFQUFpQjtBQUFBLHdCQUNKQSxPQUFPSCxLQUFQLENBQWEsR0FBYixDQURJO0FBQUE7QUFBQSxRQUNsQkksR0FEa0I7QUFBQSxRQUNiQyxLQURhOztBQUV2QkgsUUFBSUUsR0FBSixJQUFXQyxLQUFYO0FBQ0EsV0FBT0gsR0FBUDtBQUNELEdBUEksRUFPRixFQVBFLENBQVA7QUFRRCxDQVREOztBQVdBLElBQUlJLGVBQWUsU0FBZkEsWUFBZSxDQUFTQyxTQUFULEVBQW9CQyxTQUFwQixFQUErQjtBQUNoRCxNQUFJQyxPQUFPQyxJQUFQLENBQVlILFNBQVosRUFBdUJJLE1BQXZCLEtBQWtDRixPQUFPQyxJQUFQLENBQVlGLFNBQVosRUFBdUJHLE1BQTdELEVBQXFFO0FBQ25FLFdBQU8sS0FBUDtBQUNEOztBQUVELE9BQUssSUFBSVAsR0FBVCxJQUFnQkcsU0FBaEIsRUFBMkI7QUFDekIsUUFBSSxDQUFDSCxHQUFELElBQVFJLFNBQVosRUFBdUI7QUFDckIsYUFBTyxLQUFQO0FBQ0Q7O0FBRUQsUUFBSSxRQUFPRCxVQUFVSCxHQUFWLENBQVAsY0FBaUNJLFVBQVVKLEdBQVYsQ0FBakMsQ0FBSixFQUFxRDtBQUNuRCxhQUFPLEtBQVA7QUFDRDs7QUFFRCxRQUFJSyxPQUFPRyxTQUFQLENBQWlCQyxRQUFqQixDQUEwQkMsSUFBMUIsQ0FBK0JQLFVBQVVILEdBQVYsQ0FBL0IsTUFBbUQsaUJBQXZELEVBQTBFO0FBQ3hFLGFBQU9FLGFBQWFDLFVBQVVILEdBQVYsQ0FBYixFQUE2QkksVUFBVUosR0FBVixDQUE3QixDQUFQO0FBQ0Q7QUFDRjs7QUFFRCxTQUFPLElBQVA7QUFDRCxDQXBCRDs7QUFzQkFXLFNBQVMsZUFBVCxFQUEwQixZQUFXO0FBQ25DLE1BQUlDLFFBQUosRUFBY0MsR0FBZDs7QUFFQUMsYUFBVyxZQUFXO0FBQ3BCRixlQUFXLEVBQVg7QUFDQUMsVUFBTUUsTUFBTUMscUJBQU4sRUFBTjtBQUNBSCxRQUFJSSxRQUFKLEdBQWUsVUFBU0MsR0FBVCxFQUFjO0FBQUVOLGVBQVNPLElBQVQsQ0FBY0QsR0FBZDtBQUFxQixLQUFwRDtBQUNELEdBSkQ7O0FBTUFFLFlBQVUsWUFBVztBQUNuQixRQUFJUCxJQUFJUSxPQUFSLEVBQWlCO0FBQ2ZSLFVBQUlRLE9BQUo7QUFDRDtBQUNGLEdBSkQ7O0FBTUFDLEtBQUcsMkJBQUgsRUFBZ0MsWUFBVztBQUN6Q0Msa0JBQWMsRUFBZCxFQUFrQixZQUFNLENBQUUsQ0FBMUI7O0FBRUFDLFdBQU9aLFNBQVMsQ0FBVCxFQUFZYSxNQUFuQixFQUEyQkMsRUFBM0IsQ0FBOEJDLEtBQTlCLENBQW9DLEtBQXBDO0FBQ0QsR0FKRDs7QUFNQUwsS0FBRyw4RUFBSCxFQUFtRixZQUFXO0FBQzVGQyxrQkFBYyxFQUFFdkIsS0FBSyxTQUFQLEVBQWtCNEIsT0FBTyxNQUF6QixFQUFpQ0MsS0FBSyxFQUF0QyxFQUFkLEVBQTBELFlBQU0sQ0FBRSxDQUFsRTs7QUFFQSxRQUFJOUIsU0FBU0wsbUJBQW1Ca0IsU0FBUyxDQUFULEVBQVlqQixHQUEvQixDQUFiO0FBQ0E2QixXQUFPekIsT0FBT0MsR0FBZCxFQUFtQjBCLEVBQW5CLENBQXNCQyxLQUF0QixDQUE0QixTQUE1QjtBQUNBSCxXQUFPekIsT0FBTytCLENBQWQsRUFBaUJKLEVBQWpCLENBQW9CQyxLQUFwQixDQUEwQixNQUExQjtBQUNBSCxXQUFPekIsT0FBT2dDLFVBQWQsRUFBMEJMLEVBQTFCLENBQTZCQyxLQUE3QixDQUFtQyxJQUFuQztBQUNELEdBUEQ7O0FBVUFMLEtBQUcsNkRBQUgsRUFBa0UsVUFBU1UsSUFBVCxFQUFlO0FBQy9FLFFBQUlDLFVBQVU7QUFDWmpDLFdBQUtrQyxPQUFPQyxlQURBO0FBRVpQLGFBQU8sT0FGSztBQUdaQyxXQUFLO0FBSE8sS0FBZDs7QUFNQWhCLFFBQUlRLE9BQUo7O0FBRUFFLGtCQUFjVSxPQUFkLEVBQXVCLFVBQUNHLElBQUQsRUFBVTtBQUMvQlosYUFBT3RCLGFBQWFrQyxJQUFiLEVBQW1CRixPQUFPRyxnQkFBMUIsQ0FBUCxFQUFvRFgsRUFBcEQsQ0FBdURZLEVBQXZELENBQTBEQyxJQUExRDtBQUNBUDtBQUNELEtBSEQ7QUFJRCxHQWJEO0FBY0QsQ0E3Q0QiLCJmaWxlIjoic2VhcmNoWW91VHViZVNwZWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZ2V0VVJMU2VhcmNoUGFyYW1zID0gZnVuY3Rpb24odXJsKSB7XG4gIHJldHVybiB1cmxcbiAgICAuc3BsaXQoJz8nKVsxXVxuICAgIC5zcGxpdCgnJicpXG4gICAgLnJlZHVjZSgobWFwLCBwYXJhbXMpID0+IHtcbiAgICAgIHZhciBba2V5LCB2YWx1ZV0gPSBwYXJhbXMuc3BsaXQoJz0nKTtcbiAgICAgIG1hcFtrZXldID0gdmFsdWU7XG4gICAgICByZXR1cm4gbWFwO1xuICAgIH0sIHt9KTtcbn07XG5cbnZhciBoYXNTYW1lU2hhcGUgPSBmdW5jdGlvbihvYmplY3RPbmUsIG9iamVjdFR3bykge1xuICBpZiAoT2JqZWN0LmtleXMob2JqZWN0T25lKS5sZW5ndGggIT09IE9iamVjdC5rZXlzKG9iamVjdFR3bykubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZm9yICh2YXIga2V5IGluIG9iamVjdE9uZSkge1xuICAgIGlmICgha2V5IGluIG9iamVjdFR3bykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygb2JqZWN0T25lW2tleV0gIT09IHR5cGVvZiBvYmplY3RUd29ba2V5XSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqZWN0T25lW2tleV0pID09PSAnW29iamVjdCBPYmplY3RdJykge1xuICAgICAgcmV0dXJuIGhhc1NhbWVTaGFwZShvYmplY3RPbmVba2V5XSwgb2JqZWN0VHdvW2tleV0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuZGVzY3JpYmUoJ3NlYXJjaFlvdVR1YmUnLCBmdW5jdGlvbigpIHtcbiAgdmFyIHJlcXVlc3RzLCB4aHI7XG5cbiAgYmVmb3JlRWFjaChmdW5jdGlvbigpIHtcbiAgICByZXF1ZXN0cyA9IFtdO1xuICAgIHhociA9IHNpbm9uLnVzZUZha2VYTUxIdHRwUmVxdWVzdCgpO1xuICAgIHhoci5vbkNyZWF0ZSA9IGZ1bmN0aW9uKHJlcSkgeyByZXF1ZXN0cy5wdXNoKHJlcSk7IH07XG4gIH0pO1xuXG4gIGFmdGVyRWFjaChmdW5jdGlvbigpIHtcbiAgICBpZiAoeGhyLnJlc3RvcmUpIHtcbiAgICAgIHhoci5yZXN0b3JlKCk7XG4gICAgfVxuICB9KTtcblxuICBpdCgnc2hvdWxkIHNlbmQgYSBHRVQgcmVxdWVzdCcsIGZ1bmN0aW9uKCkge1xuICAgIHNlYXJjaFlvdVR1YmUoe30sICgpID0+IHt9KTtcblxuICAgIGV4cGVjdChyZXF1ZXN0c1swXS5tZXRob2QpLnRvLmVxdWFsKCdHRVQnKTtcbiAgfSk7XG5cbiAgaXQoJ3Nob3VsZCBhY2NlcHQgYGtleWAsIGBxdWVyeWAsIGFuZCBgbWF4YCBvcHRpb25zIGFuZCBzZW5kIHRoZW0gaW4gR0VUIHJlcXVlc3QnLCBmdW5jdGlvbigpIHtcbiAgICBzZWFyY2hZb3VUdWJlKHsga2V5OiAnQVBJX0tFWScsIHF1ZXJ5OiAnY2F0cycsIG1heDogMTAgfSwgKCkgPT4ge30pO1xuXG4gICAgdmFyIHBhcmFtcyA9IGdldFVSTFNlYXJjaFBhcmFtcyhyZXF1ZXN0c1swXS51cmwpO1xuICAgIGV4cGVjdChwYXJhbXMua2V5KS50by5lcXVhbCgnQVBJX0tFWScpO1xuICAgIGV4cGVjdChwYXJhbXMucSkudG8uZXF1YWwoJ2NhdHMnKTtcbiAgICBleHBlY3QocGFyYW1zLm1heFJlc3VsdHMpLnRvLmVxdWFsKCcxMCcpO1xuICB9KTtcblxuXG4gIGl0KCdzaG91bGQgR0VUIHZpZGVvcyB3aXRoIHRoZSBzYW1lIHNoYXBlIGFzIGBleGFtcGxlVmlkZW9EYXRhYCcsIGZ1bmN0aW9uKGRvbmUpIHtcbiAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgIGtleTogd2luZG93LllPVVRVQkVfQVBJX0tFWSxcbiAgICAgIHF1ZXJ5OiAncmVhY3QnLFxuICAgICAgbWF4OiA1XG4gICAgfTtcblxuICAgIHhoci5yZXN0b3JlKCk7XG5cbiAgICBzZWFyY2hZb3VUdWJlKG9wdGlvbnMsIChkYXRhKSA9PiB7XG4gICAgICBleHBlY3QoaGFzU2FtZVNoYXBlKGRhdGEsIHdpbmRvdy5leGFtcGxlVmlkZW9EYXRhKSkudG8uYmUudHJ1ZTtcbiAgICAgIGRvbmUoKTtcbiAgICB9KTtcbiAgfSk7XG59KTsiXX0=