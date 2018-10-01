'use strict';

window.fakeVideoData = [{
  etag: 'L332gQTY',
  id: {
    videoId: '000001'
  },
  snippet: {
    title: 'Cute cat video',
    description: 'The best cat video on the internet!',
    thumbnails: {
      default: {
        url: 'http://www.fndvisions.org/img/cutecat.jpg'
      }
    }
  }
}, {
  etag: 'SmEuSYxg',
  id: {
    videoId: '000002'
  },
  snippet: {
    title: 'Super cute cat video',
    description: 'Better than the best cat video on the internet!',
    thumbnails: {
      default: {
        url: 'https://pbs.twimg.com/profile_images/567285191169687553/7kg_TF4l.jpeg'
      }
    }
  }
}, {
  etag: 'ujBKBmLk',
  id: {
    videoId: '000003'
  },
  snippet: {
    title: 'Hack Reactor opens extension school on Mars',
    description: 'Watch the ribbon cutting of the first coding bootcamp in space',
    thumbnails: {
      default: {
        url: 'https://d3c5s1hmka2e2b.cloudfront.net/uploads/topic/image/14/hack_reactor.png'
      }
    }
  }
}, {
  etag: 'Nj7xszf8',
  id: {
    videoId: '000004'
  },
  snippet: {
    title: 'JavaScript Jamz',
    description: 'Rock on with JavaScript remixes of today\'s top songs',
    thumbnails: {
      default: {
        url: 'http://3.bp.blogspot.com/-PTty3CfTGnA/TpZOEjTQ_WI/AAAAAAAAAeo/KeKt_D5X2xo/s1600/js.jpg'
      }
    }
  }
}, {
  etag: 'I2w-7nRI',
  id: {
    videoId: '000005'
  },
  snippet: {
    title: 'Framework fatigue and you',
    description: 'JS guru, @McKringleberry teaches tips and tricks for managing JS framework fatigue',
    thumbnails: {
      default: {
        url: 'https://facebook.github.io/react/img/logo.svg'
      }
    }
  }
}];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NwZWMvZGF0YS9mYWtlVmlkZW9EYXRhLmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsImZha2VWaWRlb0RhdGEiLCJldGFnIiwiaWQiLCJ2aWRlb0lkIiwic25pcHBldCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJ0aHVtYm5haWxzIiwiZGVmYXVsdCIsInVybCJdLCJtYXBwaW5ncyI6Ijs7QUFDQUEsT0FBT0MsYUFBUCxHQUF1QixDQUFDO0FBQ3RCQyxRQUFNLFVBRGdCO0FBRXRCQyxNQUFJO0FBQ0ZDLGFBQVM7QUFEUCxHQUZrQjtBQUt0QkMsV0FBUztBQUNQQyxXQUFPLGdCQURBO0FBRVBDLGlCQUFhLHFDQUZOO0FBR1BDLGdCQUFZO0FBQ1ZDLGVBQVM7QUFDUEMsYUFBSztBQURFO0FBREM7QUFITDtBQUxhLENBQUQsRUFjcEI7QUFDRFIsUUFBTSxVQURMO0FBRURDLE1BQUk7QUFDRkMsYUFBUztBQURQLEdBRkg7QUFLREMsV0FBUztBQUNQQyxXQUFPLHNCQURBO0FBRVBDLGlCQUFhLGlEQUZOO0FBR1BDLGdCQUFZO0FBQ1ZDLGVBQVM7QUFDUEMsYUFBSztBQURFO0FBREM7QUFITDtBQUxSLENBZG9CLEVBNEJwQjtBQUNEUixRQUFNLFVBREw7QUFFREMsTUFBSTtBQUNGQyxhQUFTO0FBRFAsR0FGSDtBQUtEQyxXQUFTO0FBQ1BDLFdBQU8sNkNBREE7QUFFUEMsaUJBQWEsZ0VBRk47QUFHUEMsZ0JBQVk7QUFDVkMsZUFBUztBQUNQQyxhQUFLO0FBREU7QUFEQztBQUhMO0FBTFIsQ0E1Qm9CLEVBMENwQjtBQUNEUixRQUFNLFVBREw7QUFFREMsTUFBSTtBQUNGQyxhQUFTO0FBRFAsR0FGSDtBQUtEQyxXQUFTO0FBQ1BDLFdBQU8saUJBREE7QUFFUEMsaUJBQWEsdURBRk47QUFHUEMsZ0JBQVk7QUFDVkMsZUFBUztBQUNQQyxhQUFLO0FBREU7QUFEQztBQUhMO0FBTFIsQ0ExQ29CLEVBd0RwQjtBQUNEUixRQUFNLFVBREw7QUFFREMsTUFBSTtBQUNGQyxhQUFTO0FBRFAsR0FGSDtBQUtEQyxXQUFTO0FBQ1BDLFdBQU8sMkJBREE7QUFFUEMsaUJBQWEsb0ZBRk47QUFHUEMsZ0JBQVk7QUFDVkMsZUFBUztBQUNQQyxhQUFLO0FBREU7QUFEQztBQUhMO0FBTFIsQ0F4RG9CLENBQXZCIiwiZmlsZSI6ImZha2VWaWRlb0RhdGEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbndpbmRvdy5mYWtlVmlkZW9EYXRhID0gW3tcbiAgZXRhZzogJ0wzMzJnUVRZJyxcbiAgaWQ6IHtcbiAgICB2aWRlb0lkOiAnMDAwMDAxJ1xuICB9LFxuICBzbmlwcGV0OiB7XG4gICAgdGl0bGU6ICdDdXRlIGNhdCB2aWRlbycsXG4gICAgZGVzY3JpcHRpb246ICdUaGUgYmVzdCBjYXQgdmlkZW8gb24gdGhlIGludGVybmV0IScsXG4gICAgdGh1bWJuYWlsczoge1xuICAgICAgZGVmYXVsdDoge1xuICAgICAgICB1cmw6ICdodHRwOi8vd3d3LmZuZHZpc2lvbnMub3JnL2ltZy9jdXRlY2F0LmpwZycsXG4gICAgICB9XG4gICAgfVxuICB9XG59LCB7XG4gIGV0YWc6ICdTbUV1U1l4ZycsXG4gIGlkOiB7XG4gICAgdmlkZW9JZDogJzAwMDAwMidcbiAgfSxcbiAgc25pcHBldDoge1xuICAgIHRpdGxlOiAnU3VwZXIgY3V0ZSBjYXQgdmlkZW8nLFxuICAgIGRlc2NyaXB0aW9uOiAnQmV0dGVyIHRoYW4gdGhlIGJlc3QgY2F0IHZpZGVvIG9uIHRoZSBpbnRlcm5ldCEnLFxuICAgIHRodW1ibmFpbHM6IHtcbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9wYnMudHdpbWcuY29tL3Byb2ZpbGVfaW1hZ2VzLzU2NzI4NTE5MTE2OTY4NzU1My83a2dfVEY0bC5qcGVnJyxcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0swqB7XG4gIGV0YWc6ICd1akJLQm1MaycsXG4gIGlkOiB7XG4gICAgdmlkZW9JZDogJzAwMDAwMydcbiAgfSxcbiAgc25pcHBldDoge1xuICAgIHRpdGxlOiAnSGFjayBSZWFjdG9yIG9wZW5zIGV4dGVuc2lvbiBzY2hvb2wgb24gTWFycycsXG4gICAgZGVzY3JpcHRpb246ICdXYXRjaCB0aGUgcmliYm9uIGN1dHRpbmcgb2YgdGhlIGZpcnN0IGNvZGluZyBib290Y2FtcCBpbiBzcGFjZScsXG4gICAgdGh1bWJuYWlsczoge1xuICAgICAgZGVmYXVsdDoge1xuICAgICAgICB1cmw6ICdodHRwczovL2QzYzVzMWhta2EyZTJiLmNsb3VkZnJvbnQubmV0L3VwbG9hZHMvdG9waWMvaW1hZ2UvMTQvaGFja19yZWFjdG9yLnBuZycsXG4gICAgICB9XG4gICAgfVxuICB9XG59LMKge1xuICBldGFnOiAnTmo3eHN6ZjgnLFxuICBpZDoge1xuICAgIHZpZGVvSWQ6ICcwMDAwMDQnXG4gIH0sXG4gIHNuaXBwZXQ6IHtcbiAgICB0aXRsZTogJ0phdmFTY3JpcHQgSmFteicsXG4gICAgZGVzY3JpcHRpb246ICdSb2NrIG9uIHdpdGggSmF2YVNjcmlwdCByZW1peGVzIG9mIHRvZGF5XFwncyB0b3Agc29uZ3MnLFxuICAgIHRodW1ibmFpbHM6IHtcbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgdXJsOiAnaHR0cDovLzMuYnAuYmxvZ3Nwb3QuY29tLy1QVHR5M0NmVEduQS9UcFpPRWpUUV9XSS9BQUFBQUFBQUFlby9LZUt0X0Q1WDJ4by9zMTYwMC9qcy5qcGcnLFxuICAgICAgfVxuICAgIH1cbiAgfVxufSzCoHtcbiAgZXRhZzogJ0kydy03blJJJyxcbiAgaWQ6IHtcbiAgICB2aWRlb0lkOiAnMDAwMDA1J1xuICB9LFxuICBzbmlwcGV0OiB7XG4gICAgdGl0bGU6ICdGcmFtZXdvcmsgZmF0aWd1ZSBhbmQgeW91JyxcbiAgICBkZXNjcmlwdGlvbjogJ0pTIGd1cnUsIEBNY0tyaW5nbGViZXJyeSB0ZWFjaGVzIHRpcHMgYW5kIHRyaWNrcyBmb3IgbWFuYWdpbmcgSlMgZnJhbWV3b3JrIGZhdGlndWUnLFxuICAgIHRodW1ibmFpbHM6IHtcbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgdXJsOiAnaHR0cHM6Ly9mYWNlYm9vay5naXRodWIuaW8vcmVhY3QvaW1nL2xvZ28uc3ZnJyxcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1dO1xuIl19