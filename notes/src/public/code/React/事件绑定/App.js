function App() {
  // 一般方法
  /*const handleClick = () => {
    console.log('Hello World!');
  }*/

  // 获取事件对象的方法
  /*const handleClick = (e) => {
    console.log("获取事件对象: ", e);
  }*/

  // 高阶玩法: 函数科里化 -> 获取更多需要传递的参数
  const handleClick = (e, name1, name2) => {
    /**
     * 事件对象 event 可以选择不传递（即不接收），传递其它参数就行了
     * 这里演示事件对象如果需要的话，可以一并接收
     */
    console.log(e, name1, name2)
  }

  return (
    <div>
      <button onClick={(event) => handleClick(event, 'jack', 'rose')}>Click Me</button>
    </div>
  )
}

export default App;