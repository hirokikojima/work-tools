self.addEventListener('message', function(e) {
  var count = e.data
  
  this.setInterval(() => {
    self.postMessage(--count);
  }, 1000);
}, false);