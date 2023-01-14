function countDown(time) {
  var nowTime = +new Date(); // 返回的是当前时间总的毫秒数
  var inputTime = +new Date(time); // 返回的是用户输入的时间总的毫秒数
  var times = (inputTime - nowTime) / 1000; // times 是剩余时间总的秒数
  var d = parseInt(times / 60 / 60 / 24); //天
  d = d < 10 ? "0" + d : d;
  var h = parseInt((times / 60 / 60) % 24); //时
  h = h > 10 ? h : "0" + h;
  var m = parseInt((times / 60) % 60); //分
  m = m > 10 ? m : "0" + m;
  var s = parseInt(times % 60); //秒
  s = s < 10 ? "0" + s : s;
}
