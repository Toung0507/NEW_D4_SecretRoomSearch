import { createContext, useEffect, useRef, useState } from "react";
import RegisterOne from "../layout/RegisterOne";
import RegisterTwo from "../layout/RegisterTwo";
import RegisterThree from "../layout/RegisterThree";

const steps = [
    {
        step_id: 1,
        step_name: "選擇註冊身分"
    },
    {
        step_id: 2,
        step_name: "驗證信箱"
    },
    {
        step_id: 3,
        step_name: "填寫基本資料"
    }
];

const userRegisterinit = {
    user_id: 0,
    user_role: "",
    user_reg_method: "信箱",
    user_name: "",
    user_email: "",
    user_img: "",
    user_bhd: "",
    user_tel: "",
    user_password: "",
    user_create_at: "",
    user_update_at: "",
    user_sex: ""
};

const storeRegisterinit = {
    user_id: 1,
    store_contact: "",
    store_method: "",
    store_tax_id: "",
    store_documentation: "",
    store_self_tel: "",
    store_self_address: "",
    store_website: "",
    store_name: "",
    store_address: "",
    store_email: "",
    store_tel: "",
    store_open_time: "",
};

export const registerInfo = createContext({});

function Register() {
    const [currentStep, setCurrentStep] = useState(1); //目前第幾步
    const [userRegister, setUserRegister] = useState(userRegisterinit); //存user資料表
    const [storeRegister, setStoreRegister] = useState(storeRegisterinit); //存store資料表
    const [verification_code, setVerification_code] = useState(""); // 保留驗證碼使用
    const [isEmailAuth, setIsEmailAuth] = useState(false);  //確認信箱是否驗證過
    const [isSend, setIsSend] = useState(false); //是否已寄信
    const [isResgitor, setIsResgitor] = useState(false);

    const userFormRef = useRef();
    const storeFormRef = useRef();

    // 監聽user相關的欄位變動
    const handleUserChange = (e) => {
        const { name, value } = e.target;
        setUserRegister((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    // 監聽store相關的欄位變動
    const handleStoreChange = (e) => {
        const { name, value } = e.target;
        setUserRegister((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    // 下一步
    const nextStep = () => {
        setCurrentStep((prev) => Math.min(prev + 1, 3));
    };

    // 上一步
    const prevStep = () => {
        setCurrentStep((prev) => Math.max(prev - 1, 1));
    };

    // 更新進度條寬度
    const progressWidth = ((currentStep - 1) / 2) * 100;

    // 最後註冊，有兩層post，先註冊register到user，再依據身分註冊post到store
    const registeFinal = () => {
        console.log("最終 userRegister 資料：", userRegister);
        // 此處做 axios post 或其他資料處理邏輯
    };

    // 當收到子元件成功送出的訊號時，設定旗標
    const handleSubmitSuccess = () => {
        setIsResgitor(true);
    };

    // 當 isResgitor 變為 true 時，代表表單成功送出並更新了資料
    // 要確保兩個一起，再去呼叫registeFinal()不可以在handleSubmitSuccess就呼叫registeFinal()他還是會為舊的資料
    useEffect(() => {
        if (isResgitor) {
            registeFinal();
            // 送出完成後可考慮重置 isResgitor 為 false
            setIsResgitor(false);
        }
    }, [isResgitor, userRegister]);



    // 送出按鈕點擊時只負責觸發子元件的 submit，不直接設置旗標
    const handleFinalClick = () => {
        if (userRegister.user_role === '會員') {
            setTimeout(() => {
                if (userFormRef.current) {
                    const hiddenSubmitBtn = userFormRef.current.querySelector('#userSumbit');
                    if (hiddenSubmitBtn) {
                        hiddenSubmitBtn.click();  // 觸發子元件 form 的 onSubmit
                    }
                }
            }, 0);
        }
    };

    return (
        <div className="container text-center pt-10">
            <div className="progress-container ">
                {/* 進度條 */}
                <div className="progress-bar" style={{ width: `${progressWidth}%` }}></div>

                {/* 圓圈 */}
                {steps.map((step) => (
                    // <div className='d-flex flex-column justify-content-center align-items-center'>
                    <div
                        key={step.step_id}
                        className={`circle ${step.step_id <= currentStep ? 'active' : ''}`}
                    >
                        <p className='step_name'>{step.step_name}</p>
                        <span className="circle-number">{step.step_id}</span>
                    </div>
                    // </div>
                ))}
            </div>
            <registerInfo.Provider value={{ handleUserChange, handleStoreChange, userRegister, isEmailAuth, setIsEmailAuth, isSend, setIsSend, verification_code, setVerification_code }}>
                {currentStep === 1 && <RegisterOne />}
                {currentStep === 2 && <RegisterTwo />}
                {currentStep === 3 && <RegisterThree userFormRef={userFormRef} storeFormRef={storeFormRef} onSubmitSuccess={handleSubmitSuccess} />}
            </registerInfo.Provider>

            <div className="step my-3">
                {currentStep !== 1 ? (
                    <button
                        className="btn btn-outline-primary mx-2"
                        onClick={prevStep}
                        disabled={currentStep === 1}
                    >
                        上一步
                    </button>
                ) : ""}
                {/* 按鈕 */}

                {currentStep === 3 ? (
                    <button
                        className="btn btn-primary mx-2"
                        onClick={handleFinalClick}
                    // onClick={() => {
                    //     if (userRegister.user_role === '會員') {
                    //         setTimeout(() => {
                    //             if (userFormRef.current) {
                    //                 const hiddenSubmitBtn = userFormRef.current.querySelector('#userSumbit');
                    //                 if (hiddenSubmitBtn) {
                    //                     hiddenSubmitBtn.click();  // 觸發隱藏按鈕的點擊，進而觸發 onSubmit                                            

                    //                 }
                    //             }
                    //         }, 0);
                    //     }
                    // }}
                    >
                        送出註冊
                    </button>
                ) : (
                    <button
                        className="btn btn-primary mx-2"
                        onClick={nextStep}
                        disabled={currentStep === 3 || (currentStep === 1 && userRegister.user_role === '') || (currentStep === 2 && !isEmailAuth)}
                    >
                        下一步
                    </button>
                )}
            </div>


        </div>
    );
};

export default Register;