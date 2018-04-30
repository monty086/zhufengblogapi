'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.post('/user/signup', controller.user.signup);
  router.post('/user/signin', controller.user.signin);
  router.get('/user/signout', controller.user.signout);
  router.post('/article/add', controller.article.add);
  router.get('/article/list', controller.article.list);
  router.post('/article/edit/:id', controller.article.edit);
  router.get('/article/delete/:id', controller.article.delete);
  router.post('/article/discuss/:id', controller.article.discuss);
};
