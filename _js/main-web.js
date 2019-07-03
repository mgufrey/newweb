// init Barba with a default "opacity" transition
barba.init({
  transitions: [{
    name: 'legacy-example',
    leave: function(data) {
      var done = this.async();
      TweenMax.to(data.current.container, 1.5, {
        opacity: 0,
        onComplete: done
      });
    },
    enter: function(data) {
      var done = this.async();
      TweenMax.from(data.next.container, 1.4, {
        opacity: 0,
        onComplete: done
      });
    }
  }]
});
