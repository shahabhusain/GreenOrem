import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Layout from "../layout/Layout";
import Login from "../pages/Auth/Login";
import SignUp from "../pages/Auth/SignUp";
import Layout1 from "../layout/Layout1";
import Home from "../pages/home/Home";
import Friends from "../pages/Friends/Friends";
import Group from "../pages/Group/Group";
import Spaces from "../pages/Spaces/Spaces";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout1 />}>
        <Route index element={<Home />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/group" element={<Group />} />
        <Route path="/spaces" element={<Spaces />} />
      </Route>

      <Route path="/login" element={<Layout />}>
        <Route index element={<Login />} />
      </Route>

      {/* Separate /signup route */}
      <Route path="/signup" element={<Layout />}>
        <Route index element={<SignUp />} />
      </Route>
    </>
  )
);
