import React from 'react'

function Home() {
  return (
    <div className='home'>
        <dl>
            <dt>
               what is a reactjs
            </dt>
            <dd>
              <ul>
                <li>Java script libary for building user Interfaces</li>
                <li>it is not a framework</li>
                <li>It differs from other frameworks by introducing a <b><i>virtual DOM</i></b>, which allows efficient updates and rendering of components. React also promotes a component-based architecture, making it easy to reuse and maintain UI elements.
                </li>
                <li>Flexibility, Big corporate support and investment, community support, performance, Testability</li>
                <li>for web apps we use react-dom to convert the compnent to html</li>
              </ul>
              <p>Key features of ReactJS include:</p>
                 <ul>
                    <li>
                     	Virtual DOM for efficient rendering.
                    </li>
                    <li>
                    	Component-based architecture for reusability.
                    </li>
                    <li>
                        Unidirectional data flow with props and state.
                    </li>
                    <li>
                       React hooks for managing state and side effects.
                    </li>
                    <li>
                       JSX syntax for writing HTML-like code in JavaScript.
                    </li>
                    <li>
                       React Router for client-side routing.
                    </li>
                    <li>
                       React Native for building mobile applications.
                    </li>
                 </ul>

              <code>
              const root = ReactDOM.createRoot(document.getElementById('root'));
                 <br/>
                root.render();
              </code>
            </dd>
        </dl>
        <dl>
            <dt>Explain the concept of Virtual DOM in React and how it helps in performance optimization.</dt>
            <dd>
               Virtual DOM is a lightweight representation of the actual DOM in memory. When changes occur in the component's state, react calculates the difference between the previous and updated virtual DOM and applies only the necessary updates to the actual DOM. This approach minimizes direct manipulations of the DOM, resulting in improved performance.
            </dd>
        </dl>
        <dl>
            <dt>How would you optimize a React application for better performance?</dt>
            <dd>
               <ul>
                  <li>
                    Implement code splitting and lazy loading to reduce initial bundle size and load only the required components.
                  </li>
                  <li>
                     Use React.memo or shouldComponentUpdate to prevent unnecessary re-renders
                  </li>
                  <li>
                     Optimize the use of React hooks to minimize unnecessary state updates.
                  </li>
                  <li>
                     Use the production build of React to enable additional performance optimizations.
                  </li>
                  <li>
                     Implement memoization techniques like memo or useMemo to cache expensive calculations.
                  </li>
                  <li>
                  	Implement virtualization techniques like windowing or infinite scrolling for efficient rendering of large lists.
                  </li>
                  <li>
                    Use a performance profiling tool like React Profiler or Chrome DevTools to identify and optimize performance bottlenecks.
                  </li>
               </ul>
            </dd>
        </dl>
        <dl>
            <dt>What is the significance of keys in React? Why are they important when rendering lists?</dt>
            <dd>
              Keys in React are used to uniquely identify elements in a list. They help React efficiently update and re-render the list when items are added, removed, or reordered. Keys provide a way for React to keep track of individual components within a list and optimize the rendering process.
            </dd>
        </dl>
        <dl>
            <dt>
               Explain the concept of state in React and the difference between state and props.
            </dt>
            <dd>
            <p>State in React represents the internal data of a component. It is mutable and managed by the component itself. Changes to state trigger re-rendering of the component.</p>
            <p>Props, on the other hand, are immutable and passed from parent to child components. They provide a way for components to receive data and communicate with each other. Props cannot be modified by the receiving component.</p>
            </dd>
        </dl>
    </div>
  )
}

export default Home
