import { useContext, useEffect, useState } from "react";
import { registerInfo } from "../page/Register";
import { RiCloseCircleLine } from "react-icons/ri";
import { RiCheckboxCircleLine } from "react-icons/ri";

function RegisterTwo() {
    const { handleUserChange, userRegister, isEmailAuth, setIsEmailAuth, isSend, setIsSend, verification_code, setVerification_code } = useContext(registerInfo);
    const [orig_user_email] = useState(userRegister.user_email);

    const checkEmailAuth = () => {
        if (orig_user_email !== userRegister.user_email) {
            setIsSend(false);
            setIsEmailAuth(false);
        }
        else {
            if (orig_user_email === '') {

            }
            else {

                setIsSend(true);
                setIsEmailAuth(true);
            }
        }
    }

    const sendEmail = () => {
        setIsSend(true);
    }

    const auth_verification_code = (e) => {
        if (e.target.value === '123789') {
            setIsEmailAuth(true);
        }
        else {
            setIsEmailAuth(false);
        }
        setVerification_code(e.target.value);
    };

    useEffect(() => {
        checkEmailAuth();
    }, [userRegister.user_email]);

    return (
        <>
            <div className="my-md-10 my-sm-3 my-5">
                <div className="container-lg">
                    <div className="role row d-flex flex-column flex-md-row g-5 justify-content-center align-items-center">
                        <p className="h2 text-center">
                            請驗證信箱
                        </p>
                        <div className="col-lg-6 col-12">
                            <form>
                                <div className="row mb-3">
                                    <label htmlFor="user_email" className="col-sm-2 col-form-label">信箱</label>
                                    <div className="col-sm-7">
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="user_email"
                                            name="user_email"
                                            value={userRegister.user_email}
                                            onChange={(e) => handleUserChange(e)} />
                                    </div>
                                    <button
                                        className="btn btn-primary col-sm-3"
                                        onClick={sendEmail}
                                        disabled={isSend}>
                                        {isSend ? '已寄送驗證信' : '發送驗證信件'}
                                    </button>
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="Verification_code" className="col-sm-2  col-form-label">驗證碼</label>
                                    <div className="col-sm-7">
                                        <input type="text"
                                            className="form-control"
                                            id="Verification_code"
                                            onChange={(e) => auth_verification_code(e)}
                                            value={verification_code} />
                                    </div>
                                    <div className="col-sm-3 d-flex align-items-center">
                                        {isEmailAuth === true ? (<><RiCheckboxCircleLine size={30} />驗證完成</>) : (<><RiCloseCircleLine size={30} />尚未驗證</>)}
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default RegisterTwo;