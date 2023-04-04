export const passwordValidator = (password: string) => {
    return !!password.match(/.{8,}/g);
};

export const emailValidator = (email: string) => {
    return !!email.match(/[^.][\w-]+@[\w-]+\.\w{2,}/g);
};

export const nameValidator = (name: string) => {
    return !!name.match(/.{2,}/g);
};

export const birthDateValidator = (birthDate: string) => {
    return !!birthDate.match(/^(19[0-9][0-9]|20\d{2})-(0[0-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/g);
};

export const phoneValidator = (phone: string) => {
    return !!phone.match(/^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/g);
    /*01로 시작하고 (0,1,6,7,8,9 중 하나의 문자) 
    -은 있을수도 없을수도 
    (숫자만 들어가면서 3~4 길이의 문자) 
    - 은 있을수도 없을수도 
    (숫자만 들어가면서 4 길이의 문자) */
};
