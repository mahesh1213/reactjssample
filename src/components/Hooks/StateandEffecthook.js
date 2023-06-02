import React, { useEffect, useState } from 'react'

export default function StateandEffecthook() {

    const [user,setUser] = useState('');

    // it call mounted and update
    useEffect(()=>{
      console.log('it call every time when ever changes occur');
    })

    // it call only mounted
    useEffect(()=>{
        console.log('it call one time after render');
      },[])

     // updated and unmounted
      useEffect(()=>{
        console.log('it call when user value changes');
        return ()=>{console.log('component destory')}
      },[user])

   const setUserValue = (e)=>{
        let value = e.target.value;
        setUser(value);
    }

  return (
    <div>
        <div>
            <p>intruduce in react 16.8</p>
            <p>complex compnent hard to underStand</p>
            <p>useState - it create store for a value. and we can set value.</p>
            <p>useEffect - performing side effect like component life cycle.it take a method.</p>
        </div>
      <p>
        <label>User Name is {user}: </label>
        <input type={'text'} value={user} onChange={setUserValue}/>
      </p>
    </div>
  )
}
