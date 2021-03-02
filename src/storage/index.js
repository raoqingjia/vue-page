/**
 * Created by Administrator on 2017/12/28.
 */

const storage = window.sessionStorage;
// https://github.com/tsironis/lockr
export default {
  getItem(key) {
    try {
      return JSON.parse(storage.getItem(key))
    } catch (err) {
      return null
    }
  },
  setItem(key, val) {
    storage.setItem(key, JSON.stringify(val))
  },
  clear() {
    storage.clear()
  },
  keys() {
    return storage.keys()
  },
  removeItem(key) {
    storage.removeItem(key)
  }
}
