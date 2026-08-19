import type { FormFieldProps } from "../../types/formTypes"

const FormField = ({label, setFunction}: FormFieldProps) => {
    return(
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
                {label}:
            </label>
            <input 
                type="number" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="0"
                onChange={(e) => setFunction(Number(e.target.value))}
            />
        </div>
    )
}

export default FormField