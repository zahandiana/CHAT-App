import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function UserPage() {
  const navigate = useNavigate();
  const [currentUserImage, setCurrentUserImage] = useState(undefined);
  const [currentUserName, setCurrentUserName] = useState(undefined);
  const [edit, setEdit] = useState(false);
  const [newUserName, setNewUserName] = useState("");

  useEffect(async () => {
    const data = await JSON.parse(
      localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
    );
    setCurrentUserName(data.username);
    setCurrentUserImage(data.avatarImage);
  }, []);

  const handleSave = async () => {
    try {
      const userId = JSON.parse(
        localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
      )._id;
      const response = await fetch(
        `http://localhost:5002/api/auth/updateName/${userId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ name: newUserName })
        }
      );
      const data = await response.json();
      if (data.status) {
        setCurrentUserName(data.user.username);
      } else {
        console.log(data.msg);
      }
      setEdit(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteAccount = async () => {
    try {
      const userId = JSON.parse(
        localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
      )._id;
      const response = await fetch(
        `http://localhost:5002/api/auth/deleteAccount/${userId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      const data = await response.json();
      if (data.status) {
        // Account deleted successfully
        navigate("/account-deleted"); // Navigate to the account deleted page
      } else {
        console.log(data.msg);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {currentUserImage && currentUserImage && (
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
              <div className="avatar">
                <h1 style={{ marginBottom: "3rem", fontSize: "2.5rem" }}>
                  User Information
                </h1>

                <img
                  src={`data:image/svg+xml;base64,${currentUserImage}`}
                  alt="avatar"
                  style={{
                    width: "50px",
                    height: "50px",
                    marginBottom: "0.5rem"
                  }}
                />
              </div>
              <div className="username">
                {edit ? (
                  <div style={{ alignContent: "center" }}>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <input
                        type="text"
                        value={newUserName}
                        onChange={(e) => setNewUserName(e.target.value)}
                        style={{
                          backgroundColor: "#C5DAD5",
                          borderRadius: "10px",
                          boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)",
                          marginBottom: "15px",
                          padding: "10px",
                          width: "100%"
                        }}
                      />
                    </div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <button
                        onClick={handleSave}
                        style={{
                          padding: "5px",
                          borderRadius: "5px",
                          backgroundColor: "#1abb9a",
                          border: "none",
                          cursor: "pointer",
                          textAlign: "center",
                          marginTop: "10px",
                          width: "50%"
                        }}
                      >
                        SAVE
                      </button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <h2>Name: {currentUserName}</h2>
                    <button
                      onClick={() => setEdit(true)}
                      style={{
                        padding: "5px",
                        borderRadius: "5px",
                        backgroundColor: "#1abb9a",
                        border: "none",
                        cursor: "pointer",
                        textAlign: "center",
                        marginTop: "10px",
                        width: "50%"
                      }}
                    >
                      EDIT
                    </button>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <button
                        onClick={handleDeleteAccount}
                        style={{
                          padding: "5px",
                          borderRadius: "5px",
                          backgroundColor: "#f44336",
                          border: "none",
                          cursor: "pointer",
                          textAlign: "center",
                          marginTop: "10px",
                          width: "50%"
                        }}
                      >
                        DELETE ACCOUNT
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
