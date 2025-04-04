"use client";

import * as React from "react";
import { 
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  BookOpenText, 
  BellDot, 
  BrainCircuit, 
  SquareTerminal,
  Brain,
  BotIcon
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-project";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarRail
  } from "@/components/ui/sidebar";
  
// SAMPLE DATA
const data = {
  user: {
    name: "cameronbrady",
    email: "cameronbrady1527@gmail.com",
    avatar: ""
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "ML Concepts",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Tutorials",
          url: "#"
        },
        {
          title: "Algorithms",
          url: "#"
        },
        {
          title: "Math",
          url: "#"
        },
        {
          title: "Best Practices",
          url: "#"
        },
      ]
    },
    {
      title: "Neurological Insights",
      url: "#",
      icon: BrainCircuit,
      isActive: true,
      items: [
        {
          title: "Disorder Explanations",
          url: "#"
        },
        {
          title: "Current Detection Methods",
          url: "#"
        },
        {
          title: "Challenges in Diagnosis",
          url: "#"
        },
      ]
    },
    {
      title: "Project Updates",
      url: "#",
      icon: BellDot,
      isActive: true,
      items: [
        {
          title: "Weekly/Monthly Progress",
          url: "#"
        },
        {
          title: "Milestones Achieved",
          url: "#"
        },
        {
          title: "Challenges Overcome",
          url: "#"
        },
      ]
    },
    {
      title: "Learning Journey",
      url: "#",
      icon: BookOpenText,
      isActive: true,
      items: [
        {
          title: "Personal Growth",
          url: "#"
        },
        {
          title: "Lessons Learned",
          url: "#"
        },
        {
          title: "Resources Discovered",
          url: "#"
        },
      ]
    }
  ],
  projects: [
    {
      name: "Parkinsons Detection",
      url: "#",
      icon: Brain
    },
    {
      name: "Machine Learning Research Blog",
      url: "#",
      icon: SquareTerminal
    },
    {
      name: "Astral AI",
      url: "#",
      icon: BotIcon
    }
  ]
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      {/* <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader> */}
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      {/* <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter> */}
    </Sidebar>
  )
}