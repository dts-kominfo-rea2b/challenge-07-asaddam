const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const countData = (data, findData) => {
  return new Promise((resolve, reject) => {
    if (findData == undefined) {
      reject("Data undefined");
    } else {
      var result = 0;
      for (let i = 0; i < data.length; i++) {
        if (findData == data[i].hasil) {
          result++;
        }
      }
    }
    return resolve(result);
  });
};

const promiseOutput = async (findData) => {
  const countTheaterIXX = await promiseTheaterIXX()
    .then((hasilSetelehNonton) =>
      countData(hasilSetelehNonton, findData)
    );
  const countTheaterVGC = await promiseTheaterVGC()
    .then((hasilSetelehNonton) =>
      countData(hasilSetelehNonton, findData)
    );
    return countTheaterIXX + countTheaterVGC;
};

module.exports = {
  promiseOutput,
};
