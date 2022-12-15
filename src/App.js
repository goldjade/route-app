import React, { useEffect, useState } from "react";
// axios API
import instance from "./api/axios";
import requests from "./api/request";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Members from "./pages/Members";
import SongList from "./pages/SongList";
// import SongDetail from "./pages/SongDetail";
import Player from "./pages/Player";
import PlayerIndex from "./pages/PlayerIndex";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  //멤버 목록 데이터
  // useState는 state  가 변경되면 실행되는 hook이다
  // useState() 실행하면 [배열] 리턴됨
  // 배열은 [state, state 업데이트 함수]를 돌려받음
  // 배열은 [getter, setter]를 돌려받음
  //useState(초기값) : 초기값은 state의 초기값

  const [members, setMembers] = useState([]);
  // 플레이리스트 state
  // 화면을 갱신할 수 잇는 조건은 state/props 변경
  const [songs, setSongs] = useState([]);

  // 외부 데이터 가져오기
  const fetchData = async () => {
    // 멤버목록 가져오기
    const resultMember = await instance.get(requests.fetchMember);
    setMembers(resultMember.data);
    // 멤버목록 가져오기
    const resultSong = await instance.get(requests.fetchSong);
    setSongs(resultSong.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          {/* <Route path="개발자가 설정한 url" />
          <Route path="/도메인만 입력" / 루트폴더 루트 디렉터리?> 
          <Route  element= 보여줄 도메인*/}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About title="인디밴드" />} />
          <Route path="/members" element={<Members members={members} />} />
          {/* <Route path="/songs/:id" element={<SongDetail songs={songs} />} /> */}

          <Route path="/songs" element={<SongList songs={songs} />}>
            <Route index element={<PlayerIndex />} />
            <Route path=":id" element={<Player songs={songs} />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
