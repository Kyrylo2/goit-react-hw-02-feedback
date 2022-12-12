import React from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Notification from '../Notification/Notification';
import Section from './Section';
import styled from '@emotion/styled';

const FeedbackDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Feedback = ({
  onHandleCount,
  currentState,
  totalFunc,
  parcentFunc,
  clearFunc,
}) => {
  return (
    <FeedbackDiv>
      <Section title="Plese leave a feedback" />

      <FeedbackOptions
        options={Object.keys(currentState)}
        onLeaveFeedback={onHandleCount}
      />

      {totalFunc() > 0 ? (
        <>
          <button type="button" onClick={clearFunc}>
            Clear Stat
          </button>
          <Statistics
            good={currentState.good}
            neutral={currentState.neutral}
            bad={currentState.bad}
            total={totalFunc()}
            positivePercentage={parcentFunc()}
          />
        </>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </FeedbackDiv>
  );
};

export default Feedback;
