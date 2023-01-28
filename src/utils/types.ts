import { ChangeEventHandler } from "react";

export interface IRobot {
    id: string;
    name: string;
    email: string
}

export interface IAppProps {
    searchField: string; 
    onSearchChange: ChangeEventHandler; 
    robots: IRobot[]; 
    isPending: boolean; 
    onRequestRobots: any
}