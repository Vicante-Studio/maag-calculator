import { useEffect, useState } from 'react'
import './App.css'
import AttendanceForm from './components/forms/AttendanceForm'

function App() {
  const [numOfWeeks, setNumOfWeeks] = useState<number>(4)

  const [attendanceData, setAttendanceData] = useState<any[]>(Array(4).fill(null).map(() => ({ men: 0, women: 0, teens: 0, children: 0 })))

  useEffect(() => {
    setAttendanceData(Array(numOfWeeks).fill(null).map(() => ({ men: 0, women: 0, teens: 0, children: 0 })))
  }, [numOfWeeks])
  
  const updateWeek = (weekNum: number, data: any): void => {
    const updated = [... attendanceData]

    updated[weekNum - 1] = data
    setAttendanceData(updated)
  }

   // Calculate totals and averages
  const totalMen = attendanceData.reduce((sum, week) => sum + (week.men || 0), 0)
  const totalWomen = attendanceData.reduce((sum, week) => sum + (week.women || 0), 0)
  const totalTeens = attendanceData.reduce((sum, week) => sum + (week.teens || 0), 0)
  const totalChildren = attendanceData.reduce((sum, week) => sum + (week.children || 0), 0)

  const avgMen = Math.floor(totalMen / numOfWeeks)
  const avgWomen = Math.floor(totalWomen / numOfWeeks)
  const avgTeens = Math.floor(totalTeens / numOfWeeks)
  const avgChildren = Math.floor(totalChildren / numOfWeeks)

  const highestAttendance = attendanceData.length > 0 ? Math.max(
    ...attendanceData.map(week => week.men + week.women + week.teens + week.children)
  ) : 0
  const avgAttendance = (totalMen + totalWomen + totalTeens + totalChildren) / numOfWeeks

  return (
    <main className='p-8'>
      {/* Intro section */}
      <section className='flex flex-col gap-4 p-4'>
        <h1 className='text-center text-5xl font-bold'>LFC MAAG Attendance Calculator</h1>
        <h2 className='text-center text-2xl font-semibold'>Input Your Attendance Data & Generate Your Report</h2>
      </section>

      <section>
        <form action="" className=''>
          <label>
            Number of Weeks:
            <select name="numOfWeeks" id="numOfWeeks" className='border w-fit px-2 py-1 mx-4' onChange={(e) => setNumOfWeeks(Number(e.target.value))}>
              <option value='4'>4</option>
              <option value="5">5</option>
            </select>
          </label>
        </form>
      </section>

      <section className='flex w-full gap-4 justify-center'>
        { Array.from({ length: numOfWeeks }).map((_, index) => (
          <AttendanceForm key={index} weekNumber={index + 1} updateWeek={(data) => updateWeek(index + 1, data)}/>
        ))}
      </section>

     <section className="w-full mt-6 bg-red-600 hover:bg-red-700 text-white font-medium py-6 rounded-md transition px-4">
        <h3 className="font-bold mb-4">Summary</h3>
        <p>Total Men: {totalMen} | Average Men: {avgMen}</p>
        <p>Total Women: {totalWomen} | Average Women: {avgWomen}</p>
        <p>Total Teens: {totalTeens} | Average Teens: {avgTeens}</p>
        <p>Total Children: {totalChildren} | Average Children: {avgChildren}</p>
        <p>Highest Weekly Attendance: {highestAttendance}</p>
        <p>Average Weekly Attendance: {avgAttendance}</p>
      </section>
    </main>
  )
}

export default App
