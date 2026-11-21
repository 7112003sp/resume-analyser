import React from "react";
import axios from "axios";

export const api = axios.create({
  baseURL: "https://resume-vert-eight-31.vercel.app/",
});
