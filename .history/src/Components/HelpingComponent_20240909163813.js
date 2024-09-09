const InputComponent = ({ label, type, placeholder, icon }) => {
    return (
      <div className="input-div">
        <p>{label}:</p>
        <div className="field-div">
          <input type={type} placeholder={placeholder} />
          <div className="icon">{icon}</div>
        </div>
      </div>
    );
  };