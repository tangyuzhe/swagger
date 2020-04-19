/* eslint-disable no-useless-constructor */
'use strict';

const Controller = require('egg').Controller;

/**
 * @Controller Auth 用户管理
 */
class UserController extends Controller {
  constructor(ctx) {
    super(ctx);
  }

  /**
   * @summary 创建用户
   * @description 创建用户 记录用户账户/密码/类型
   * @router post /api/user
   * @request body createUserRequest *body
   * @response 200 baseResponse 创建成功
   */
  async create() {
    const { ctx } = this;
    const user = ctx.request.body || {};
    const res = await ctx.service.user.create(user);
    // 设置响应内容
    ctx.helper.success({ ctx, res });
  }

  /**
   * @summary 修改用户
   * @description 修改用户信息
   * @router put /api/user
   * @request query string *id
   * @request body createUserRequest *body
   * @response 200 baseResponse 修改成功
   */
  async update() {
    const { ctx } = this;
    ctx.validate(this.ctx.rule.createUserRequest);
    const res = await this.service.user.update(ctx.query.id, ctx.request.body);
    this.ctx.helper.success({ ctx: this.ctx });
  }

  /**
   * @summary 用户登入token测试
   * @description 用户登入
   * @router post /auth/jwt/login
   * @request body loginRequest *body
   * @response 200 baseResponse 创建成功
   */
  async login() {
    this.ctx.validate(this.ctx.rule.loginRequest);
    const payload = this.ctx.request.body || {};
    const res = await this.ctx.service.user.login(payload);
    this.ctx.helper.success({ ctx: this.ctx, res });
  }
}


module.exports = UserController;
