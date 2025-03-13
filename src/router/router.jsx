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
import Messages from "../pages/Messages/Messages";
import Articles from "../pages/Ariticles/Articles";
import ArticlesDetail from "../pages/Ariticles/AriclesDetail";
import CreateArticles from "../pages/Ariticles/CreateArticles";
import Events from "../pages/Events/Events";
import CreateEvent from "../pages/Events/CreateEvent";
import EventDetail from "../pages/Events/EventDetail";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Main layout with Sidebar and RightBar */}
      <Route path="/" element={<Layout1 />}>
        <Route index element={<Home />} />
      </Route>

      {/* Group layout */}
      <Route path="/group" element={<GroupLayout />}>
        <Route index element={<Group />} />
        <Route path="/group/detail/:organization_id" element={<GroupDetail />} />
        <Route path="/group/edit" element={<Edite />} />
        <Route path="/group/user" element={<UserProfile />} />
        <Route path="/group/space" element={<Spaces />} />
        <Route path="/group/friends" element={<Friends />} />
        <Route path="/group/messages" element={<Messages />} />
        <Route path="/group/article" element={<Articles />} />
        <Route path="/group/articleDetail/:article_id" element={<ArticlesDetail />} />
        <Route path="/group/createArticle" element={<CreateArticles />} />
        <Route path="/group/events" element={<Events />} />
        <Route path="/group/create_events" element={<CreateEvent />} />
        <Route path="/group/eventDetail/:event_id" element={<EventDetail />} />
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
