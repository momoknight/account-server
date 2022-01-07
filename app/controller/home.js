'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = '<h1>EasyJi项目接口</h1>'
  }
}

module.exports = HomeController;