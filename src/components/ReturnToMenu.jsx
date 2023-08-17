const ReturnToMenu = ({ show, setShow }) => {
  return (
    <div>
      <button className="return-btn" onClick={() => setShow(false)}>
        Return To Main Menu
      </button>
    </div>
  );
};

export default ReturnToMenu;
