var tween_radius = 8;
TweenMax.staggerFromTo('.morphy', 6 ,{
  cycle: {
    attr:function(i) {
      var r = i*20;
      return {
        transform:'rotate('+r+') translate('+tween_radius+',0.1) rotate('+(-r)+')'
      }
    }
  }
},{
  cycle: {
    attr:function(i) {
      var r = i*90+360;
      return {
        transform:'rotate('+r+') translate('+tween_radius+',0.5) rotate('+(-r)+')'
      }
    }
  },
  ease:Linear.easeNone,
  repeat:-1
});

TweenMax.staggerFromTo('.morphy2', 6 ,{
  cycle: {
    attr:function(i) {
      var r = i*20;
      return {
        transform:'rotate('+r+') translate('+tween_radius+',0.1) rotate('+(-r)+')'
      }
    }
  }
},{
  cycle: {
    attr:function(i) {
      var r = i*90+360;
      return {
        transform:'rotate('+r+') translate('+tween_radius+',0.5) rotate('+(-r)+')'
      }
    }
  },
  ease:Linear.easeNone,
  repeat:-1
});

TweenMax.staggerFromTo('.morphy3', 6 ,{
  cycle: {
    attr:function(i) {
      var r = i*60;
      return {
        transform:'rotate('+r+') translate('+tween_radius+',0.1) rotate('+(-r)+')'
      }
    }
  }
},{
  cycle: {
    attr:function(i) {
      var r = i*90+360;
      return {
        transform:'rotate('+r+') translate('+tween_radius+',0.8) rotate('+(-r)+')'
      }
    }
  },
  ease:Linear.easeNone,
  repeat:-1
});
