import React from "react";
import { Switch } from "../../../components/Switch/Switch";

export interface IManagementItem {
  id: number;
  title: string;
  specialization: string;
  icon: JSX.Element;
}

interface IManagementComponent extends IManagementItem {
  active: boolean;
  onToggle: (isActive: boolean) => void;
}

export const ManagementItem: React.FC<IManagementComponent> = ({
  title,
  specialization,
  icon,
  active,
  onToggle,
}) => {
  return (
    <div
      className={`flex justify-between items-center rounded-xl ${
        active ? "border-2 border-primary p-[15px]" : "border border-grey p-4"
      } lg:w-[280px]`}
    >
      <div className={"flex justify-center items-center gap-2"}>
        {icon}
        <div>
          <div className={"text-primary-content text-base font-medium"}>
            {title}
          </div>
          <div className={"text-secondary-content text-xs font-normal"}>
            {specialization}
          </div>
        </div>
      </div>
      <Switch active={active} onClick={(isActive) => onToggle?.(isActive)} />
    </div>
  );
};
