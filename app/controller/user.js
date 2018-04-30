'use strict';

const Controller = require('egg').Controller;
const {User} = require('../model');

class UserController extends Controller {
  async signUp() {
    let {ctx} = this;
    ctx.body = {
      "result": {
        "code": 0,
        "message": "success"
      }
    };
    let user = ctx.request.body.params;
    User.create(user).then(user => {
      ctx.body = {
        "result": {
          "code": 0,
          "message": "success"
        }
      };
    }, err => {
      ctx.body = {
        "result": {
          "code": 1,
          "message": err.toString()
        }
      };
    })
  }

  async signIn() {
    let user = this.ctx.request.body.params;
    User.findOne(user).then(user => {
      ctx.body = {
        "result": {
          "code": 0,
          "message": "success"
        }
      };
    }, err => {
      ctx.body = {
        "result": {
          "code": 1,
          "message": err.toString()
        }
      };
    });
  }
}

module.exports = UserController;
