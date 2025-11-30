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

const hello = async (req) => {
  console.log("req body :", req.body);
  let name = req.body.name;
  console.log("name :", name);
  let info = `Hello ${name}\nWelcome to the team`;
  return info;
  }

const table = async (req) => {
  console.log("req body :", req.body);
  let num = req.body.num;
  let str = "";
  console.log("num :", num);
  for(let i =1; i<=10; i++){
    str = str + `\n${num} X ${i} = ${i*num}`;
    console.log(str);
    
  }
  return str;
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
  divPostService,
  hello,
  table
};
