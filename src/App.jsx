import { useState } from 'react'
import './App.css'
import Logout from './Logout'
import Login from './Login'
// import Header from './Header';
// import Footer from './Footer';

function App() {
   const [isLogin,setIsLogin] = useState(0)
  // const arr = [10,20,30,40,50];
  //filter - return {20}
  //includes - true/false
  //reduce
  // const res = arr.reduce((total,i)=>{
  //   console.log(total);
  //   return total+i;
  // })
  return (
    <>
      { isLogin ?<Logout /> : <Login /> }
      <button onClick={()=>setIsLogin(!isLogin)}>{ isLogin ? "Logout" : "Login"}</button>
      {/* <h3>My First Component </h3>
      <h3>Firebase deploy done..</h3>
      <h4>Addition is {res}</h4>
      <Header name123="abc"/>
      <Footer />

       */}
    </>
  )
}

export default App
