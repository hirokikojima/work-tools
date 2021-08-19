self.addEventListener('message', function(e) {
  this.setInterval(() => {
    self.postMessage(e.data --);
  }, 1000);
}, false);