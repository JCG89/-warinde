import React, { useState, useEffect, useContext } from "react";
import { UserProfileContext } from "../../lib/UserProfileContext";
import { Link } from "react-router-dom";

export const Checkout = () => {
  const [isValid, setIsValid] = useState(false);

  const value = useContext(UserProfileContext);
  const {
    firstName,
    lastName,
    email,
    address,
    zipCode,
    city,
    setUserProfileContext,
  } = value;
  const validate = () => {
    let errors = [];
    const inputs = document.querySelectorAll(".form-control");
    inputs.forEach((input) => {
      !input.value ? errors.push(input) : errors.length && errors.pop();
    });
    console.log(errors);
    setIsValid(!errors.length);
  };
  useEffect(() => {
    validate();
  });
  return (
    <>
      <div className="col-sm-6 offset-3">
        <h2>Vérification de la commande!</h2>
        <br />
        <form>
          <div className="row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Prénom"
                property=""
                defaultValue={firstName}
                name="firstName"
                onChange={(e) =>
                  setUserProfileContext({ [e.target.name]: e.target.value })
                }
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Nom"
                property=""
                defaultValue={lastName}
                name="lastName"
                onChange={(e) =>
                  setUserProfileContext({ [e.target.name]: e.target.value })
                }
              />
            </div>
          </div>
          <br />
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Addresse Email"
              property=""
              defaultValue={email}
              name="email"
              onChange={(e) =>
                setUserProfileContext({ [e.target.name]: e.target.value })
              }
            />
            <small id="emailHelp" className="form-text text-muted">
              Nous gardons secret vos données personnelles !.
            </small>
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Addresse"
              property=""
              defaultValue={address}
              name="adresse"
              onChange={(e) =>
                setUserProfileContext({ [e.target.name]: e.target.value })
              }
            />
          </div>
          <div className="row">
            <div className="col">
              <input
                type="text"
                className="form-control mt-3"
                placeholder=" Code Postal"
                property=""
                defaultValue={zipCode}
                name="zipCode"
                onChange={(e) =>
                  setUserProfileContext({ [e.target.name]: e.target.value })
                }
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control mt-3"
                placeholder="Ville"
                property=""
                defaultValue={city}
                name="city"
                onChange={(e) =>
                  setUserProfileContext({ [e.target.name]: e.target.value })
                }
              />
            </div>
          </div>
          <br />

          <Link
            to="/confirmation"
            className={`white btn btn-light btn-lg btn-block ckeckout bg-info  confirm ${
              !isValid && "disabled"
            }`}
            style={{ color: "#FFFF" }}
          >
            valider la commande
          </Link>
        </form>
      </div>
    </>
  );
};
