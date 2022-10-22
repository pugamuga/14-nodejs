export const getArgs = (args) => {
  const res = {};

  const [executer, file, ...rest] = args;

  rest.forEach((element, i, array) => {
    if (element.charAt(0) === "-") {
      if (i === array.length - 1) {
        res[element.substring(1)] = true;
      } else if (array[i + 1].charAt(0) !== "-") {
        res[element.substring(1)] = array[i + 1]?.toLowerCase();
      } else {
        res[element.substring(1)] = true;
      }
    }
  });
  return res;
};

