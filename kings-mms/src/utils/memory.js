import storage from "./storage";

export default {
    // user: {}, // 用了存储登录用户信息。临时方式，将来用redux实现
    user: storage.getUser(), // 初始值为local里的值
}