import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

// ICONS
import {
  IoHome,
  IoHomeOutline,
  IoSettings,
  IoSettingsOutline,
} from "react-icons/io5";
import { HiMiniUserGroup, HiOutlineUserGroup } from "react-icons/hi2";
import { MdPlayLesson, MdOutlinePlayLesson } from "react-icons/md";
import { PiStudentFill, PiStudent } from "react-icons/pi";
import { BsBarChartFill, BsBarChart } from "react-icons/bs";

export default function HomeSidebar() {
  const { pathname } = useLocation();
  
  return (
    <nav>
      <Link to="/home" className={`${pathname == "/home" ? "active" : ""}`}>
        {pathname == "/home" ? <IoHome /> : <IoHomeOutline />}
        <span>Home</span>
      </Link>
      <Link
        to="/home/lessons"
        className={`${pathname == "/home/lessons" ? "active" : ""}`}
      >
        {pathname == "/home/lessons" ? (
          <MdPlayLesson />
        ) : (
          <MdOutlinePlayLesson />
        )}
        <span>Lessons</span>
      </Link>
      <Link
        to="/home/settings"
        className={`${pathname == "/home/settings" ? "active" : ""}`}
      >
        {pathname == "/home/settings" ? <IoSettings /> : <IoSettingsOutline />}
        <span>Settings</span>
      </Link>
      <Link
        to="/home/statistics"
        className={`${pathname == "/home/statistics" ? "active" : ""}`}
      >
        {pathname == "/home/statistics" ? <BsBarChartFill /> : <BsBarChart />}
        <span>Statistics</span>
      </Link>
      <Link
        to="/home/grouping"
        className={`${pathname == "/home/grouping" ? "active" : ""}`}
      >
        {pathname == "/home/grouping" ? (
          <HiMiniUserGroup />
        ) : (
          <HiOutlineUserGroup />
        )}
        <span>Grouping</span>
      </Link>
      <Link
        to="/home/students"
        className={`${pathname == "/home/students" ? "active" : ""}`}
      >
        {pathname == "/home/students" ? <PiStudentFill /> : <PiStudent />}
        <span>Students</span>
      </Link>
    </nav>
  );
}
