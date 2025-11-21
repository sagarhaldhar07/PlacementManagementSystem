const messageCallerService = async () => {
  const message = "Hello kaise ho aap!\nHave a nice day!";
  return message;
};

const sumService = async () => {
  let a = 10;
  let b = 20;
  console.log(a + b);
  return a + b;
};

module.exports = {
  messageCallerService,
  sumService,
};
