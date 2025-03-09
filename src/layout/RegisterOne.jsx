import { useSelector } from "react-redux";

function RegisterOne() {
    const mes = useSelector((state) => state.register);
    console.log(mes);

    return (
        <h1>第一步</h1>
    )
};

export default RegisterOne;
