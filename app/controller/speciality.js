'use strict';

const Controller = require('egg').Controller;

/**
 * @Controller Speciality 专业
 */
class SpecialityController extends Controller {
  /**
   * @summary 新建专业
   * @description 创建桂电专业
   * @router post /api/CreateSpeciality
   * @request body speciality *body
   * @response 200 baseResponse 创建成功
   */
  async create() {
    const { ctx } = this;
    // ctx.validate(ctx.rule.createUserRequest);
    const speciality = ctx.request.body || {};
    const res = await ctx.service.speciality.save(speciality)
    // 设置响应内容
    ctx.helper.success({ ctx, res });
  }

  /**
   * @summary 学院专业查询
   * @description 查询某个学院的专业
   * @router get /api/findSpeciality
   * @request query integer *collegeCode
   * @request query string specialityName
   * @response 200 baseResponse 查询成功
   */
  async find() {
    const { ctx } = this;
    const res = await ctx.service.speciality.find(ctx.query.collegeCode, ctx.query.specialityName)
    if (res.length == 0) {
      ctx.helper.failed({ ctx, res })
    } else {
      ctx.helper.success({ ctx, res });
    }
  }

  /**
 * @summary 学院专业删除
 * @description 根据id删除某个学院的专业（需要先查询到id）
 * @router delete /api/deleteSpeciality
 * @request query string *id
 * @response 200 baseResponse 删除成功
 */
  async delete() {
    const { ctx } = this;
    const res = await ctx.service.speciality.delete(ctx.query.id)
    if (res.length == 0) {
      ctx.helper.failed({ ctx, res })
    } else {
      ctx.helper.success({ ctx, res });
    }
  }

  /**
* @summary 学院专业更新
* @description 根据id更新某个学院的专业（需要先查询到id）
* @router put /api/updateSpeciality
* @request query string *id
* @request body speciality *body
* @response 200 baseResponse 更新成功
*/
  async update() {
    const { ctx } = this;
    const res = await ctx.service.speciality.update(ctx.query.id, ctx.request.body)
    if (res.length == 0) {
      ctx.helper.failed({ ctx, res })
    } else {
      ctx.helper.success({ ctx, res });
    }
  }

  /**
  * @summary 学院专业
  * @description 获取学院的专业
  * @router get /api/speciality
  * @response 200 baseResponse 查找成功
  */
  async findAll() {
    const { ctx } = this;
    const res = await ctx.service.speciality.findAll()
    if (!res) {
      throw (404, '查询失败')
    } else {
      ctx.helper.success({ ctx, res });
    }
  }

  /**
  * @summary 根据id查询学院专业
  * @description 获取学院的专业
  * @router get /api/findSpecialityById/{id}
  * @request path string *id
  * @response 200 baseResponse 查找成功
  */
  async findById() {
    const { ctx } = this;
    const res = await ctx.service.speciality.findById(ctx.params.id)
    if (!res) {
      throw (404, '查询失败')
    } else {
      ctx.helper.success({ ctx, res });
    }
  }


  async findCollegeList() {
    const { ctx } = this;
    const res = await ctx.service.speciality.findCollegeList()
    ctx.helper.success({ ctx, res })
  }

  async findSpecialityList() {
    const { ctx } = this;
    const res = await ctx.service.speciality.findSpecialityList(ctx.query.collegeName)
    ctx.helper.success({ ctx, res })
  }
}

module.exports = SpecialityController;
