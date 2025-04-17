import ReactLoading from "react-loading";
import PropTypes from "prop-types";

const LoadingSpinner = ({ message = "載入中" }) => {
  return (
    <div
      className="d-flex justify-content-center align-items-center flex-column"
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(255,255,255,0.3)",
        zIndex: 999,
      }}
    >
      <p>
        {message}...
        <br />
      </p>
      <ReactLoading type="spin" color="black" width={64} height={64} />
    </div>
  );
};

LoadingSpinner.propTypes = {
  // 或者同時接受字串與 JSX
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

export default LoadingSpinner;
