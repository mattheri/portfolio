import React from 'react';

type Props = {
    id: string,
    value: string,
    error: {
        isError: boolean,
        msg: string
    },
    onChange: (val: string, id: string) => void,
    label: string,
    type?: "text-area" | "input"
}

export const Input = ({ id, value, error, onChange, label, type }: Props) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        onChange(e.currentTarget.value, e.currentTarget.id);
    }
    
    const As = type === "text-area" ? "textarea" : "input";

    return (
        <div className="input">
            <label htmlFor={id}>{label}</label>
            <As onChange={handleChange} className={error.isError ? "error" : ""} type={type === "text-area" ? "" : "text"} name={id} id={id} value={value} />
            <small>{error.msg ? error.msg : ""}</small>
        </div>
    );
}