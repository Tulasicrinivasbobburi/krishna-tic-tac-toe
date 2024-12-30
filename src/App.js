import React from 'react'
import './App.css'

export default function App(){
  const [player,setPlayer]= React.useState('x')
  const [count,setCount]= React.useState(1);
  const [flag,setFlag]=React.useState(1)
function Check(){
  const wincond=[[0,1,2],
                  [3,4,5],
                  [6,7,8],
                  [0,3,6],
                  [1,4,7],
                  [2,5,8],
                  [0,4,8] ,
                  [2,4,6]
  ]
let c=[];
  for(let i=0;i<=8;i++){
    c.push(document.getElementById(`cell${i}`).innerHTML)
 }
 for(let y of wincond){
  if(y.every(index=>c[index]===player)){
    document.getElementById('result').innerHTML= player +'is winner'
   setFlag(0);
  }
 }
 if(count===9){
  document.getElementById('result').innerHTML="its a draw "
   setFlag(0);
 
 }
}

 function Add(index){
  if(flag===1){

    if((document.getElementById(index).innerHTML==="")){
if(player=== 'x'){
  document.getElementById(index).innerHTML=player;
  Check()
  setCount(count+1)

  setPlayer('o')
}  else{
  document.getElementById(index).innerHTML=player;
  Check()
  setCount(count+1)
setPlayer('x')
  
}    
 }
}  else{
  alert("not allowed");
 }
 
  }
  return(
    <div id="container">
<div id='img1'><h1>Tic tac toe</h1></div>

      <div id='sub'>
      <div className="cell" id='cell0' onClick={()=>{Add('cell0')} }></div>
      <div className="cell" id='cell1' onClick={()=>{Add( 'cell1')}}></div>
      <div className="cell" id='cell2' onClick={()=>{Add( 'cell2')}}></div>
      <div className="cell"id='cell3' onClick={()=>{Add( 'cell3')}}></div>
      <div className="cell"id='cell4' onClick={()=>{Add( 'cell4')}}></div>
      <div className="cell"id='cell5' onClick={()=>{Add( 'cell5')}}></div>
      <div className="cell"id='cell6' onClick={()=>{Add( 'cell6')}}></div>
      <div className="cell"id='cell7' onClick={()=>{Add( 'cell7')}}></div>
      <div className="cell"id='cell8' onClick={()=>{Add( 'cell8')}}></div>
      </div>
<h1>its player {player} turn</h1>
<button className='reset' onClick={()=>{window.location="/"}}>Restart</button>
<p id="result"></p>



    </div>

  )
}