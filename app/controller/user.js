'use strict';

const Controller = require('egg').Controller;
const {User} = require('../model');

class UserController extends Controller {
  async signup() {
    let {ctx} = this;
    let user = ctx.request.body.params;
    let doc = await User.create(user);
    if(doc){
      ctx.body = {
        "result": {
          "code": 0,
          "message": "success"
        }
      };
    }else{
      ctx.body = {
        "result": {
          "code": 1,
          "message": err.toString()
        }
      };
    }
  }

  async signin() {
    let {ctx} = this;
    let user = ctx.request.body.params;
    let doc = await User.findOne(user);
    if(doc){
      ctx.session.user = doc;
      ctx.body = {
        "result": {
          "code": 0,
          "message": "success"
        }
      };
    }else{
      ctx.body = {
        "result": {
          "code": 1,
          "message": err.toString()
        }
      };
    }
  }
  async signout(){
    let {ctx} = this;
    let user = ctx.request.body.params;
    ctx.body ={
      "result": {
          "code":0,
          "message":"success"
      }
    }
  }
}

module.exports = UserController;
