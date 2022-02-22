### Hooks

+ Hooks can be imported at the top of functional component and we can't use in class component
+ `useState()`
- The main difference between `setState()` in class component and `useState()` is `setState()` merge current state with previous state, But `useState()` will replace previous data with current data.
+ `this` keyword we have to use in class component

+ `useEffect()` adds ability to perform side effects from a function component

    - It serves as `componentDidMount()`,`componentDidUpdate()` and `componentWillUnmount()` in React classes, But unified into a single API
    - By default react runs the effects after every render -including the first order
    - Just like with useState, you can use more than a single effect in a component

    - `[]` is secondargumet pass for useEffect with empty dependency it will call for every render.
    - uesEffect will re-render based uponthe dependency in the second argument(EX:if you want render for count is increased thent pass `[count]`)

  - To perform `componentWillUnmount()` in useEffect take `return` after api calling 

  + customHook means create ownHook. Mention `use` for before customhookname like `useFetch`

  + `useContext` hook makes it easy to pass data throughout application without manually passing props down the tree
  + Context can make a nice simple alternative to Readux when your data is simple or your app is small

    -  Initially  above component create variable(Contect)  for `createContext()` in main component and export it .
    - provide value with in the `Context.Provider`
    - include child component with in the provider
    - In child component import main component and create element `Context.Consumer` with in that read data by `value=> <h1>{value}</h1>`
  + we can use `useContext` hook and pass `createContext` as a parameter to use `useContext`


+ `useReducer` will work as reducer in redux
  - Initially we maintain data and create Reducer pass action and state as arguments
  - Based upon the action it should render data or error in fetchaPI

+ `useMemo` 

  - Whenever a huge computation is involved, then we can use useMemo hook
  - Whenever there is no need of re-rendering if the respective state is not changed
  - Two addition of two values with in the function of sum it took large computation then only it willl give result.
  - Because of expensive function UI is updating very low to avoid that we can use useMemo
  - Take the entire functionality in useMemo
  - The result can be store in the cache it deosn't effect the remaining ui
  - useMemo returns a value
  - useCallback returns a function
  - useRef used to focus a specific data
  - useImperativeHandle customizes the instance value that is exposed to parent components when using ref
  - useLayoutEffct is executed before rendering ui
  - useDebugValue hook can be used for custome hook