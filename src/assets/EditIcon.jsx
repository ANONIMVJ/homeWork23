import * as React from "react"

const EditIcon = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.width ?? 24}
        height={props.height ?? 24}
        fill="none"
        {...props}
    >
        <path
            stroke={props.color || "teal"}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m15.232 5.232 3.536 3.536m-2.036-5.036a2.5 2.5 0 1 1 3.536 3.536L6.5 21.036H3v-3.572L16.732 3.732Z"
        />
    </svg>
)

export default EditIcon;
