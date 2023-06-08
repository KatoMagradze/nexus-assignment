import React, { useState } from "react";

interface ITabItem {
  key: any;
  label: string;
}

interface ITabs {
  tabItems: ITabItem[];
  defaultActiveTabKey: any;
  className?: string;
  onChange?: (activeTabKey: any) => void;
}

export const Tabs: React.FC<ITabs> = ({
  tabItems,
  defaultActiveTabKey,
  className,
  onChange,
}) => {
  const [activeTab, setActiveTab] = useState<any>(defaultActiveTabKey);

  const handleTabClick = (activeTabKey: any) => {
    onChange?.(activeTabKey);
    setActiveTab(activeTabKey);
  };

  return (
    <div
      className={`flex justify-center items-center gap-2 border-b border-grey xs:border-b-0 ${
        className || ""
      }`}
    >
      {tabItems.map((item) => {
        return (
          <div
            key={item.key}
            className={`py-2.5 px-[15px] font-bold text-xs text-secondary-content cursor-pointer xs:border xs:border-grey xs:rounded-xl ${
              activeTab === item.key
                ? "text-primary border-b-2 border-b-primary mb-[-2px] xs:bg-primary xs:text-white xs:border-none xs:mb-0"
                : ""
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
