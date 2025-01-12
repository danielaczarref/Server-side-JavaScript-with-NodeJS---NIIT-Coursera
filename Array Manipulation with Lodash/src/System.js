
const os = require('os');

const getOSName = () => {
  return os.EOL;
}

const getFreeMemory = () => {
  return os.freemem();
}

const getCurrentUser = () => {
  return os.userInfo();
}

const getHostName = () => {
  return os.hostname();
}

const getCPUDetails = () => {
  return os.cpus();
}

module.exports = {
  getOSName,
  getFreeMemory,
  getCurrentUser,
  getHostName,
  getCPUDetails
}