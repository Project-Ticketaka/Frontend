import { Routes, Route } from "react-router-dom";
import Empty from "../components/Common/Empty";
import Layout from "../components/Layout/Layout";
import Login from "../pages/Auth/Login";
import SignUp from "../pages/Auth/SignUp";
import A4 from "../pages/Category/Category";
import B3C from "../pages/Category/B3C";
import C3A from "../pages/Category/C3A";
import C3D from "../pages/Category/C3D";
import C4 from "../pages/Category/C4";
import E3A from "../pages/Category/E3A";
import E3B from "../pages/Category/E3B";
import G3A from "../pages/Category/G3A";
import Detail from "../pages/Home/Detail";
import Home from "../pages/Home/Home";
import Payment from "../pages/Home/Payment";
import Ticket from "../pages/Home/Ticket";
import MemberInfo from "../pages/My/MemberInfo";
import My from "../pages/My/My";
import ReservationInfo from "../pages/My/ReservationInfo";
import Search from "../pages/Search/Search";
import Category from "../pages/Category/Category";

const Router = () => {
    return (
    <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home />} />
          <Route path="/detail">
            <Route path=":prf_id"  element={<Detail />}/>
          </Route>
          <Route path=":cat" element={<Category/>} />
          {/* <Route path="/b3c" element={<B3C/>} />
          <Route path="/c3a" element={<C3A/>} />
          <Route path="/c4" element={<C4/>} />
          <Route path="/c3d" element={<C3D/>} />
          <Route path="/e3a" element={<E3A/>} />
          <Route path="/e3b" element={<E3B/>} />
          <Route path="/g3a" element={<G3A/>} /> */}
          <Route path="/search">
            <Route path=":keyword" element={<Search/>}/>
          </Route>
          
          <Route element={<My/>}>
            <Route path="/my/info" element={<MemberInfo/>} /> 
            <Route path="/my/rsv" element={<ReservationInfo/>} /> 
          </Route>
          <Route path="/payment" element={<Payment/>} />
          <Route path="/ticket" element={<Ticket/>} />
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