import { Routes, Route } from "react-router-dom";
import Empty from "../components/Common/Empty";
import Layout from "../components/Layout/Layout";
import Login from "../pages/Auth/Login";
import SignUp from "../pages/Auth/SignUp";
import Detail from "../pages/Home/Detail";
import Home from "../pages/Home/Home";
import Payment from "../pages/Home/Payment";
import Ticket from "../pages/Home/Ticket";
import My from "../pages/My/My";
import Search from "../pages/Search/Search";

const Router = () => {
    return (
    <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home />} />
          <Route path="/detail">
            <Route path=":prf_id"  element={<Detail />}/>
          </Route>
          <Route path="/a4" element={<h1>연극</h1>} />
          <Route path="/b3a" element={<h1>무용</h1>} />
          <Route path="/c3a" element={<h1>클래식</h1>} />
          <Route path="/c4" element={<h1>국악</h1>} />
          <Route path="/c3d" element={<h1>대중음악</h1>} />
          <Route path="/e3a" element={<h1>복합</h1>} />
          <Route path="/e3b" element={<h1>서커스/마술</h1>} />
          <Route path="/g3a" element={<h1>뮤지컬</h1>} />
          <Route path="/search">
            <Route path=":keyword" element={<Search/>}/>
          </Route>
          <Route path="/my" element={<My/>} /> 
          <Route path="/payment" element={<Payment/>} />
          <Route path="/reservation" element={<Ticket/>} />
        </Route>
        <Route path="/login" element={<Login/>} />
        <Route path="/sign-up" element={<SignUp/>} /> 
        <Route
        path="*"
        element={
        <Empty containerHeight="90vh" text="존재하지 않는 페이지입니다." />
        }
        />
    </Routes>
  )
}

export default Router