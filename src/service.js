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

const subService = async () => {
  let a = 11;
  let b = 12;
  console.log(a - b);
  return a - b;
};

const mulService = async () => {
  let a = 2;
  let b = 5;
  console.log(a * b);
  return a * b;
};

const divService = async () => {
  let a = 10;
  let b = 5;
  console.log(a / b);
  return a / b;
};

const sumPostService = async (req) => {
  console.log("Req Body:", req.body);
  let a = req.body.first;
  let b = req.body.second;
  console.log("first:", a);
  console.log("Second:", b);
  return a + b;
};
const subPostService = async (req) => {
  console.log("Req Body:", req.body);
  let a = req.body.first;
  let b = req.body.second;
  console.log("first:", a);
  console.log("Second:", b);
  return a - b;
};
const mulPostService = async (req) => {
  console.log("Req Body:", req.body);
  let a = req.body.first;
  let b = req.body.second;
  console.log("first:", a);
  console.log("Second:", b);
  return a * b;
}
const divPostService = async (req) => {
  console.log("Req Body:", req.body);
  let a = req.body.first;
  let b = req.body.second;
  console.log("first:", a);
  console.log("Second:", b);
  return a / b;
}

module.exports = {
  messageCallerService,
  sumService,
  subService,
  mulService,
  divService,
  sumPostService,
  subPostService,
  mulPostService,
  divPostService
};
