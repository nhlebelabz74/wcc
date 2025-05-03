import * as React from "react"
import { 
  Calendar, Briefcase, Medal, Handshake 
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { TeamSwitcher } from "@/components/team-switcher"
import request from "@/utils/request";
import { useAuth } from "@/context/authContext";

// Modified to receive logout as a parameter
const getUserData = async (encryptedEmail, navigate, logout) => {
  try {
    const response = await request({
      route: "/users/get/:email",
      type: "GET",
      routeParams: {
        email: encodeURIComponent(encryptedEmail),
      },
    });

    const user = response.data.user;

    return {
      name: user.name,
      email: user.email,
      avatarFallback: user.name.charAt(0) + user.surname.charAt(0),
      type: user.userType,
    };
  } catch (error) {
    console.error(error);

    if (error.sessionExpired) {
      navigate('/');
      logout();
    }

    return {
      name: "Test",
      email: "User",
      avatarFallback: "TU",
    };
  }
};

const data = {
  navMain: [
    {
      title: "Events",
      url: "/events",
      icon: Calendar,
      isActive: true,
    },
    {
      title: "Opportunities",
      url: "/opportunities", 
      icon: Briefcase,
    },
    {
      title: "Leadership",
      url: "/leadership",
      icon: Medal,
    },
    {
      title: "Get Involved",
      url: "/get-involved",
      icon: Handshake,
    }
  ]
}

const AppSidebar = ({ ...props }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { logout } = useAuth(); // Moved the hook call here

  useEffect(() => {
    const fetchData = async () => {
      try {
        const encryptedEmail = localStorage.getItem("encryptedEmail");
        const userData = await getUserData(encryptedEmail, navigate, logout);
        setUser(userData);
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [navigate, logout]);

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        {loading ? (
          <div>Loading user data...</div>
        ) : (
          <NavUser user={user} />
        )}
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}

export { AppSidebar };