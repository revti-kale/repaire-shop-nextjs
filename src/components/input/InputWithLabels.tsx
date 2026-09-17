"use client"
import { Input } from "@base-ui/react/input";
import { InputHTMLAttributes } from "react";
import { useController, useFormContext } from "react-hook-form";

type Props = {
    fieldTitle: string;
    nameInSchema: string;
    className?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export function InputWithLabel({
    fieldTitle,
    nameInSchema,
    className,
    ...props
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

            <Input
                id={nameInSchema}
                className={`w-full max-w-xs ${className ?? ""}`}
                {...props}
                {...field}
            />

            {fieldState.error && (
                <p className="text-sm text-red-500">
                    {fieldState.error.message}
                </p>
            )}
        </div>
    );
}