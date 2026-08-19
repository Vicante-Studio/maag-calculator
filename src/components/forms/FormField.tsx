import type { FormFieldProps } from "../../types/formTypes"

const FormField = ({label, objKey, value, propFunction}: FormFieldProps) => {
    return(
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
                {label}:
            </label>
            <input 
                type="number" 
                value={value || 0}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="0"
                onChange={(e) => propFunction((prev) => ({...prev, [objKey]: Number(e.target.value) || 0}))}
            />
        </div>
    )
}

export default FormField