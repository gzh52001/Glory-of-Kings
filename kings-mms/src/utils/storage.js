const USER_KEY = 'user_key';
// 统一export所有方法
export default {
    /* 存储user对象 */
    saveUser(user) {
        localStorage.setItem(USER_KEY, JSON.stringify(user));
    },

    /* 返回user对象 */
    getUser() {
        return JSON.parse(localStorage.getItem(USER_KEY) || '{}');
    },

    /* 删除user */
    removeUser() {
        localStorage.removeItem(USER_KEY);
    }
}