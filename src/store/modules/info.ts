// 定义一个info仓库
import { defineStore } from 'pinia'
// defineStore方法执行会返回一个函数 , 函数作用就是让组件可以获取仓库数据
const useInfo = defineStore('info', {
  state: () => {
    return {
      count: 99,
      arr: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    }
  },
  actions: {
    changeNum() {
      this.count += 100
    }
  },
  getters: {
    add() {
      const arrs: number = this.arr.reduce((pre: number, next: number) => {
        return pre + next;
      }, 0);
      return arrs;
    }
  }
})
// 对外暴露
export default useInfo