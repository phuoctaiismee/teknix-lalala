// @ts-nocheck
import { useEffect } from 'react';

const useCanvasCursor = () => {
  function n(e) {
    this.init(e || {});
  }
  n.prototype = {
    init: function (e) {
      this.phase = e.phase || 0;
      this.offset = e.offset || 0;
      this.frequency = e.frequency || 0.001;
      this.amplitude = e.amplitude || 1;
    },
    update: function () {
      return (
        (this.phase += this.frequency),
        (e = this.offset + Math.sin(this.phase) * this.amplitude)
      );
    },
    value: function () {
      return e;
    },
  };

  function Line(e) {
    this.init(e || {});
  }

  Line.prototype = {
    init: function (e) {
      this.spring = e.spring + 0.1 * Math.random() - 0.02;
      this.friction = E.friction + 0.01 * Math.random() - 0.002;
      this.nodes = [];
      for (var t, n = 0; n < E.size; n++) {
        t = new Node();
        t.x = pos.x;
        t.y = pos.y;
        this.nodes.push(t);
      }
    },
    update: function () {
      var e = this.spring,
        t = this.nodes[0];
      t.vx += (pos.x - t.x) * e;
      t.vy += (pos.y - t.y) * e;
      for (var n, index = 0, a = this.nodes.length; index < a; index++)
        (t = this.nodes[index]),
          0 < index &&
            ((n = this.nodes[index - 1]),
            (t.vx += (n.x - t.x) * e),
            (t.vy += (n.y - t.y) * e),
            (t.vx += n.vx * E.dampening),
            (t.vy += n.vy * E.dampening)),
          (t.vx *= this.friction),
          (t.vy *= this.friction),
          (t.x += t.vx),
          (t.y += t.vy),
          (e *= E.tension);
    },
    draw: function () {
      var e,
        t,
        n = this.nodes[0].x,
        index = this.nodes[0].y;
      context.beginPath();
      context.moveTo(n, index);
      for (var a = 1, o = this.nodes.length - 2; a < o; a++) {
        e = this.nodes[a];
        t = this.nodes[a + 1];
        n = 0.5 * (e.x + t.x);
        index = 0.5 * (e.y + t.y);
        context.quadraticCurveTo(e.x, e.y, n, index);
      }
      e = this.nodes[a];
      t = this.nodes[a + 1];
      context.quadraticCurveTo(e.x, e.y, t.x, t.y);
      context.stroke();
      context.closePath();
    },
  };

  function onMousemove(e) {
    function o() {
      lines = [];
      for (var e = 0; e < E.trails; e++)
        lines.push(new Line({ spring: 0.4 + (e / E.trails) * 0.025 }));
    }
    function c(e) {
      e.touches
        ? ((pos.x = e.touches[0].pageX), (pos.y = e.touches[0].pageY))
        : ((pos.x = e.clientX), (pos.y = e.clientY)),
        e.preventDefault();
    }
    function l(e) {
      1 == e.touches.length &&
        ((pos.x = e.touches[0].pageX), (pos.y = e.touches[0].pageY));
    }
    document.removeEventListener('mousemove', onMousemove),
      document.removeEventListener('touchstart', onMousemove),
      document.addEventListener('mousemove', c),
      document.addEventListener('touchmove', c),
      document.addEventListener('touchstart', l),
      c(e),
      o(),
      render();
  }

  function render() {
    if (context.running) {
      context.globalCompositeOperation = 'source-over';
      context.clearRect(0, 0, context.canvas.width, context.canvas.height);
      context.globalCompositeOperation = 'lighter';
      context.strokeStyle = 'hsla(' + Math.round(f.update()) + ',50%,50%,0.2)';
      context.lineWidth = 1;
      for (var e, t = 0; t < E.trails; t++) {
        (e = lines[t]).update();
        e.draw();
      }
      context.frame++;
      globalThis.requestAnimationFrame(render);
    }
  }

  function resizeCanvas() {
    context.canvas.width = window.innerWidth - 20;
    context.canvas.height = window.innerHeight;
  }

  var context,
    f,
    e = 0,
    pos = {},
    lines = [],
    E = {
      debug: true,
      friction: 0.5,
      trails: 20,
      size: 50,
      dampening: 0.25,
      tension: 0.98,
    };
  function Node() {
    this.x = 0;
    this.y = 0;
    this.vy = 0;
    this.vx = 0;
  }

  const renderCanvas = function () {
    context = document.querySelector('#canvas').getContext('2d');
    context.running = true;
    context.frame = 1;
    f = new n({
      phase: Math.random() * 2 * Math.PI,
      amplitude: 85,
      frequency: 0.0015,
      offset: 285,
    });
    document.addEventListener('mousemove', onMousemove);
    document.addEventListener('touchstart', onMousemove);
    document.body.addEventListener('orientationchange', resizeCanvas);
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('focus', () => {
      if (!context.running) {
        context.running = true;
        render();
      }
    });
    window.addEventListener('blur', () => {
      context.running = true;
    });
    resizeCanvas();
  };

  useEffect(() => {
    renderCanvas();

    return () => {
      context.running = false;
      document.removeEventListener('mousemove', onMousemove);
      document.removeEventListener('touchstart', onMousemove);
      document.body.removeEventListener('orientationchange', resizeCanvas);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('focus', () => {
        if (!context.running) {
          context.running = true;
          render();
        }
      });
      window.removeEventListener('blur', () => {
        context.running = true;
      });
    };
  }, []);
};

export default useCanvasCursor;
