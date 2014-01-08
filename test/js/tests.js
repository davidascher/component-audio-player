(function () {
  var audioPlayerElement;
  var iframeHandler;

  beforeEach(function (done) {
    iframeHandler = harnessUtils.createIframe('test/html/test.html', function (win, doc) {
      audioPlayerElement = iframeHandler.document.querySelector('ceci-audio-player');
      done();
    });
  });

  describe('Ceci Audio Player', function () {
    test('Listeners', function (done) {
      iframeHandler.testListeners(audioPlayerElement, done, {
        check: {
          play: function (e, channel) {
            chai.assert(true, 'Play event occured.');
          },
          pause: function (e, channel) {
            chai.assert(true, 'Pause event occured');
          },
          playOrPause: function (e, channel) {
            chai.assert(true, 'PlayOrPause event occured');
          },
          stop: function (e, channel) {
            chai.assert(true, 'Stop event occured');
          },
          seek: function (e, channel) {
            chai.assert(true, 'Seek event occured');
          }
        }
      });
    });
  });
})();
