import React from 'react'
import './App.css';
import Homepage from './homepage.component';
import {Switch, Route} from 'react-router-dom'


const HomePage = (props)=> {
  console.log(props);
  return(
    <div>
      <h1>Home Page</h1>
    </div>
  )
}

const TopicsList = ()=> {
  return(
    <div>
      <h1>Topiclist  Page</h1>
    </div>
  )
}

const TopicDetail = ()=> {
  return(
    <div>
      <h1>TopicDeatil  Page</h1>
    </div>
  )
}

function App() {
  return  (

        <div > 
                <Switch>
                   <Route exact path='/' component={HomePage} /> 
                   <Route  exact path='/topics' component={TopicsList} /> 
                   <Route path='/topics/:topicId' component={TopicDetail} /> 
                </Switch>
               
        </div>
  ) 
  
  
  
}

export default App;
