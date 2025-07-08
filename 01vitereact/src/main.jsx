import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return (
    <div>
      <h1>Custom App !</h1>
    </div>
  )
}
// yeh func Myapp ultimate parse hokar tree ke format me ban jata hai by the help of bundler
const ReactElement = {
    type: 'a', 
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}
// custom wale me ek alag render custom banaya tha isliye yaha nhi chal rha hai 

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit google</a>
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
    // <MyApp />
    // ReactElement
    anotherElement // yeh ek object hai to aise hi pass karna hoga 
)
