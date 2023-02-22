import { Outlet } from "react-router-dom"
import Nav from "../Nav"
const MyView = ({my,data}:any) => {
    return (
        <div style={{padding:'2rem 1rem',display:'grid',gridTemplateColumns: 'repeat(6, 1fr)',width:'100%',gap:'2rem'}}>
            <Nav/>
            <div style={{gridColumn:'span 5'}}>
                <Outlet/>
            </div>
        </div>
    )
}

export default MyView