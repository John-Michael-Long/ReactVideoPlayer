var getURLSearchParams = function(url) {
  return url
    .split('?')[1]
    .split('&')
    .reduce((map, params) => {
      var [key, value] = params.split('=');
      map[key] = value;
      return map;
    }, {});
};

var hasSameShape = function(objectOne, objectTwo) {
  if (Object.keys(objectOne).length !== Object.keys(objectTwo).length) {
    return false;
  }

  for (var key in objectOne) {
    if (!key in objectTwo) {
      return false;
    }

    if (typeof objectOne[key] !== typeof objectTwo[key]) {
      return false;
    }

    if (Object.prototype.toString.call(objectOne[key]) === '[object Object]') {
      return hasSameShape(objectOne[key], objectTwo[key]);
    }
  }

  return true;
};

describe('searchYouTube', function() {
  var requests, xhr;

  beforeEach(function() {
    requests = [];
    xhr = sinon.useFakeXMLHttpRequest();
    xhr.onCreate = function(req) { requests.push(req); };
  });

  afterEach(function() {
    if (xhr.restore) {
      xhr.restore();
    }
  });

  it('should send a GET request', function() {
    searchYouTube({}, () => {});

    expect(requests[0].method).to.equal('GET');
  });

  it('should accept `key`, `query`, and `max` options and send them in GET request', function() {
    searchYouTube({ key: 'API_KEY', query: 'cats', max: 10 }, () => {});

    var params = getURLSearchParams(requests[0].url);
    expect(params.key).to.equal('API_KEY');
    expect(params.q).to.equal('cats');
    expect(params.maxResults).to.equal('10');
  });


  it('should GET videos with the same shape as `exampleVideoData`', function(done) {
    var options = {
      key: window.YOUTUBE_API_KEY,
      query: 'react',
      max: 5
    };

    xhr.restore();

    searchYouTube(options, (data) => {
      expect(hasSameShape(data, window.exampleVideoData)).to.be.true;
      done();
    });
  });
});