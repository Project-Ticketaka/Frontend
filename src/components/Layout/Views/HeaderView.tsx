import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../Common/Logo";
import { IHeaderProps } from "../types";
import Menu from "./Menu";
import PersonIcon from '@mui/icons-material/Person';
import { media } from "../../../styles/media";

const MypageButton = styled(Button)`
    color: #333;
    ${media.phone`
        height: fit-content;
    `}
`;
const HeaderContainer = styled.div`
    padding: 1rem 1rem 0 1rem;
    boxShadow: 2px 2px 2px 2px #CACACA;

    ${media.tablet`
        
    `}

    ${media.phone`
        
        display: grid;
        grid-template-rows: repeat(2,1fr);
        height: 5rem
    `}
`;

const HeaderMenu = styled.div`
    display: flex;
    min-width: 100%;
    
    ${media.phone`
        width: 100%;
    `}
`;

const MenuList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding-left: 0px;
    margin: 0;
    padding-right: 10rem;

    ${media.phone`
        padding-right: 0rem;
        width: 0;
        visibility: hidden;
    `}
`;

const Search = styled.div`
    position: relative;
    flex: 1;

    input {
        width: 100%;
        box-sizing: border-box;
        border: 0px;
        border-bottom: 1px solid #333;
        padding: 0.5rem 0.5rem 0.5rem 2rem;
        line-height: 1.5rem;
        outline: none;
        
        font-size: 1rem;
    }

    svg {
        width: 20px;
        height: 20px;
        position: absolute;
        top: 50%;
        margin-top: -1rem;
        
    }

    ${media.phone`
        height: fit-content;
    
        svg {
            width: 20px;
            height: 20px;
            position: absolute;
            top: 50%;
            margin-top: -1rem;
        }
    `}

    &: focus-within {
        input{
            border-bottom: 2px solid #FF7F8F;
        }
        svg {
            fill: #FF7F8F;
        }
    }
`;


const HeaderView = ({ category, menu ,onSetMenu,goMyPage,onSearchChange,onSearch,keyword,onSetKeyword }: IHeaderProps) => {
    const navigate = useNavigate();
    const goHome = () => {
        onSetKeyword("");
        navigate('/')
    }    

    return (
        <HeaderContainer>
            <div style={{display:'flex',justifyContent:'space-between'}}>
                
                <Logo onClick={goHome}/>
                
                <MypageButton color="info" onClick={goMyPage} startIcon={<PersonIcon/>}>마이 페이지</MypageButton>
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
                
                    <svg fill="currentColor">
                        <path fillRule="evenodd" clipRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
                    </svg>
                    {/* <input style={{width:'100%',boxSizing:'border-box',border:'0px', borderBottom:'1px solid #333',padding:'0.5rem 0.5rem 0.5rem 1.5rem',lineHeight:'1.5rem'}} onChange={onSearchChange} onKeyUp={onSearch}/> */}
                    <input value={keyword} onChange={onSearchChange} onKeyUp={onSearch} placeholder="검색어(제목)를 입력해주세요"  spellCheck="false"/>
                </Search>

            </HeaderMenu>

        </HeaderContainer>
    )
}

export default HeaderView