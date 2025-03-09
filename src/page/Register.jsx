import { useState } from "react";
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


function Register() {
    const [currentStep, setCurrentStep] = useState(1);

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
            {currentStep === 1 && <RegisterOne />}
            {currentStep === 2 && <RegisterTwo />}
            {currentStep === 3 && <RegisterThree />}

            {/* 按鈕 */}
            <button
                className="btn btn-outline-primary mx-2"
                onClick={prevStep}
                disabled={currentStep === 1}
            >
                上一步
            </button>
            {currentStep === 3 ? (
                <button
                    className="btn btn-primary mx-2"
                >
                    送出註冊
                </button>
            ) : (
                <button
                    className="btn btn-primary mx-2"
                    onClick={nextStep}
                    disabled={currentStep === 3}
                >
                    下一步
                </button>
            )
            }

        </div>
    );
};

export default Register;