export default {
  changeCity (state, city) {
    state.city = city
    // 本地存储
    try {
      localStorage.city = city
    } catch (e) { }
  }
}
