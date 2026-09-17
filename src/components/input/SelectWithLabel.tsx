"use client"
import { Input } from "@base-ui/react/input";
import { InputHTMLAttributes } from "react";
import { useController, useFormContext } from "react-hook-form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

type DataObj = {
    id: string,
    description: string
}

type Props = {
    fieldTitle: string;
    nameInSchema: string;
    className?: string;
    data: DataObj[]
} & InputHTMLAttributes<HTMLInputElement>;

export function SelectWithLabel({
    fieldTitle,
    nameInSchema,
    className,
    data,
}: Props) {
    const { control } = useFormContext();

    const { field, fieldState } = useController({
        name: nameInSchema,
        control,
    });

    return (
        <div className="space-y-2">
            <label htmlFor={nameInSchema} className="text-base">
                {fieldTitle}
            </label>

            <Select {...field} onValueChange={field.onChange}>
                <SelectTrigger id={nameInSchema} className={`w-full max-w-xs ${className}`} >
                    <SelectValue placeholder="Select" />
                </SelectTrigger>

                <SelectContent>
                    {data.map(item => (
                        <SelectItem key={item.id} value={item.description} >
                            {item.description}
                        </SelectItem>
                    ))}
                </SelectContent>



                {fieldState.error && (
                    <p className="text-sm text-red-500">
                        {fieldState.error.message}
                    </p>
                )}
            </Select>

        </div>
    );

}