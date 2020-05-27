export default function trails() {
  const xlowest = 38;
  const xhighest = 394;
  const ylowest = 36;
  const yhighest = 418;

  let tokens = [];
  let xrange = [];
  let yrange = [];

  let i = 0;
  while (i < 12) {
    const x = xlowest + Math.random() * (xhighest - xlowest);

    const xcheck = xrange.every((xr) => {
      if (x < xr && x + 44 - xr < 0) return true;
      if (x > xr + 44) return true;

      return false;
    });

    if (xcheck) {
      xrange.push(x);
      i++;
    }
  }

  let j = 0;
  while (j < 12) {
    const y = ylowest + Math.random() * (yhighest - ylowest);

    const ycheck = yrange.every((yr) => {
      if (y < yr && y + 44 - yr < 0) return true;
      if (y > yr + 44) return true;

      return false;
    });

    if (ycheck) {
      yrange.push(y);
      j++;
    }
  }

  for (let k = 0; k < 12; k++) {
    tokens.push({
      x: xrange[k],
      y: yrange[k],
      text: k + 1,
    });
  }

  return {
    width: 535,
    height: 465,
    diameter: 44,
    tokens: tokens,
  };
}
