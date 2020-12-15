import { connect } from "react-redux";

const Status = (props) => {
  const { severity } = props;

  const color = () => {
    switch (severity) {
      case 0:
        return "#1BDA1E";
      case 1:
        return "#D1DE0B";
      case 2:
        return "#E10707";
      default:
        return "#1BDA1E";
    }
  };

  return (
    <div
      className="Conter"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <div>Status</div>
      <div
        style={{
          height: "20px",
          width: "20px",
          backgroundColor: color(),
          borderRadius: "100%",
          marginLeft: "10px",
        }}
      ></div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    severity: state.status.severity,
  };
};

export default connect(mapStateToProps)(Status);
