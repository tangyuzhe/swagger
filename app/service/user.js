'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  /**
   * 创建用户
   * @param {*} user
   */
  async create(user) {
    const { ctx } = this;
    user.password = await ctx.genHash(user.password);
    return ctx.model.User.create(user);
  }

  /**
   * 修改用户
   * @param {*} id
   * @param {*} newuser
   */
  async update(id, newuser) {
    const { ctx } = this;
    const user = await ctx.model.User.findById(id);
    if (!user) {
      ctx.throw(404, 'user not found');
    } else {
      newuser.password = await ctx.genHash(newuser.password);
    }
    return ctx.model.User.findByIdAndUpdate(id, newuser);
  }

  /**
   * 用户登录
   * @param {*} payload 
   */
  async login(payload) {
    const { ctx } = this;
    const user = await ctx.model.User.findOne({ 'account': payload.account });
    if (!user) {
      this.ctx.throw(404, '用户没有找到');
    }
    const verifyPsw = await this.ctx.compare(payload.password, user.password);
    if (!verifyPsw) {
      this.ctx.throw(404, '用户密码错误');
    }
    return { token: await this.ctx.service.actionToken.apply(user.account, user.password) };
  }
}

module.exports = UserService;
