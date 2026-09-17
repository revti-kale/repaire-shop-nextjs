"use client"
import { Input } from "@base-ui/react/input";
import { TextareaHTMLAttributes } from "react";
import { useController, useFormContext } from "react-hook-form";
import { Textarea } from "../ui/textarea";

type Props = {
    fieldTitle: string;
    nameInSchema: string;
    className?: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

export function TextareaWithLabel({ fieldTitle, nameInSchema, className, ...props }: Props) {
    const { control } = useFormContext();

    const { field, fieldState } = useController({
        name: nameInSchema,
        control,
    });

    return (
        <div className="space-y-2 mb-2">
            <label htmlFor={nameInSchema} className="text-base">
                {fieldTitle}
            </label>

            <Textarea
                id={nameInSchema}
                className={className}
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