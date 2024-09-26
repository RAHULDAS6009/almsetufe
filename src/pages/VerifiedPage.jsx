import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API } from "../utils/api";
import axios from "axios";

const VerificationPage = () => {
  const navigate = useNavigate();
  const params = useParams();

  // Optional: Redirect to login page after a delay
  useEffect(() => {
    (async () => {
      await axios.get(
        `${API}/users/${params.userId}/verify-email/${params.token}`
      );
      navigate("/login");
    })();
  }, [params]);

  return;
};

export default VerificationPage;
