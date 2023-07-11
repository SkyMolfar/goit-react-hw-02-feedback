import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonList } from './Feedback.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <ButtonList>
    {options.map((option) => (
      <Button key={option} onClick={() => onLeaveFeedback(option)}>
        {option}
      </Button>
    ))}
  </ButtonList>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};







