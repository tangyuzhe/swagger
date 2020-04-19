'use strict';

const Service = require('egg').Service;
class SpecialityService extends Service {
  /**
   * 创建专业
   * @param  speciality
   */
  async save(speciality) {
    const { ctx } = this;
    return ctx.model.Speciality.insertMany(speciality);
  }

  /**
   * 学院专业查询
   */
  async find(collegecode, specialityname) {
    const { ctx } = this;
    let query;
    if (typeof (specialityname) == 'undefined') {
      query = { 'collegeCode': collegecode }
    } else {
      query = { 'collegeCode': collegecode, 'specialityName': specialityname }
    }
    return ctx.model.Speciality.find(query)
  }


  /**
   * 根据id删除学院专业
   */
  async delete(id) {
    const { ctx } = this
    return ctx.model.Speciality.findByIdAndDelete(id)
  }

  /**
   * 根据id修改学院专业信息
   * @param  speciality
   */
  async update(id, speciality) {
    const { ctx } = this;
    return ctx.model.Speciality.findByIdAndUpdate(id, speciality);
  }

  /**
   * 查询全部数据
   */
  async findAll() {
    const { ctx } = this;
    return ctx.model.Speciality.find().sort({ 'collegeCode': 1 });
  }

  async findById(id) {
    const { ctx } = this;
    return ctx.model.Speciality.findById(id)
  }

  async findCollegeList() {
    const { ctx } = this;
    const res = await ctx.model.Speciality.distinct('collegeName')
    return res
  }

  async findSpecialityList(cname) {
    const { ctx } = this;
    const res = await ctx.model.Speciality.find({ 'collegeName': cname }, { 'specialityName': 1, '_id': 0 })
    return res
  }
}

module.exports = SpecialityService;
