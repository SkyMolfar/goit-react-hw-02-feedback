import React from 'react';
import PropTypes from 'prop-types';
import { NoFeedback, StatItem, Statlist, StatsContainer } from './Statistics.styled';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <StatsContainer>
    {total === 0 ? (
      <NoFeedback>No feedback yet</NoFeedback>
    ) : (
      <>
        <Statlist>
          <StatItem>Good: {good}</StatItem>
          <StatItem>Neutral: {neutral}</StatItem>
          <StatItem>Bad: {bad}</StatItem>
        </Statlist>
        <StatItem>Total Feedback: {total}</StatItem>
        <StatItem>Positive Feedback Percentage: {positivePercentage}%</StatItem>
      </>
    )}
  </StatsContainer>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
