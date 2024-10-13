import "./index.css"

const style = {
  color: 'deeppink',
  fontSize: '18px',
  textAlign: 'center'
}

function App() {

  return (
    <div>
      {/* 1、行内样式 */}
      <h1 style={style}>Hello World!</h1>
      {/* 2、通过className类名控制 */}
      <h1 className="example">Hello World! Copied!</h1>
    </div>
  )
}

export default App;