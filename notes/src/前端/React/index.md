# React 框架

## 创建并运行 React 项目

:::code-group

```bash [创建项目]
$ npx create-react-app my-app       # 脚手架简称 CRA
```

```bash [运行项目]
$ cd my-app
$ npm start
```

:::


::: tip 推荐
- 现在 `vite` 已经成为新一代的构建工具，我们可以通过`vite`来构建一个性能更优的`react`项目。
:::

```bash
# 使用 vite 提供的模板创建一个基本的 react 项目结构
$ npm create vite@latest my-react-app -- --template react-ts
# 启动项目
$ cd my-react-app
$ npm install
$ npm run dev
```

- 在 `vite.config.ts` 中添加如下配置, 在导入时统一使用 `@` 符号表示 `src` 目录下的资源文件

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});

/** 比如: import logo from '@/assets/logo.svg' */
```


React 和 ReactDom 的区别是什么? 为什么有两个库?
1. `react`: 这是 react 库的核心。它定义了React组件的创建和生命周期方法, 以及React元素的概念。可以将其视为React的"引擎"。
2. `react-dom`: 这个库提供了在浏览器环境中使用 react 的方法, 例如将 react 组件渲染到DOM中,或者在DOM中触发组件的更新。可以将其视为React的"驱动程序"。

## JSX语法

::: info 说明
`JSX 语法` 就是 JavaScript 的语法扩展。它允许在 JavaScript 中使用 HTML 语法来创建 React 元素。实际底层是通过 babel 编译器将 JSX 转换为 `React.createElement()` 调用。
:::

> 可以通过 babel 官网测试JSX语法, 看实际 JSX 语法经过编译后生成的代码是什么样的.

> 利用 `JSX`语法的简便之处, 我们可以书写`js 和 html` 混合的代码

```tsx
import { useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  /** jsx语法中任意写 js 和 hmtl 的混合代码 */
  let Content = null;
  if (isLoading) {
    Content = <p>Loading...</p>;
  } else {
    Content = <p>Count: 1</p>;
  }

  return (
    <div>
      {Content}
      <button onClick={() => setIsLoading(!isLoading)}>Change isLoading</button>
    </div>
  );
}

export default App;
```

### 列表渲染 && useState

```tsx
import { useState } from "react";

function App() {
  const [people, setPeople] = useState([
    {
      id: 1,
      name: "jack",
      age: 18,
    },
    {
      id: 2,
      name: "tom",
      age: 20,
    },
    {
      id: 3,
      name: "lily",
      age: 22,
    },
  ]);

  const popLastPerson = () => {
    people.pop();
    setPeople([...people]); // setMethod 会将原来的值完全覆盖掉
  };

  /** map 生成 dom 元素 */
  const students = people.map((item) => (
    <li key={item.id}>name: {item.name}</li>
  ));

  return (
    <div>
      <button onClick={popLastPerson}>移除最后一个</button>
      <ul>{students}</ul>
    </div>
  );
}

export default App;
```


## 插值语法

::: tip 说明
- React 中的插值语法通过 `{ }` 的方式来插入表达式, 表达式包含哪些? 例如: 变量、函数调用、计算表达式、三元表达式、逻辑表达式等具有返回值的式子就称为表达式。
- React 的事件绑定处的 `{ }` 特殊一点，必须要在此处定义函数或引用事件处理程序的函数名称。
:::


## 事件绑定

::: tip 说明
- React 中的事件绑定通过 `onEventName` 的方式来绑定事件。例如: `onClick`, `onChange`, `onSubmit` 等等，规律是React内部对原生事件进一步封装的事件名均是以 `on` 开头的小驼峰命名的名称。
- React 的事件绑定处的 `{ }` 里面，必须要在此处定义或引用事件处理程序。
:::

```tsx
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>演示插值语法: {count}</h1>
      {/* 下面就是事件绑定 */}
      <button onClick={() => setCount(count - 1)}>decrease</button>
      <button onClick={() => setCount(count + 1)}>increase</button>
    </div>
  );
}

export default App;
```

## 组件传参

### Dom 组件传参
> 在 react 中, 涉及到关键字的一些 DOM 属性, 被改换用另外一种命名规则。

- 标签的类名属性使用: `className`


- 标签内写行内样式使用: `style` 对象形式(多单词的属性使用小驼峰命名规则)

> 示例

```tsx
import logo from "@/assets/react.svg";

function App() {
  return (
    <div>
      <img
        src={logo}
        alt="logo"
        className="small"
        style={{
          width: 200,
          height: 200,
          backgroundColor: 'grey'
        }}
      />
    </div>
  );
}

export default App;

```

> 或者将属性集中方在一个对象中, 然后通过 react 提供的DOM属性的对象解构语法, 将对象中的属性解构到DOM组件身上

```tsx
import logo from "@/assets/react.svg";

function App() {
  const imageProps = {
    src: logo,
    alt: "react lgoo",
    className: "small",
    style: {
      width: 200,
      height: 200,
      backgroundColor: "grey",
    },
  };

  return (
    <div>
      <img {...imageProps} />
    </div>
  );
}

export default App;
```

### React 组件传参

> 函数组件传入的参数, 会收集到函数的第一个形参中, 一般该形参默认称为 props

```tsx
interface ArticleProps {
  title: string;
  content: string;
  active?: boolean;
}

/**(1)外部给组件赋的值都会收集到 props 中 */
function Article1(props: ArticleProps) {
  const { title, content, active } = props;
  console.log(title, content, active);
  return (
    <div>
      <h1>{title}</h1>
      <h2>{content}</h2>
      <h3>状态: {active ? "显示中" : "已隐藏"}</h3>
    </div>
  );
}

/**(2)也可以在传参时直接解构, 直接就能使用了 */
/**这里的 active 赋值了默认值, 原本要解构这个 active 值, 而外部没有传入默认是 undefined, 但为了得到更准确的得到布尔值, 这里给它赋值一个默认值. 如果组件在使用时, 传入了 active, 那么 active 就会变成 true, 以传入的值为准 */
function Article2({ title, content, active = false }: ArticleProps) {
  console.log(title, content, active);
  return (
    <div>
      <h1>{title}</h1>
      <h2>{content}</h2>
      <h3>状态: {active ? "显示中" : "已隐藏"}</h3>
    </div>
  );
}

function App() {
  return (
    <div>
      <Article1 title="Article1 Title" content="Article1 Content" active />
      <Article2 title="Article2 Title" content="Article2 Content" />
    </div>
  );
}

export default App;

```


## 组件通信

### 父传子通信: 通过 props 传递

> 不过多赘述, 略...

### 子传父通信: 

```tsx
import { useState } from "react";

interface ChildProps {
  onActive: (status: boolean) => void;
}

function Child({ onActive }: ChildProps) {
  const [status, setStatus] = useState(false);

  const handleClick = () => {
    const newStatus = !status;
    setStatus(newStatus);
    /**3.在状态改变时, 调用父组件传递的方法并将数据传入 */
    onActive(newStatus);
  };

  return (
    <button className={status ? "active" : ""} onClick={handleClick}>
      {status ? "actived" : "deactived"}
    </button>
  );
}

function App() {
  /**1. 父组件准备供子组件调用的方法, 通过形参接收子组件回传的值 */
  const handleActive = (value: boolean) => {
    console.log("子组件回传内容: ", value);
  };
  /**2.将方法传递给子组件 */
  return <Child onActive={handleActive} />;
}

export default App;
```

## 常用 hooks

### `useState`

> `useState` 方法接收一个初始值, 返回一个数组, 数组的第一个元素是状态值, 第二个元素是更新状态值的方法。

```tsx
// App.tsx
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1); // ✅ 增加操作
  const decrease = () => setCount(count - 1); // ✅ 減少操作

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <br />
        <br />
        <button onClick={increase}>increase</button>
        <button onClick={decrease}>decrease</button>
      </div>
    </>
  );
}

export default App;
```


### `useReducer`

::: info 说明
> `useReducer` 提供了统一管理状态的方式。
:::

- 使用 `Reducer` 来对状态集中统一管理

```tsx
import { useReducer } from "react";

function countReducer(
  state: number,
  action: { type: "increment" | "decrement" }
) {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      throw new Error("Invalid action");
  }
}

function App() {
  const [state, dispatch] = useReducer(countReducer, 0);

  const handleDecrement = () => dispatch({ type: "decrement" });

  const handleIncrement = () => dispatch({ type: "increment" });

  return (
    <div className="container">
      <div className="row">
        <div className="col-6 offset-3 mt-5">
          <div className="input-group">
            <button className="btn btn-danger" onClick={handleDecrement}>
              -
            </button>
            <input
              className="form-control text-center"
              type="text"
              readOnly
              value={state}
            />
            <button className="btn btn-success" onClick={handleIncrement}>
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
```

> 等价于下面的操作

```tsx
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleDecrement = () => setCount(count - 1);
  const handleIncrement = () => setCount(count + 1);

  return (
    <div className="container">
      <div className="row">
        <div className="col-6 offset-3 mt-5">
          <div className="input-group">
            <button className="btn btn-danger" onClick={handleDecrement}>
              -
            </button>
            <input
              className="form-control text-center"
              type="text"
              readOnly
              value={count}
            />
            <button className="btn btn-success" onClick={handleIncrement}>
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
```


### `useRef`

::: info 说明
- 获取 DOM 元素的引用
- 存储任意可变值
- 维护对象的稳定引用

> :warning: 不会触发组件的更新

:::


```tsx
import { useState, useRef } from "react";

function App() {
  const [count, setCount] = useState(0);
  const preCount = useRef<number>(count);
  const handleClick = () => {
    preCount.current = count;
    setCount(count + 1);
  };
  return (
    <button className="btn btn-primary" onClick={handleClick}>
      count: {count}, 上一次的值: {preCount.current}
    </button>
  );
}

export default App;
```


## 二、React 基础语法

### 列表渲染

:::code-group
<<< @/public/code/React/列表渲染/App.js{12}
<<< @/public/code/React/列表渲染/index.js
:::

### 列表渲染

<<< @/public/code/React/条件渲染/App.js

### 事件处理

<<< @/public/code/React/事件绑定/App.js

### useState

![useState Hook](/pictures/react/useState.png)

> 示例

<<< @/public/code/React/useState/App.js

### 样式控制

:::code-group
<<< @/public/code/React/样式控制/App.js{1}
<<< @/public/code/React/样式控制/index.css
:::


## React 核心知识回顾

::: info
- JSX 语法
- 插值语法
- 事件绑定
- 常用 Hooks
- 组件通信
- 组件插槽
- 组件传参
- 样式对象

:::