import React, { useState } from "react";

interface ITabItem {
  key: number;
  label: string;
}

interface ITabs {
  tabItems: ITabItem[];
  defaultActiveTabKey: any;
  className?: string;
  onChange?: (activeTab: any) => void;
}

export const Tabs: React.FC<ITabs> = ({
  tabItems,
  defaultActiveTabKey,
  className,
  onChange,
}) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTabKey);

  const handleTabClick = (active) => {
    onChange?.(active);
    setActiveTab(active);
  };

  return (
    <div
      className={`flex justify-center items-center gap-2 ${className || ""}`}
    >
      {tabItems.map((item) => {
        return (
          <div
            key={item.key}
            className={`py-2.5 px-[15px] font-bold text-xs text-secondary-content cursor-pointer border border-grey rounded-xl ${
              activeTab === item.key ? "bg-primary text-white border-none" : ""
            }`}
            onClick={() => handleTabClick(item.key)}
          >
            {item.label}
          </div>
        );
      })}
    </div>
  );
};
