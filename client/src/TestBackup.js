import React from 'react'

/* 
1. 컴포넌트의 이름은 반드시 영어 대문자로 시작하여야 합니다. 
2. 컴포넌트는 다른 컴포넌트가 사용할 수 있도록 export 해주어야 합니다. 
3. 컴포넌트가 다른 컴포넌트를 사용하려면 import 해야 합니다.
4. return 할 때 하나의 태그로 감싸져야 한다. 
5. div태그가 남발될 수 있어 fragment라는 기술을 제공 하는데 <> 빈 태그를 사용 하면된다. th:block 느낌.
*/

function Test() {

//JSX
// 1. CamelCase 원칙 사용 : className
// 2. js : {} return안에서 변수명은 {}로 감싸야한다.
// 3. css, style : {{}} + object 

const Temp = 7;

  return (
    <>
        <h1 className='' style={{ color: 'blue', fontSize : '3rem'}}>Test 컴포넌트 입니다. </h1>
        <h3 className='testCss'>외부 CSS파일 적용 </h3>
       <br />
       {Temp}
    </>
  );
}

function Test2() {
  const [Temp, setTemp] = useState([]);
  const [Number, setNumber] = useState(0);

  return (
    <>
        <h1 className='test'>Test 컴포넌트 입니다. </h1>
        {Temp.map((element,idx) => {
          return <p key={idx}>{element}</p>
        })}
        <button onClick={() => {
          let arr = [];
          arr = [...Temp]; //...은 배열에 있는 내용을 다 가져옴.
          arr.push(Number)
          setNumber(Number +1);
          setTemp([...arr]);
        }}>증가 </button>
    </>
  );
}

function Test3() {
  const [Temp, setTemp] = useState(false);
  
  return (
    <div>
      {/* 
      Temp의 값이 true이면 h1 보여주고
      Temp이 값이 false면 h1 숨김
      btn 클릭시 temp값 변경(!)
      
      */}
      {Temp ? <h1 className='test'>Test 컴포넌트 입니다. </h1> : null}
        
      <button onClick={()=> {setTemp(!Temp)}}> {Temp ? "숨기기" : "보기" }</button>
    </div>
  );
}

export default Test;