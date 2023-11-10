function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const dateTime = () => {
  const isPositive = getRandomInt(0, 1) === 1;
  const timeAt = new Date();
  const mutator = getRandomInt(1000000, 100000000);
  const availableAt = new Date(
    timeAt.getTime() + (isPositive ? mutator : -1 * mutator)
  );
  return availableAt;
};

const convertDateTime = (availableDate) => {
  const date = new Date(availableDate);

  const tanggal = date.getDate();
  const bulan = date.getMonth() + 1;
  const tahun = date.getFullYear();
  //hour
  const jam = date.getHours();
  const menit = date.getMinutes();

  const newJam = ("0" + jam).slice(-2);
  const newMenit = ("0" + menit).slice(-2);

  const dateFormat = tahun + "-" + bulan + "-" + tanggal;
  const hoursFormat = newJam + ":" + newMenit;

  return {
    date: dateFormat,
    hour: hoursFormat,
  };
};

module.exports = { dateTime, convertDateTime };
