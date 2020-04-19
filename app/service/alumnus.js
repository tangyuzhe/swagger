'use strict';

const Service = require('egg').Service;
class AlumnusService extends Service {
  /**
   * create 创建校友信息记录
   * @param {*} alumnus 
   */
  async create(alumnus) {
    const { ctx } = this;
    return ctx.model.Alumnus.insertMany(alumnus);
  }

  /**
   * 查询
   * @param {*} name 
   */
  async findByName(name) {
    const { ctx } = this;
    return ctx.model.Alumnus.findOne({ 'name': name })
  }

  /**
   * 根据id删除
   * @param {*} id 
   */
  async delete(id) {
    const { ctx } = this;
    return ctx.model.Alumnus.findByIdAndDelete(id)
  }

  /**
   * 根据id修改数据
   * @param {*} id 
   * @param {*} alumnus 
   */
  async update(id, alumnus) {
    const { ctx } = this;
    const res = await ctx.model.Alumnus.findById(id);
    if (!res) {
      ctx.throw(404, '未查询到数据');
    }
    return ctx.model.Alumnus.findByIdAndUpdate(id, alumnus);
  }

  /**
   * findAll
   */
  async findAll() {
    const { ctx } = this
    const res = await ctx.model.Alumnus.find()
    if (!res) {
      ctx.throw(404, '未查询到数据');
    }
    return res
  }

}

module.exports = AlumnusService;
