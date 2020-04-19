'use strict';

module.exports = {
  baseRequest: {
    id: { type: 'string', description: 'id 唯一键', required: true, example: '1' },
  },
  baseResponse: {
    code: { type: 'integer', required: true, example: 0 },
    data: {
      type: 'string',
      example: '请求成功',
    },
    errorMessage: { type: 'string', exampler: '请求成功' },
  },
  createUserRequest: {
    account: {
      type: 'string',
      required: true,
      description: '用户名'
    },
    password: {
      type: 'string',
      required: true,
      description: '密码'
    },
    username: {
      type: 'string',
      required: true,
      description: '姓名'
    },
  },
  loginRequest: {
    account: {
      type: 'string',
      required: true,
      description: '用户名'
    },
    password: {
      type: 'string',
      required: true,
      description: '密码'
    },
  },
  speciality: {
    collegeCode: {
      type: 'number',
      required: true,
      description: '学院代码',
      // format: /^1[34578]\d{9}$/,
    },
    collegeName: {
      type: 'string',
      description: '学院名称',
    },
    specialityCode: {
      type: 'string',
      description: '专业代码',
    },
    specialityName: {
      type: 'string',
      description: '专业名称'
    }
  },
  alumnus: {
    name: {
      type: 'string',
      required: true,
      description: '姓名',
    },
    sex: {
      type: 'string',
      description: '性别',
    },
    birthday: {
      type: 'string',
      description: '出生日期',
    },
    IDNumber: {
      type: 'string',
      description: '身份证号'
    },
    school: {
      type: 'string',
      description: '学校'
    },
    studentNumber: {
      type: 'string',
      description: '学号'
    },
    collegeName: {
      type: 'string',
      description: '学院'
    },
    specialityName: {
      type: 'string',
      description: '专业'
    },
    admissionTime: {
      type: 'number',
      description: '入学时间（年份）'
    },
    graduationTime: {
      type: 'number',
      description: '毕业时间（年份）'
    },
    workArea: {
      type: 'string',
      description: '工作所在地'
    },
    company: {
      type: 'string',
      description: '所在公司'
    },
    companyPost: {
      type: 'string',
      description: '公司职务'
    },
    contact: {
      type: 'string',
      description: '联系方式'
    },
    QQ: {
      type: 'string',
      description: 'QQ'
    }
  }
};
