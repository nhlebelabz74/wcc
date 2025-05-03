const loginController = require('./loginController');
const registerController = require('./registerController');
const logoutController = require('./logoutController');
const { resetPassword, sendResetPasswordCode } = require('./resetPasswordController');
const refreshController = require('./refreshController');

module.exports = {
  loginController,
  registerController,
  logoutController,
  sendResetPasswordCode,
  resetPassword,
  refreshController
};