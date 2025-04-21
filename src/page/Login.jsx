import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfoAsyncThunk } from "../redux/slices/userInfoSlice";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [account, setAccount] = useState({
    "user_email": "user@exapmle.com",
    "user_password": "example"
  });

  const { isLoading, resErrMessage } = useSelector((state) => state.userInfo);
  const navigate = useNavigate();
  const disptach = useDispatch();

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
    e.preventDefault();
    const res = await disptach(getUserInfoAsyncThunk(account));

    if (res.meta.requestStatus === 'fulfilled'); {
      const user_id = res.payload.user.user_id;
      const user_role = res.payload.user.user_role;
      if (user_role === '管理者') {
        navigate(`/Admin/Store`);
      }
      else if (user_role === '會員') {
        navigate(`/User_profile/${user_id}/basicInfo`);
      }
      else {
        navigate(`/Store_profile/${user_id}/basicStoreInfo`);
      }
    }

  };

  return (
    <div className="flex-grow-1 my-md-10 my-5" >
      <div className=" d-flex justify-content-center align-items-center flex-column">
        <div className="p-8 card rounded-2   ">
          <h3 className="text-center mb-3">密室搜搜 - 登入</h3>
          <form onSubmit={handleSingIn} className="m-50 d-flex flex-column">
            <div className="form-group mb-5 ">
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
            <div className="form-group mb-3">
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
            <div className="form-group mb-3">
              {resErrMessage ? (<p className="text-danger" >{resErrMessage}</p>) : "１２３　"}
            </div>
            <button className=" form-group btn btn-success  bg-secondary-60" >
              {isLoading ? "登入中" : "登入"}
            </button>
          </form>

        </div>
        <p>
          還沒有帳號嗎？點
          <Link
            to="/Register"
            className="mt-1 d-inline"
            style={{ cursor: 'pointer', color: '#169CC6' }}
          >
            這裡
          </Link>
          註冊
        </p>
      </div>

    </div >
  )
};

export default Login;