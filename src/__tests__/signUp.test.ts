import {describe, expect, test} from '@jest/globals';

describe('member 모듈 테스트', () => {
    const baseURL: string = process.env.REACT_APP_BASE_URL as string;
    
    test('회원가입 테스트', () => {
        expect(baseURL).toEqual("http://localhost:3000")
    });

});

// test("SignUp Available",()=>{
//     expect(MemberAPI.signUp({
//         email:"test@email.com",
//         name: "test",
//         password: "testpass",
//         phone: "01000000000",
//         birth: "1999-12-12",
//         gender: "M"
    // })).toEqual({
    //     "code": 200,
    //     "description": "성공"
    // })
// })