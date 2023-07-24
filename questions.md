1. Q: What is the difference between Component and PureComponent? Give
   an example where it might break my app.
   
   A: A React Component does not implement the `shouldComponentUpdate()` method in its class while a PureComponent does. You can break your app if you try to manipulate props or state directly.
   
2. Q: Context + ShouldComponentUpdate might be dangerous. Why is that?
   
   A: Because `shouldComponentUpdate()` does not take into consideration the React Context. So, if the Context changes, you'll probably have some outdated data on your page.

3. Q: Describe 3 ways to pass information from a component to its PARENT.
   
   A: You can use a callback function, which will allow you to pass some data to the parent component through function params and you can call setState in this function or anything else. You can also use the Context API, which is built into React. You can also use some general state management tools like Redux or JOTAI or anything on those lines.
   
4. Q: Give 2 ways to prevent components from re-rendering.
   
   A: Talking about class components, you can implement `shouldComponentUpdate()` method in your class to avoid a re-render if there's no need, based on some custom logic you can write; and you can also use React.memo to prevent a re-render if the props for your component did not change.
 
5. Q: What is a fragment and why do we need it? Give an example where it might
   break my app.
   
   A: A React Fragment allows us to render multiple children without having to wrap it into an HTML element. I can't think of an issue that a React Fragment would cause but I can think of issues that can be caused by adding extra unnecessary HTML elements to the page, like, it can break your layout, for example.
   
6. Q: Give 3 examples of the HOC pattern.
   
   A: Well, React Memo uses it, Redux connect function uses it, React Router withRouter also uses it. Not sure if you wanted this kind of examples or if you wanted me to explain 3 use cases, so, I'll try to explain a few use cases here:
 - You can use it for conditional rendering, to render or not a component based on some custom logic.
 - You can create lifecycle methods/class component that can then call a function component at the end, through function parameters (You can also manipulate your function component's ref value to expose a few custom methods by using the hook `useImperativeHandle`, but that's another story)
 - You can inject some props in the child component

7. Q: What's the difference in handling exceptions in promises, callbacks
   and async...await?

   A: Well, you can handle an exception in a promise by using the .catch method, it works like the .then method, it will receive a callback that will run in case we run into an exception. On the other hand, for async/await, you can use the try/catch block, works just fine for catching exceptions inside async functions. For the callback error pattern, very used in node built-in functions, you'll usually receive an err through the callback params so you'll know if something went wrong.

8. Q: How many arguments does setState take and why is it async.

   A: setState in class components take up to two arguments but it does not need two arguments to work properly. The second argument is usually a callback that runs when the state gets updated while the first one is the new state content. setState does not immediately updates the component state. It flags to React that the state needs to be updated, React will update the state when it finds convenient, triggering a re-render. You can find more info about it [here](https://legacy.reactjs.org/docs/react-component.html#:~:text=setState()%20does%20not%20always%20immediately%20update%20the%20component.%20It%20may%20batch%20or%20defer%20the%20update%20until%20later.)
    
9. Q: List the steps needed to migrate a Class to Function Component.

    A: Well, you can start by creating a function component with the same name. Then you can analyze the lifecycle methods and adapt the component logic to use hooks instead. You can achieve the class behaviors with some hooks, for example, `componentWillUnmount()` can be achieved by creating a `useEffect()` with an empty dependency array and returning a function on the useEffect callback. You also need to check the state, React Hooks allow you to create multiple independent states and you can even use a `useReducer()` to have a redux-like experience while managing your component's state. Remember that there's no `this` in a function component. You also need to replace the class methods with regular functions. That should cover the basic parts but every component is a specific case and you may need to change more things to make it work properly, the most important thing is to note the previous behavior and replicate it after migrating. You also need to know that unit tests may break and that a function component's ref will not have the class lifecycle methods, so, if that's mandatory for you, you may need to use the `useImperativeHandle` hook.
 
10. Q: List a few ways styles can be used with components.

    A: You can use inline styles, you can use CSS classes, you can use CSS modules, you can use CSS-In-JS libraries like styled-components and I bet that's not all but it should be enough :D
    
11. Q: How to render an HTML string coming from the server.

    A: Well, you can use dangerouslySetInnerHTML prop in a div, but that's not recommended since it can cause a few issues. You can use stuff like React HTML Parser library or DOMPurify, it should make it safer and it will still work just fine.
