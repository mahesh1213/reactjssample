import React from 'react'

export default function ReduxMain() {
  return (
    <div>
       <p>use manage application state globaly. using event called "action"</p>
       <p>it serves as a centralized store for state that need to be used across your entair application</p>
       <p>redux libraries and tools, react-redux, react toolkit, redux devTools.</p>
       <p> react redux using we can integrate any ui framework and most frequently. in component we can
        easly read state and dispathing the action update the state.
       </p>
       <p>redux toolkit is recommended approach for writing reduz logic.</p>
       <p>redux dev tools use to debug ur application</p>
       <ul>
          <li>state</li>
          <li>view</li>
          <li>actions</li>
       </ul>
       <ul>
          <li>store - current redux application state live in an object. it has method "store.getstore()".
            store is created by passing reducer.</li>
          <li>action - plain javascript object. with property "type" it should be a string. and it hase payload</li>
          <li>action creators</li>
          <li>reducers - it will update store and able to send new state to ui.is a pure function
            it takes arguments "state" and action
          </li>
          <li>dispatch - store has methode called dispatch. "store.dispatch(type, payload)"</li>
       </ul>
       <hr></hr>
       <div>
         <p>install redux "npm install redux"</p>
         <p>create store,action,reducer.</p>
         <p>in store.js we need to use "createStore" and we need to pass reducers file.</p>
         <p>we have "store.subscribe(method)"". when ever acctions or dispatch occur it will call.</p>
       </div>
       <hr/>
       <div>
         <h4>React Redux</h4>
         <p>install reactredux "npm install react-redux"</p>
         <p>in react component to read data from a redux store, and dispatch actions to the store to 
          update data
         </p>
         <p>redux is a standalone libraries we can use this one to any ui frame work. like angular,react,vue.</p>
         <p>react and redux are commonly used together they are independent of each other</p>
         <p>react redux libraries use for combain react and redux.</p>
         <p>implememt performance optimization.</p>
         <p>react-redux provides "Provider" tag. which makes redux store avaliable to the rest of the 
          app. which we add at root of the application.
         </p>

         <p>
           "connect" function in order to connect with component to store.
           "mapStateToProps" is a function "state" as argument
           "mapDispatchToProps" is a function "dispatch"
           "connect" we need to pass this arguments "mapStateToProps" "mapDispatchToProps" as hoc.
         </p>
         <p>
           to integrate react-redux at root level of the app we need to add "Provider".
         </p>
         <p>"bindActionCreators - " use for bind actions. here we need to dispatch.</p>
         <p>"useSelector,useDispatch" two hooks we have.</p>
       </div>
       <hr/>
       <div>
          <h5>Middle ware</h5>
          <p>applyMiddleware - to customize dispatch functionty. 
          Creates a store enhancer that applies middleware to the dispatch method of the Redux store. 
          This is handy for a variety of tasks, such as expressing asynchronous actions in a concise manner, 
          or logging every action payload.
          </p>
          <p>
            do any this for dispatch "actions." to perform console log and asynchronous calls.
          </p>
       </div>
       <hr/>
       <div>
          <h5>Redux dev tools</h5>
          <p>npm install</p>
          <p>
            make it easier to understand when, were why and how your store is updating. it is add
            it shows history of actions were dispatch.
          </p>
          <p>
          Composes single-argument functions from right to left. The rightmost 
          function can take multiple arguments as it provides the signature for the resulting composite function.
          </p>
       </div>
       <div>
         <h4>perform asynchronous api calls</h4>
           <p>combineReducers - use to combain multiple reducers.</p>
           <p>Reducers are pure function's here we not able to call. asynchronous call. for this we need to use 
            middleware.
           </p>
       </div>
       <div>
         <h4>Redux thunk</h4>
           <p>it is a middleware which is used for performing the asynchronous logic. npm install redux-thunk.</p>
           <p>in apply middleware we need to add as argument 'thunk'.</p>
           <p>it "return" a function which has "dispatch" and "getState" as argument.</p>
       </div>
       <div>
         <h4>Create Selectors</h4>
         <p>we need to install "npm install reselect"</p>
         <p>to memorize the useSelector</p>
       </div>
    </div>
  )
}
