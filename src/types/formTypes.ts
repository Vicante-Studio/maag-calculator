import type { Dispatch, SetStateAction } from "react";

export interface AttendanceData {
  men: number
  women: number
  teens: number
  children: number
}

export interface FormFieldProps {
    label:string
    propFunction: Dispatch<SetStateAction<AttendanceData>>
    objKey: string,
    value: number
}

export interface AttendanceFormProps {
    weekNumber:number
    updateWeek: (data: AttendanceData) => void
}