import React from 'react'

const MemberInfoView = ({data}:any) => {
    
    return (
    <table>
        <tbody>
            <tr style={{columnSpan:'all'}}>
                <td><p style={{fontSize:'1.5rem'}}>{data.name} 님</p></td>
            </tr>
            <tr>
                <td style={{padding:'1rem'}}><p style={{fontSize:'1.1rem',border:'2px solid #FF7F8F',borderRadius:'2rem',padding:'0.3rem 1rem',textAlign:'center'}}>💌 이메일</p></td>
                <td><span style={{fontSize:'1.1rem'}}>{data.email}</span></td>
            </tr>
            <tr>
                <td style={{padding:'1rem'}}><p style={{fontSize:'1.1rem',border:'2px solid #FF7F8F',borderRadius:'2rem',padding:'0.3rem 1rem',textAlign:'center'}}>📞 연락처</p></td>
                <td><span>{data.phone}</span></td>
            </tr>
            <tr>
                <td style={{padding:'1rem'}}><p style={{fontSize:'1.1rem',border:'2px solid #FF7F8F',borderRadius:'2rem',padding:'0.3rem 1rem',textAlign:'center'}}>🎂 생년월일</p></td>
                <td><span>{data.birth}</span></td>
            </tr>
        </tbody>
    </table>
    )
}

export default MemberInfoView