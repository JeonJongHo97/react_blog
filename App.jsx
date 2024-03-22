import './App.css';

import { useState } from 'react';



function App() {


    let [title, setTitle] = useState(['경기도', '강원도', '제주도']);
    let [clickup, setClickup] = useState(0);

    return (

        <div className="App">
            <div className="black-nav">
                <h4 style={{ color: 'red', fontSize: '20px' }}>React Blog</h4>
            </div>

            <div className="list">

                <h4>{title[0]} <span onClick={() => {
                    setClickup(clickup + 1);
                }}>👍</span> {clickup}</h4>
                <p>2월 17일 발행</p>

                <button onClick={() => {
                    let copy = [...title];
                    copy[0] = '충청도';
                    setTitle(copy);
                }}>제목 변경</button>
            </div>

            <div className="list">
                <h4>{title[1]}</h4>
                <p>2월 17일 발행</p>
            </div>

            <div className="list">
                <h4>{title[2]}</h4>
                <p>2월 17일 발행</p>
            </div>



            <button onClick={() => {
                let copy = [...title];
                copy.sort();
                setTitle(copy);
            }}>제목 정렬</button>

            <Modal />

        </div>
    );
}



function Modal() {
    return (
        <div className="modal">
            <h4>제목</h4>
            <p>날짜</p>
            <p>상세내용</p>
        </div>
    )
}
export default App;