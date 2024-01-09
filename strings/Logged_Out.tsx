import { systemLang } from "../global"

const strings = systemLang() == 'ko' ? (
    {
        "login": "로그인",
        "register": "회원가입"
    }
) : (
    {
        "login": "Login",
        "register": "Register"
    }
)

export default strings
