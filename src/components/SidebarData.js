import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

export const SidebarData = [
    {
    title:'Home',
    path: '/',
    icon: <AiIcons.AiFillHome/>,
    cName: 'side-text'
    },
    {
    title:'Dear Diary',
    path: '/deardiary',
    icon: <FaIcons.FaBookOpen/>,
    cName: 'side-text'
    },
    {
    title:'Create Account',
    path: '/',
    icon: <FaIcons.FaUserAlt/>,
    cName: 'side-text'
    }
]
