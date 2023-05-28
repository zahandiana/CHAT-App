import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { logoutRoute } from "../utils/APIRoutes";
import SadCat from "../assets/sad.gif";

const AccountDeleted = () => {
  const navigate = useNavigate();

  const handleClick = async () => {
    const id = await JSON.parse(
      localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
    )._id;
    const data = await axios.get(`${logoutRoute}/${id}`);
    if (data.status === 200) {
      localStorage.clear();
      navigate("/login");
    }
  };

  return (
    <div>
      <div
        className="current-user"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#051914"
        }}
      >
        <div
          style={{
            backgroundColor: "#C5DAD5",
            borderRadius: "10px",
            boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
            padding: "30px",
            maxWidth: "500px",
            textAlign: "center",
            marginBottom: "30px"
          }}
        >
          <img src={SadCat} alt="" />

          <div>
            <div>
              <h1
                style={{
                  marginBottom: "35px"
                }}
              >
                Your account has been deleted.
              </h1>
              <h3>Go back to LOG IN page</h3>
              <button
                onClick={handleClick}
                style={{
                  padding: "5px",
                  borderRadius: "5px",
                  backgroundColor: "#1abb9a",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "center",
                  marginTop: "10px",
                  width: "50%",
                  marginTop: "75px" // Added space before the button
                }}
              >
                LogIn page
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountDeleted;
