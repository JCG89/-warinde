import React, { Fragment, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { UserProfileContext } from "../../lib/UserProfileContext";

import { Redirect } from "react-router-dom";
import "../../styles/confirm.css";

export const Confirm = () => {
  const userProfile = useContext(UserProfileContext);
  const items = useSelector((state) => state.items);
  return (
    <Fragment>
      <div class="jumbotron text-center">
        <h1 class="display-3">Merci!</h1>
        <hr />

        <p class="lead">
          <strong>Votre commande a été pris en compte</strong>
          <br /> <br />
          <Link class="btn btn-primary btn-sm" to="/">
            Retour à la page d'accueil
          </Link>
        </p>
        <br />
        {
          <ul className="address">
            <li>
              {userProfile.lastName.toUpperCase()}, {userProfile.firstName}
            </li>
            <li>{userProfile.address}</li>
            <li>
              {userProfile.zipCode}, {userProfile.city}
            </li>
          </ul>
        }
      </div>
    </Fragment>
  );
};
