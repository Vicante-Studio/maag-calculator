import { useEffect, useState } from 'react'
import './App.css'
import AttendanceForm from './components/forms/AttendanceForm'

function App() {
  const [numOfWeeks, setNumOfWeeks] = useState<number>(4)

  const [attendanceData, setAttendanceData] = useState<any[]>(
    Array(4)
      .fill(null)
      .map(() => ({
        men: 0,
        women: 0,
        teens: 0,
        children: 0,
      }))
  )

  useEffect(() => {
    setAttendanceData(
      Array(numOfWeeks)
        .fill(null)
        .map(() => ({
          men: 0,
          women: 0,
          teens: 0,
          children: 0,
        }))
    )
  }, [numOfWeeks])

  const updateWeek = (weekNum: number, data: any): void => {
    const updated = [...attendanceData]

    updated[weekNum - 1] = data
    setAttendanceData(updated)
  }

  // Calculate totals and averages
  const totalMen = attendanceData.reduce(
    (sum, week) => sum + (week.men || 0),
    0
  )

  const totalWomen = attendanceData.reduce(
    (sum, week) => sum + (week.women || 0),
    0
  )

  const totalTeens = attendanceData.reduce(
    (sum, week) => sum + (week.teens || 0),
    0
  )

  const totalChildren = attendanceData.reduce(
    (sum, week) => sum + (week.children || 0),
    0
  )

  const avgMen = Math.floor(totalMen / numOfWeeks)
  const avgWomen = Math.floor(totalWomen / numOfWeeks)
  const avgTeens = Math.floor(totalTeens / numOfWeeks)
  const avgChildren = Math.floor(totalChildren / numOfWeeks)

  const highestAttendance =
    attendanceData.length > 0
      ? Math.max(
          ...attendanceData.map(
            (week) =>
              (week.men || 0) +
              (week.women || 0) +
              (week.teens || 0) +
              (week.children || 0)
          )
        )
      : 0

  const avgAttendance =
    (totalMen + totalWomen + totalTeens + totalChildren) / numOfWeeks

  return (
    <main className="min-h-screen w-full px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      {/* Intro section */}
      <section className="flex flex-col gap-3 p-2 sm:p-4">
        <h1 className="text-center text-3xl font-bold sm:text-4xl lg:text-5xl">
          LFC MAAG Attendance Calculator
        </h1>

        <h2 className="text-center text-lg font-semibold sm:text-xl lg:text-2xl">
          Input Your Attendance Data & Generate Your Report
        </h2>
      </section>

      {/* Number of weeks */}
      <section className="mt-4 flex justify-center">
        <form>
          <label className="flex flex-col items-center gap-2 text-sm font-medium sm:flex-row sm:gap-3 sm:text-base">
            <span>Number of Weeks:</span>

            <select
              name="numOfWeeks"
              id="numOfWeeks"
              className="w-full rounded border px-3 py-2 sm:w-fit"
              value={numOfWeeks}
              onChange={(e) => setNumOfWeeks(Number(e.target.value))}
            >
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </label>
        </form>
      </section>

      {/* Weekly attendance forms */}
      <section className="mx-auto mt-6 grid w-full max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: numOfWeeks }).map((_, index) => (
          <AttendanceForm
            key={index}
            weekNumber={index + 1}
            updateWeek={(data) => updateWeek(index + 1, data)}
          />
        ))}
      </section>

      {/* Summary */}
      <section className="mx-auto mt-6 w-full max-w-7xl rounded-md bg-red-600 px-4 py-5 text-white transition hover:bg-red-700 sm:px-6 sm:py-6">
        <h3 className="mb-4 text-xl font-bold sm:text-2xl">Summary</h3>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <p>
            Total Men: {totalMen} | Average Men: {avgMen}
          </p>

          <p>
            Total Women: {totalWomen} | Average Women: {avgWomen}
          </p>

          <p>
            Total Teens: {totalTeens} | Average Teens: {avgTeens}
          </p>

          <p>
            Total Children: {totalChildren} | Average Children: {avgChildren}
          </p>

          <p>Highest Weekly Attendance: {highestAttendance}</p>

          <p>Average Weekly Attendance: {avgAttendance}</p>
        </div>
      </section>
    </main>
  )
}

export default App
