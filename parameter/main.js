onload = function() {
  draw();
};
function draw() {
  /* canvas要素のノードオブジェクト */
  var canvas = document.getElementById('field');
  /* canvas要素の存在チェックとCanvas未対応ブラウザの対処 */
  if ( ! canvas || ! canvas.getContext ) {
    return false;
  }
  /* 2Dコンテキスト */
  const ctx = canvas.getContext('2d');
  /* 四角を描く */
  drawSquare(ctx, 0, 0, 100, 100);
  ctx.fillStyle = rgbas(0, 255, 0, 50);
}

function rgbas(r, g, b, a=255) {
  if (a === 255) {
    return `rgb(${r}, ${g}, ${b}`;
  } else {
    return `rgba(${r}, ${g}, ${b}, ${a/255})`;
  }
}

function drawSquare(ctx, x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x1, y2);
  ctx.lineTo(x2, y2);
  ctx.lineTo(x2, y1);
  ctx.closePath();
  ctx.stroke();
}
