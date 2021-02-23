import React from 'react';
import './App.css';
import {  Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth} from './firebase/firebase.utils'


class App extends React.Component {
    constructor(){
        super();
        this.state = {
            currentUser: null,
        }
    }
  
  unsubscribedFromAuth  = null;


    componentDidMount(){
     this.unsubscribedFromAuth =   auth.onAuthStateChanged(user => {
           this.setState({currentUser: user})
           console.log(user);
       })
    } 

    componentWillUnmount(){
        this.unsubscribedFromAuth()
    }
  
    render(){
        return (
            <div>
            <Header currentUser = {this.state.currentUser} />
               <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/shop' component={ShopPage}/>
                    <Route path='/signin' component={SignInAndSignUpPage} />
                </Switch>
         
               
            </div>
        );

    }
    
}

export default App;

// import React from 'react' import './App.css'; import Homepage from
// './pages/homepage/homepage.component'; import {Switch, Route} from
// 'react-router-dom' const HomePage = (props)=> {   console.log(props);
// return(     <div>       <h1>Home Page</h1>     </div>   ) } const TopicsList
// = ()=> {   return(     <div>       <h1>Topiclist  Page</h1>     </div>   ) }
// const TopicDetail = ()=> {   return(     <div>       <h1>TopicDeatil
// Page</h1>     </div>   ) } function App() {   return  (         <div >
//          <Switch>                    <Route exact path='/'
// component={HomePage} />                    <Route  exact path='/topics'
// component={TopicsList} />                    <Route path='/topics/:topicId'
// component={TopicDetail} />                 </Switch>         </div>   ) }
// export default App;