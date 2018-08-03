import React from 'react';
import PropTypes from 'prop-types';
import ActivitiesCheckboxes from './ActivitiesCheckboxes';

const Checkbox = ({ type = 'checkbox', name, defaultChecked, checked, onChange }) => (
    <input type={type} name={name} defaultChecked={defaultChecked} checked={checked} onChange={onChange} />
);

Checkbox.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
}

export default Checkbox;