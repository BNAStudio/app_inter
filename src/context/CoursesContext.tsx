import { createContext } from "react";
import { CoursesContextType } from "../types/types";

export const CoursesContext = createContext<CoursesContextType | null>(null);