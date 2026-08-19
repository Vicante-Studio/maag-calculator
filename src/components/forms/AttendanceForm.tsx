import { useEffect, useState } from "react"
import FormField from "./FormField"
import type { AttendanceData, AttendanceFormProps } from "../../types/formTypes"

const AttendanceForm = ({weekNumber, updateWeek}: AttendanceFormProps) => {
    const [sunday, setSunday] = useState<AttendanceData>({men: 0, women: 0, teens: 0, children: 0})
    const [midweek, setMidweek] = useState<AttendanceData>({men: 0, women: 0, teens: 0, children: 0})

    const men: number = sunday.men + midweek.men
    const women: number = sunday.women + midweek.women
    const teens: number = sunday.teens + midweek.teens
    const children: number = sunday.children + midweek.children

    useEffect(() => {
        updateWeek({men, women, teens, children})
    }, [men, women, teens, children, weekNumber])


    return(
        <form className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
            <h3 className="font-bold mb-4">
                Week {weekNumber}
            </h3>

            <section className="flex gap-4">
                <div>
                    <FormField label='Sunday Men' objKey='men' value={sunday.men} propFunction={setSunday}/>
                    <FormField label='Sunday Women' objKey='women' value={sunday.women} propFunction={setSunday}/>
                    <FormField label='Sunday Teens' objKey='teens' value={sunday.teens} propFunction={setSunday}/>
                    <FormField label='Sunday Children' objKey='children' value={sunday.children} propFunction={setSunday}/>
                </div>
                <div>
                    <FormField label='Midweek Men' objKey='men' value={midweek.men} propFunction={setMidweek}/>
                    <FormField label='Midweek Women' objKey='women' value={midweek.women} propFunction={setMidweek}/>
                    <FormField label='Midweek Teens' objKey='teens' value={midweek.teens} propFunction={setMidweek}/>
                    <FormField label='Midweek Children' objKey='children' value={midweek.children} propFunction={setMidweek}/>
                </div>
            </section>
        </form>
    )
}

export default AttendanceForm