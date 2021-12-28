'use strict'

module.exports = (options) => {
  return async function jwtErr(ctx, next) {
    const token = ctx.request.header.authorization;
    // token没有的话是undefined
    // console.log('token 是', token);
    let decode;
    // console.log('options是', options);
    // options:
    if (token) {
      try {
        decode = ctx.app.jwt.verify(token, options.secret);
        await next();
      } catch (error) {
        console.log('error', error);
        ctx.status = 200;
        ctx.body = {
          msg: 'token已过期，请重新登录',
          code: 401,
        }
        return;
      }
    } else {
      ctx.status = 200;
      ctx.body = {
        code: 401,
        msg: 'token不存在',
      };
      return;
    }
  }
}