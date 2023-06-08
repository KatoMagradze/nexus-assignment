import React, { useState } from "react";
import { Tabs } from "../../components/Tabs/Tabs";
import {
  IManagementItem,
  ManagementItem,
} from "./ManagementItem/ManagementItem";
import { Icon } from "../../components/index";
import { PersonCard } from "./PersonCard/PersonCard";
import Person from "../../assets/jpg/Person.jpg";
import { Connection } from "../../components/Connection/Connection";

const managementItems: IManagementItem[] = [
  {
    id: 1,
    title: "Sapling",
    specialization: "HR Management",
    icon: <Icon className={"bg-[#B5FFF2]"} />,
  },
  {
    id: 2,
    title: "Workday",
    specialization: "HR Management",
    icon: <Icon className={"bg-[#005CB9]"} />,
  },
  {
    id: 3,
    title: "Xero",
    specialization: "Employers Base",
    icon: <Icon className={"bg-[#1AB4D7]"} />,
  },
  {
    id: 4,
    title: "Rippling",
    specialization: "Salary Management",
    icon: <Icon className={"bg-[#FFB71C]"} />,
  },
  {
    id: 5,
    title: "Expensify",
    specialization: "HR Management",
    icon: <Icon className={"bg-[#1A0745]"} />,
  },
  {
    id: 6,
    title: "Zenefits",
    specialization: "HR Management",
    icon: <Icon className={"bg-[#FF5745]"} />,
  },
];

type TabType = "small" | "medium" | "enterprise";

export const Layout = () => {
  const [activeTab, setActiveTab] = useState<TabType>("small");
  const [selectedActives, setSelectedActives] = useState({
    small: [],
    medium: [],
    enterprise: [],
  });

  const handleToggle = (active, id) => {
    setSelectedActives((prev) => ({
      ...prev,
      [activeTab]: active
        ? [...prev[activeTab], id]
        : prev[activeTab].filter((itemId) => itemId !== id),
    }));
  };

  console.log(selectedActives[activeTab], "selectedActives");

  return (
    <>
      <Tabs
        tabItems={[
          {
            key: "small",
            label: "Small Businesses",
          },
          {
            key: "medium",
            label: "Medium Businesses",
          },
          {
            key: "enterprise",
            label: "Enterprise",
          },
        ]}
        defaultActiveTabKey={"small"}
        className={"mb-[69px] w-full"}
        onChange={(active) => setActiveTab(active)}
      />
      <div
        className={
          "flex flex-col justify-center items-center gap-5 max-w-[324px] lg:flex-row lg:items-end lg:gap-0 lg:max-w-full"
        }
      >
        <div className={"flex-col gap-5 hidden lg:flex"}>
          {managementItems.slice(0, 3).map((item) => {
            return (
              <ManagementItem
                key={item.id}
                title={item.title}
                specialization={item.specialization}
                icon={item.icon}
                id={item.id}
                active={selectedActives[activeTab].includes(item.id)}
                onToggle={(active) => handleToggle(active, item.id)}
              />
            );
          })}
        </div>

        <Connection
          className={"self-center hidden lg:block"}
          activeItems={selectedActives[activeTab]}
          isLeft
        />

        <PersonCard
          name={"Lauren Robson"}
          specialization={"HR Director"}
          description={
            "“I want to lower PTO liability and keep my employees happy. I want to lower PTO liability.”"
          }
          image={Person}
        />

        <Connection
          className={"self-center scale-x-[-1] hidden lg:block"}
          activeItems={selectedActives[activeTab]}
        />

        <div className={"flex flex-col gap-5 w-full"}>
          {managementItems.slice(3, 6).map((item) => {
            return (
              <ManagementItem
                key={item.id}
                title={item.title}
                specialization={item.specialization}
                icon={item.icon}
                id={item.id}
                active={selectedActives[activeTab].includes(item.id)}
                onToggle={(active) => handleToggle(active, item.id)}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
