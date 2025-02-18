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
import SpacesDetail from "../pages/Spaces/SpacesDetail";
import VideoLayout from "../layout/VideoLayout";
import GroupLayout from "../layout/GroupLaout"; // Fixed import name
import GroupDetail from "../pages/Group/GroupDetail";
import Edite from "../pages/Group/Edite";
import UserProfile from "../pages/home/UserProfile";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Main layout with Sidebar and RightBar */}
      <Route path="/" element={<Layout1 />}>
        <Route index element={<Home />} />
        <Route path="/friends" element={<Friends />} />
      </Route>

      {/* Group layout */}
      <Route path="/group" element={<GroupLayout />}>
        <Route index element={<Group />} />
        <Route path="/group/spaces" element={<Spaces />} />
        <Route path="/group/detail" element={<GroupDetail />} />
        <Route path="/group/edit" element={<Edite />} />
        <Route path="/group/user" element={<UserProfile />} />
      </Route>


      {/* Spaces detail layout */}
      <Route path="spacesDetail" element={<VideoLayout />}>
        <Route index element={<SpacesDetail />} />
      </Route>

      {/* Authentication Routes */}
      <Route path="login" element={<Layout />}>
        <Route index element={<Login />} />
      </Route>

      <Route path="signup" element={<Layout />}>
        <Route index element={<SignUp />} />
      </Route>
    </>
  )
);
