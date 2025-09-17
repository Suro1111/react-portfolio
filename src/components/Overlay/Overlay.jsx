export const Overlay = (props) => {
  return (
    <div
      style={{
        width: props.overlay,
        height: "100vh",
        zIndex: "999",
        position: "fixed",
        top: "0",
        left: "0",
        backgroundColor: "#0000002e",
      }}
    ></div>
  );
};
