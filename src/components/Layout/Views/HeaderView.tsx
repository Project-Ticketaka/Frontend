import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../Common/Logo";
import { IHeaderProps } from "../types";
import Menu from "./Menu";

const HeaderContainer = styled.div`
    padding: 1rem 1rem 0 1rem
`;

const HeaderMenu = styled.div`
    display: flex;
    min-width: 100%
`;

const MenuList = styled.ul`
    display: flex;
    flex-wrap: wrap; 
    list-style: none;
    padding-left: 0px;
    margin: 0;
    padding-right: 10rem;
`;

const Search = styled.div`
    position: relative;
    flex: 1;

    input {
        width: 100%;
        box-sizing: border-box;
        border: 0px;
        border-bottom: 1px solid #333;
        padding: 0.5rem 0.5rem 0.5rem 1.5rem;
        line-height: 1.5rem;
    }

    svg {
        width: 20px;
        height: 20px;
        position: absolute;
        top: 50%;
        margin-top: -1rem;
    }
`;
const HeaderView = ({ category, menu ,onSetMenu }: IHeaderProps) => {
    const navigate=useNavigate();
    return (
        <HeaderContainer>
            <div style={{display:'flex',justifyContent:'space-between'}}>
                <Logo/>
                
                <Link to="/my" style={{textDecoration:'none'}}>
                <Button>마이 페이지</Button>
                </Link>
                
            </div>
            
            <HeaderMenu>
                <MenuList>
                {
                    category.map((el: any)=>{
                    return (
                    
                    menu===el.id
                    ?
                        <Menu id={el.id} key={el.id} menu={el.id} onClick={()=>onSetMenu(el.id)}>{el.title}</Menu>
                    :
                        <Menu id={el.id} key={el.id} menu={el.title} onClick={()=>onSetMenu(el.id)}>{el.title}</Menu>
                    
                    )
                    })
                }
                </MenuList>
            
            
                <Search>
                    <svg fill="#333"  aria-hidden="true">
                        <path fillRule="evenodd" clipRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
                    </svg>
                    {/* <input style={{width:'100%',boxSizing:'border-box',border:'0px', borderBottom:'1px solid #333',padding:'0.5rem 0.5rem 0.5rem 1.5rem',lineHeight:'1.5rem'}} onChange={onSearchChange} onKeyUp={onSearch}/> */}
                    <input />
                </Search>

            </HeaderMenu>

        </HeaderContainer>
    )
}

export default HeaderView