const cards = require('../data/cards.json');
const users = require('../data/users.json');

const getCardsData = (req, res) => {
  res.status(200).send(cards);
};

const getUsersData = (req, res) => {
  res.status(200).send(users);
};
const searchUser = (usersArray, id) => {
  const askedUser = usersArray.findIndex((user) => user._id === id);
  return askedUser;
};
const doesUserExist = (req, res, next) => {
  const { id } = req.params;
  const askedUser = searchUser(users, id);
  if (!users[askedUser]) {
    res.status(404);
    res.send({ message: 'Нет пользователя с таким id' });
    return;
  }
  next();
};

const sendUser = (req, res, next) => {
  const { id } = req.params;
  const askedUser = searchUser(users, id);
  res.status(200).send(users[askedUser]);
  next();
};

module.exports = {
  getCardsData, getUsersData, doesUserExist, sendUser,
};
