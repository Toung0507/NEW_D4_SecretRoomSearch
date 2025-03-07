import axios from "axios";
import { useState, useEffect } from "react";

const baseApi = import.meta.env.VITE_BASE_URL;

function Login() {
    const [isAuth, setIsAuth] = useState(false);
    const [account, setAccount] = useState({
        "user_email": "user@exapmle.com",
        "user_password": "example"
    });
    const [resErrMessage, setResErrMessage] = useState("");

    // 處理登入的input
    const handleSignInInputChange = (e) => {
        const { value, name } = e.target;
        setAccount({
            ...account,
            [name]: value
        });
    };

    // 監聽登入按鈕
    const handleSingIn = async (e) => {
        e.preventDefault(); // 可用此方式將預設行為取消掉，讓使用者可以直接按enter就可進入，不限制只透過按鈕點選

        try {
            const res = await axios.post(`${baseApi}/login`, account);
            console.log(res);
            console.log(res.data.accessToken);

            //const { token, expired } = res.data;
            //document.cookie = `signInHexoToken = ${token}; expires = ${new Date(expired)}`;
            //axios.defaults.headers.common['Authorization'] = token;
            //setIsAuth(true);
        }
        catch (error) {
            setResErrMessage(error.response?.data);
            console.log(error);

        }
    };

    return (
        <>
            <div className="container">
                <div className="login py-3 d-flex justify-content-center ">
                    <div className="p-10 bg-primary-80 rounded-2">
                        <form onSubmit={handleSingIn} className="m-50">
                            <div className="form-group m-5 ">
                                <label htmlFor="exampleInputEmail2">電子郵件</label>
                                <input
                                    name="user_email"
                                    value={account.user_email}
                                    type="email"
                                    className="form-control mt-3"
                                    id="exampleInputEmail2"
                                    placeholder="請輸入信箱"
                                    onChange={handleSignInInputChange}
                                />
                            </div>
                            <div className="form-group m-5">
                                <label htmlFor="exampleInputPassword2">密碼</label>
                                <input
                                    name="user_password"
                                    value={account.user_password}
                                    type="password"
                                    className="form-control mt-3"
                                    id="exampleInputPassword2"
                                    placeholder="請輸入密碼"
                                    onChange={handleSignInInputChange}
                                />
                            </div>
                            <div className="form-group m-5">
                                {resErrMessage && (<p className="text-danger" >{resErrMessage}</p>)}

                            </div>
                            <button className="btn btn-success m-5 bg-secondary-60" >
                                登入
                            </button>
                        </form>
                    </div>

                </div>
            </div >
        </>
    )
};

export default Login;