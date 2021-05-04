import React, { useRef } from "react"
import {
  InputGroup,
  Input,
  Label,
  TextError,
  TextSuccess,
  RadioGroup,
  RadioTitle,
  RadioLabel,
} from "./styles/Input.styles"
import {BiCheckCircle} from "react-icons/bi"
const CustomInput = ({
  type,
  onChange,
  label,
  value,
  touched,
  valid,
  validationErrors,
  ...otherProps
}) => {
  const transformedErrors =
    validationErrors && validationErrors.length
      ? validationErrors.map((error, idx) => {
          return idx === validationErrors.length - 1 ? error : error + ", "
        })
      : ""
  const border = touched ? (transformedErrors ? "error" : "success") : null
  const inputRef = useRef(null)
  const handleClick = e => {
    inputRef.current.focus()
  }
  if (type === "radio")
    return (
      <RadioGroup>
        <RadioTitle>{label}</RadioTitle>
        {otherProps.subFields &&
          otherProps.subFields.map(field => (
            <RadioLabel>
              <input
                type="radio"
                name={otherProps.name}
                value={field.value}
                onChange={onChange}
                defaultChecked={field.value === value}
              />
              {field.label}
            </RadioLabel>
          ))}
      </RadioGroup>
    )
  return (
    <InputGroup>
      <Input
        type={type}
        onChange={onChange}
        value={value}
        {...otherProps}
        border={border}
        ref={inputRef}
      />
      <Label shrinkLabel={!!value} onClick={handleClick}>
        {label}
      </Label>
      {touched ? (
        transformedErrors ? (
          <TextError>{transformedErrors}</TextError>
        ) : (
          <TextSuccess><BiCheckCircle/></TextSuccess>
        )
      ) : null}
    </InputGroup>
  )
}

export default CustomInput
