'use strict';

describe('Search', function () {
  var _React$addons$TestUti = React.addons.TestUtils,
      Simulate = _React$addons$TestUti.Simulate,
      renderIntoDocument = _React$addons$TestUti.renderIntoDocument,
      findRenderedDOMComponentWithClass = _React$addons$TestUti.findRenderedDOMComponentWithClass,
      scryRenderedDOMComponentsWithClass = _React$addons$TestUti.scryRenderedDOMComponentsWithClass;


  var app, searchYouTubeStub;

  describe('when rendering live data from YouTube', function () {
    beforeEach(function () {
      searchYouTubeStub = sinon.stub();
      searchYouTubeStub.onCall(0).yields(window.fakeVideoData);
      searchYouTubeStub.onCall(1).yields(window.moreFakeVideoData);

      app = renderIntoDocument(React.createElement(App, { searchYouTube: searchYouTubeStub }));
    });

    it('should load live data when app is initialized', function () {
      var videoEntryTitleElements = scryRenderedDOMComponentsWithClass(app, 'video-list-entry-title');
      videoEntryTitleElements.forEach(function (videoEntryTitle, i) {
        expect(videoEntryTitle.innerHTML).to.equal(fakeVideoData[i].snippet.title);
      });
    });

    it('should update the video list when typing into the input box', function () {
      var videoEntryTitleElements = scryRenderedDOMComponentsWithClass(app, 'video-list-entry-title');
      videoEntryTitleElements.forEach(function (videoEntryTitle, i) {
        expect(videoEntryTitle.innerHTML).to.equal(fakeVideoData[i].snippet.title);
      });

      var searchInputElement = findRenderedDOMComponentWithClass(app, 'form-control');
      Simulate.change(searchInputElement, { target: { value: 'React tutorial' } });

      var newVideoEntryTitleElements = scryRenderedDOMComponentsWithClass(app, 'video-list-entry-title');
      newVideoEntryTitleElements.forEach(function (videoEntryTitle, i) {
        expect(videoEntryTitle.innerHTML).to.equal(moreFakeVideoData[i].snippet.title);
      });
    });
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NwZWMvY29tcG9uZW50cy9TZWFyY2hTcGVjLmpzeCJdLCJuYW1lcyI6WyJkZXNjcmliZSIsIlJlYWN0IiwiYWRkb25zIiwiVGVzdFV0aWxzIiwiU2ltdWxhdGUiLCJyZW5kZXJJbnRvRG9jdW1lbnQiLCJmaW5kUmVuZGVyZWRET01Db21wb25lbnRXaXRoQ2xhc3MiLCJzY3J5UmVuZGVyZWRET01Db21wb25lbnRzV2l0aENsYXNzIiwiYXBwIiwic2VhcmNoWW91VHViZVN0dWIiLCJiZWZvcmVFYWNoIiwic2lub24iLCJzdHViIiwib25DYWxsIiwieWllbGRzIiwid2luZG93IiwiZmFrZVZpZGVvRGF0YSIsIm1vcmVGYWtlVmlkZW9EYXRhIiwiaXQiLCJ2aWRlb0VudHJ5VGl0bGVFbGVtZW50cyIsImZvckVhY2giLCJ2aWRlb0VudHJ5VGl0bGUiLCJpIiwiZXhwZWN0IiwiaW5uZXJIVE1MIiwidG8iLCJlcXVhbCIsInNuaXBwZXQiLCJ0aXRsZSIsInNlYXJjaElucHV0RWxlbWVudCIsImNoYW5nZSIsInRhcmdldCIsInZhbHVlIiwibmV3VmlkZW9FbnRyeVRpdGxlRWxlbWVudHMiXSwibWFwcGluZ3MiOiI7O0FBQUFBLFNBQVUsUUFBVixFQUFvQixZQUFXO0FBQUEsOEJBTXpCQyxNQUFNQyxNQUFOLENBQWFDLFNBTlk7QUFBQSxNQUUzQkMsUUFGMkIseUJBRTNCQSxRQUYyQjtBQUFBLE1BRzNCQyxrQkFIMkIseUJBRzNCQSxrQkFIMkI7QUFBQSxNQUkzQkMsaUNBSjJCLHlCQUkzQkEsaUNBSjJCO0FBQUEsTUFLM0JDLGtDQUwyQix5QkFLM0JBLGtDQUwyQjs7O0FBUTdCLE1BQUlDLEdBQUosRUFBU0MsaUJBQVQ7O0FBRUFULFdBQVMsdUNBQVQsRUFBa0QsWUFBVztBQUMzRFUsZUFBVyxZQUFXO0FBQ3BCRCwwQkFBb0JFLE1BQU1DLElBQU4sRUFBcEI7QUFDQUgsd0JBQWtCSSxNQUFsQixDQUF5QixDQUF6QixFQUE0QkMsTUFBNUIsQ0FBbUNDLE9BQU9DLGFBQTFDO0FBQ0FQLHdCQUFrQkksTUFBbEIsQ0FBeUIsQ0FBekIsRUFBNEJDLE1BQTVCLENBQW1DQyxPQUFPRSxpQkFBMUM7O0FBRUFULFlBQU1ILG1CQUNKLG9CQUFDLEdBQUQsSUFBSyxlQUFlSSxpQkFBcEIsR0FESSxDQUFOO0FBR0QsS0FSRDs7QUFVQVMsT0FBRywrQ0FBSCxFQUFvRCxZQUFXO0FBQzdELFVBQUlDLDBCQUEwQlosbUNBQW1DQyxHQUFuQyxFQUF3Qyx3QkFBeEMsQ0FBOUI7QUFDQVcsOEJBQXdCQyxPQUF4QixDQUFnQyxVQUFDQyxlQUFELEVBQWtCQyxDQUFsQixFQUF3QjtBQUN0REMsZUFBT0YsZ0JBQWdCRyxTQUF2QixFQUFrQ0MsRUFBbEMsQ0FBcUNDLEtBQXJDLENBQTJDVixjQUFjTSxDQUFkLEVBQWlCSyxPQUFqQixDQUF5QkMsS0FBcEU7QUFDRCxPQUZEO0FBR0QsS0FMRDs7QUFPQVYsT0FBRyw2REFBSCxFQUFrRSxZQUFXO0FBQzNFLFVBQUlDLDBCQUEwQlosbUNBQW1DQyxHQUFuQyxFQUF3Qyx3QkFBeEMsQ0FBOUI7QUFDQVcsOEJBQXdCQyxPQUF4QixDQUFnQyxVQUFDQyxlQUFELEVBQWtCQyxDQUFsQixFQUF3QjtBQUN0REMsZUFBT0YsZ0JBQWdCRyxTQUF2QixFQUFrQ0MsRUFBbEMsQ0FBcUNDLEtBQXJDLENBQTJDVixjQUFjTSxDQUFkLEVBQWlCSyxPQUFqQixDQUF5QkMsS0FBcEU7QUFDRCxPQUZEOztBQUlBLFVBQUlDLHFCQUFxQnZCLGtDQUFrQ0UsR0FBbEMsRUFBdUMsY0FBdkMsQ0FBekI7QUFDQUosZUFBUzBCLE1BQVQsQ0FBZ0JELGtCQUFoQixFQUFvQyxFQUFDRSxRQUFRLEVBQUNDLE9BQU8sZ0JBQVIsRUFBVCxFQUFwQzs7QUFFQSxVQUFJQyw2QkFBNkIxQixtQ0FBbUNDLEdBQW5DLEVBQXdDLHdCQUF4QyxDQUFqQztBQUNBeUIsaUNBQTJCYixPQUEzQixDQUFtQyxVQUFDQyxlQUFELEVBQWtCQyxDQUFsQixFQUF3QjtBQUN6REMsZUFBT0YsZ0JBQWdCRyxTQUF2QixFQUFrQ0MsRUFBbEMsQ0FBcUNDLEtBQXJDLENBQTJDVCxrQkFBa0JLLENBQWxCLEVBQXFCSyxPQUFyQixDQUE2QkMsS0FBeEU7QUFDRCxPQUZEO0FBR0QsS0FiRDtBQWNELEdBaENEO0FBaUNELENBM0NEIiwiZmlsZSI6IlNlYXJjaFNwZWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJkZXNjcmliZSAoJ1NlYXJjaCcsIGZ1bmN0aW9uKCkge1xuICB2YXIge1xuICAgIFNpbXVsYXRlLFxuICAgIHJlbmRlckludG9Eb2N1bWVudCxcbiAgICBmaW5kUmVuZGVyZWRET01Db21wb25lbnRXaXRoQ2xhc3MsXG4gICAgc2NyeVJlbmRlcmVkRE9NQ29tcG9uZW50c1dpdGhDbGFzc1xuICB9ID0gUmVhY3QuYWRkb25zLlRlc3RVdGlscztcblxuICB2YXIgYXBwLCBzZWFyY2hZb3VUdWJlU3R1YjtcbiAgXG4gIGRlc2NyaWJlKCd3aGVuIHJlbmRlcmluZyBsaXZlIGRhdGEgZnJvbSBZb3VUdWJlJywgZnVuY3Rpb24oKSB7XG4gICAgYmVmb3JlRWFjaChmdW5jdGlvbigpIHtcbiAgICAgIHNlYXJjaFlvdVR1YmVTdHViID0gc2lub24uc3R1YigpO1xuICAgICAgc2VhcmNoWW91VHViZVN0dWIub25DYWxsKDApLnlpZWxkcyh3aW5kb3cuZmFrZVZpZGVvRGF0YSk7XG4gICAgICBzZWFyY2hZb3VUdWJlU3R1Yi5vbkNhbGwoMSkueWllbGRzKHdpbmRvdy5tb3JlRmFrZVZpZGVvRGF0YSk7XG5cbiAgICAgIGFwcCA9IHJlbmRlckludG9Eb2N1bWVudChcbiAgICAgICAgPEFwcCBzZWFyY2hZb3VUdWJlPXtzZWFyY2hZb3VUdWJlU3R1Yn0gLz5cbiAgICAgICk7XG4gICAgfSk7XG5cbiAgICBpdCgnc2hvdWxkIGxvYWQgbGl2ZSBkYXRhIHdoZW4gYXBwIGlzIGluaXRpYWxpemVkJywgZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgdmlkZW9FbnRyeVRpdGxlRWxlbWVudHMgPSBzY3J5UmVuZGVyZWRET01Db21wb25lbnRzV2l0aENsYXNzKGFwcCwgJ3ZpZGVvLWxpc3QtZW50cnktdGl0bGUnKTtcbiAgICAgIHZpZGVvRW50cnlUaXRsZUVsZW1lbnRzLmZvckVhY2goKHZpZGVvRW50cnlUaXRsZSwgaSkgPT4ge1xuICAgICAgICBleHBlY3QodmlkZW9FbnRyeVRpdGxlLmlubmVySFRNTCkudG8uZXF1YWwoZmFrZVZpZGVvRGF0YVtpXS5zbmlwcGV0LnRpdGxlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIFxuICAgIGl0KCdzaG91bGQgdXBkYXRlIHRoZSB2aWRlbyBsaXN0IHdoZW4gdHlwaW5nIGludG8gdGhlIGlucHV0IGJveCcsIGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHZpZGVvRW50cnlUaXRsZUVsZW1lbnRzID0gc2NyeVJlbmRlcmVkRE9NQ29tcG9uZW50c1dpdGhDbGFzcyhhcHAsICd2aWRlby1saXN0LWVudHJ5LXRpdGxlJyk7XG4gICAgICB2aWRlb0VudHJ5VGl0bGVFbGVtZW50cy5mb3JFYWNoKCh2aWRlb0VudHJ5VGl0bGUsIGkpID0+IHtcbiAgICAgICAgZXhwZWN0KHZpZGVvRW50cnlUaXRsZS5pbm5lckhUTUwpLnRvLmVxdWFsKGZha2VWaWRlb0RhdGFbaV0uc25pcHBldC50aXRsZSk7XG4gICAgICB9KTtcblxuICAgICAgdmFyIHNlYXJjaElucHV0RWxlbWVudCA9IGZpbmRSZW5kZXJlZERPTUNvbXBvbmVudFdpdGhDbGFzcyhhcHAsICdmb3JtLWNvbnRyb2wnKTtcbiAgICAgIFNpbXVsYXRlLmNoYW5nZShzZWFyY2hJbnB1dEVsZW1lbnQsIHt0YXJnZXQ6IHt2YWx1ZTogJ1JlYWN0IHR1dG9yaWFsJ319KTtcblxuICAgICAgdmFyIG5ld1ZpZGVvRW50cnlUaXRsZUVsZW1lbnRzID0gc2NyeVJlbmRlcmVkRE9NQ29tcG9uZW50c1dpdGhDbGFzcyhhcHAsICd2aWRlby1saXN0LWVudHJ5LXRpdGxlJyk7XG4gICAgICBuZXdWaWRlb0VudHJ5VGl0bGVFbGVtZW50cy5mb3JFYWNoKCh2aWRlb0VudHJ5VGl0bGUsIGkpID0+IHtcbiAgICAgICAgZXhwZWN0KHZpZGVvRW50cnlUaXRsZS5pbm5lckhUTUwpLnRvLmVxdWFsKG1vcmVGYWtlVmlkZW9EYXRhW2ldLnNuaXBwZXQudGl0bGUpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufSk7XG4iXX0=