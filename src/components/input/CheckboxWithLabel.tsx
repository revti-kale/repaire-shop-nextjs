"use client";

import { Checkbox } from "@base-ui/react/checkbox";
import { useController, useFormContext } from "react-hook-form";

type Props = {
    fieldTitle: string;
    nameInSchema: string;
    message: string
};

export function CheckboxWithLabel({
    fieldTitle,
    nameInSchema,
    message
}: Props) {
    const { control } = useFormContext();

    const { field, fieldState } = useController({
        name: nameInSchema,
        control,
    });

    return (
        <div className="space-y-2">
            <div className="flex items-center gap-2">
                {/* Label FIRST */}
                <label
                    htmlFor={nameInSchema}
                    className="text-base"
                >
                    {fieldTitle}
                </label>

                {/* Checkbox */}
                <Checkbox.Root
                    id={nameInSchema}
                    checked={field.value ?? false}
                    onCheckedChange={field.onChange}
                    onBlur={field.onBlur}
                    name={field.name}
                    ref={field.ref}
                    className="flex h-5 w-5 items-center justify-center rounded border border-gray-400"
                >
                    <Checkbox.Indicator className="text-sm font-bold">
                        ✓
                    </Checkbox.Indicator>
                </Checkbox.Root>

                {/* Yes */}
                <span className="text-base">
                    {message}
                </span>
            </div>

            {fieldState.error && (
                <p className="text-sm text-red-500">
                    {fieldState.error.message}
                </p>
            )}
        </div>
    );
}