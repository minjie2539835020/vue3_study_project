import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
// 组合式
const todos = defineStore('todo', () => {
  let arr = ref([{ id: 1, do: '吃饭' }, { id: 2, do: '睡觉' }, { id: 3, do: '打豆豆' },])
  let arr1 = ref([1, 2, 3])
  let total = computed(() => {
    return arr1.value.reduce((prev: number, next: number) => {
      return prev + next
    }, 0)
  })
  return {
    total,//== getter
    arr, //== state
    updateTodo() { //== actions
      arr.value.push({ id: 4, do: '组合式' })
    }
  }
})
// 向外暴露
export default todos;