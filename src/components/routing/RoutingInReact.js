import React from 'react'

export default function RoutingInReact() {
  return (
    <div>
       <ul>
          <li>npm install react-router-dom</li>
          <li>
            <p>BrowserRouter - framing of URL (to well formed browser url)</p>
            <p>HashRouter - it will add "#" at base url.</p>
            <p>basename - using in (BrowserRouter) all routes will come with this name.</p>
            <p>forceRefresh - (BrowserRouter) when we navigating one route to another route. page will refresh.</p>
            <p>hashtype (HashRouter) - it will add  '/' at end of the hase (default). nonoslash it will not add hash. </p>
            <p>exact - it load particlar page.</p>
          </li>
          <li>
            First we need to import "BrowserRouter" (or) HashRouter it is also one type of component.
             at top in "app.js"
          </li>
          <li>
            In between "header" and "footer" we need to use component "Route" with "path".
            and "component". like "home,about".
          </li>
          <li>
            in b/w route tag also we can add "home", "about". it works like props.children.
            we can also use "render=(()=> <div>Hello</div>)". we need to send routing "props"
          </li>
          <li>
            children - same as "render" only. it will load all times. if path matches or not, it show 
            always.
          </li>
          <li>
             <p>Link - to navigate one page to another page. without reloading page. with "to="/".
                in "to" we can send in object in path:'/', hash:"#abc", search:"?abc=abc".
             </p>
             <p>NavLink - it is use to get active class when route matches. with activeClassName="test". 
                "exact" we need to use.
             </p>
          </li>
          <li>
            <p>switch - is use for conduction based routing.  we need to use in b/w "route" tags. with out using 
            exact in "route" tag.</p>
            <p>withRouter - is a HOC function it use to pass the routing "props" to child component's also.</p>
          </li>
          <li>
             useParams - to get dynamic data from url. like (id). and we will get in props.
          </li>
          <li>
             useHistory - history.push("/settings"). to navigate one page to another.
          </li>
          <li>
             Redirect component - to move page one route to another route.
          </li>
          <li>
            <p>lazy Loading component - to decress bundling of application. new chunk file will load. </p>
            <p>lazy(()=> import('component path')). this component need to place in tag "Suspense" we need to 
                place in "fallback" ui. lazy load file allways "default".
            </p>
            <p>
                for routing we can do. here Suspense place above to switch. webpackChunkName=About
            </p>
          </li>
       </ul>
    </div>
  )
}
