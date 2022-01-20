class DataNotFoundError extends Error {}
class BadRequestError extends Error {}
class UnAuthorizedError extends Error {}
class UserAlreadyRegistered extends Error {}

module.exports = {
  DataNotFoundError,
  BadRequestError,
  UnAuthorizedError,
  UserAlreadyRegistered,
};
