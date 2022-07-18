if (process.env.NODE_ENV === "production") {
  //배포 상태
  module.exports = require("./prd.js");
} else {
  //개발 상태
  module.exports = require("./dev.js");
}
