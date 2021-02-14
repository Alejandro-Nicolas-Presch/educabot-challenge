import React from 'react'
import PropTypes from 'prop-types'
import './button.css'

const Button = (props) => {
  const { variant = 'primary', children, ...rest } = props
  return (
    <button className={`button ${variant}`} {...rest}>
      {children}
    </button>
  )
}
Button.propTypes = {
  variant: PropTypes.string

}
Button.defaultProps = {
  variant: '',
  children: ''
}
export default Button
