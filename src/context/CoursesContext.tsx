import { createContext } from "react";
import { CoursesContextType } from "../models/models";

export const CoursesContext = createContext<CoursesContextType | null>(null);