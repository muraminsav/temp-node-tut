//OS MODULES

const os = require("os");

//info about current user
const user = os.userInfo();
console.log(user);
// returns the system uptime in secounds
console.log(`the system uptime is: ${os.uptime() / 60} minutes`);
// curent system information
const currentOs = {
  name: os.type(),
  release: os.release(),
  totamMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOs);
