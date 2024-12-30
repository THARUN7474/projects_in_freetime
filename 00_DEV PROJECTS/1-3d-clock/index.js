(function start() {
  const today = new Date();

  const h = today.getHours();
  const m = today.getMinutes();
  const s = today.getSeconds();

  const hh = h < 10 ? "0" + hh : h;
  const mm = m < 10 ? "0" + mm : m;
  const ss = s < 10 ? "0" + ss : s;

  document.getElementById("clock").innerHTML = hh + ":" + mm + ":" + ss;
  setTimeout(start, 1000);
})();
