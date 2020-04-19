'use strict';

const Controller = require('egg').Controller;

/**
 * @Controller Alumnus 校友信息
 */
class AlumnusController extends Controller {
  /**
   * @summary 新建校友
   * @description 创建桂电毕业校友信息
   * @router post /api/CreateAlumnus
   * @request body alumnus *body
   * @response 200 baseResponse 创建成功
   */
  async create() {
    const { ctx } = this;
    const res = await ctx.service.alumnus.create(ctx.request.body)
    ctx.helper.success({ ctx, res });
  }

  /**
     * @summary 查询校友
     * @description 查询桂电毕业校友信息
     * @router get /api/findAlumnus
     * @request query string *name
     * @response 200 baseResponse 查询成功
     */
  async find() {
    const { ctx } = this;
    const res = await ctx.service.alumnus.findByName(ctx.query.name)
    if (!res) {
      ctx.throw(404, '未找到数据')
    } else {
      ctx.helper.success({ ctx, res });
    }
  }


  /**
     * @summary 删除校友数据
     * @description 删除桂电毕业校友信息
     * @router delete /api/deleteAlumnus/{id}
     * @request path string *id
     * @response 200 baseResponse 删除成功
     */
  async delete() {
    const { ctx } = this;
    const res = await ctx.service.alumnus.delete(ctx.params.id)
    console.log(res)
    if (!res) {
      ctx.throw(404, '删除失败')
    } else {
      ctx.helper.success({ ctx, res });
    }
  }

  /**
    * @summary 修改校友数据
    * @description 修改桂电毕业校友信息
    * @router put /api/updateAlumnus
    * @request query string *id
    * @request body alumnus *body
    * @response 200 baseResponse 修改成功
   */
  async update() {
    const { ctx } = this
    const res = await ctx.service.alumnus.update(ctx.query.id, ctx.request.body)
    if (!res) {
      ctx.throw(404, '修改失败')
    } else {
      ctx.helper.success({ ctx, res });
    }
  }

  /**
    * @summary 校友数据
    * @description 查找全部桂电毕业校友信息
    * @router get /api/alumnus
    * @response 200 baseResponse 查找成功
   */
  async findAll() {
    const { ctx } = this
    const res = await ctx.service.alumnus.findAll()
    if (!res) {
      ctx.throw(404, '查找失败')
    } else {
      ctx.helper.success({ ctx, res });
    }
  }
}

module.exports = AlumnusController;
