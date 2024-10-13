import { useState } from "react";

function App() {
  /**
   * useState 返回值是一个数组
   * 数组中包含『useState接收的初始值』、『修改这个状态值的方法』
   */
  let [count, setCount] = useState(0)
  // count++;             // 这样修改状态是错误的, 无法引发视图更新    // [!code error]

  const handleClick = () => {
    setCount(count + 1)   // 这样修改状态是正确的       // [!code ++]
  }
  return (
    <div>
      <button onClick={handleClick}>{count}</button>
    </div>
  )
}

export default App;