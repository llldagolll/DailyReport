import React, {useState} from 'react';
// import {  makeStyles } from "@material-ui/core";
import { Link } from 'react-router-dom';


const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit=(e) => {
    //再読み込みさせない
    // e.preventDefault()

    //emain, passwordをアラート
    alert(`メールアドレス:${email} パスワード:${password}`)

    //email, password変数を初期化
    setEmail("")
    setPassword("")

  }

  return (
    <div className="App">
      <h1>ログインフォーム</h1>
      <form action="" onSubmit={(e)=>handleSubmit(e)}>
        <input type="email" placeholder="メールアドレス" onChange={(e)=>setEmail(e.target.value)} />
        <br/>
        <input type="password" placeholder="パスワード" onChange={(e)=>setPassword(e.target.value)} />
        <br/>
        <Link to={`/home`}>ログイン</Link>
      </form>
    </div>
  );
}


export default Login
