import React from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Notification from '../Notification';
import Section from './Section';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

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
      <Section title="Plese leave a feedback">
        <FeedbackOptions
          options={Object.keys(currentState)}
          onLeaveFeedback={onHandleCount}
        />
      </Section>

      <Section title="Statistics">
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
      </Section>
    </FeedbackDiv>
  );
};

Feedback.propTypes = {
  onHandleCount: PropTypes.func,
  currentState: PropTypes.object,
  totalFunc: PropTypes.func,
  parcentFunc: PropTypes.func,
  clearFunc: PropTypes.func,
};

export default Feedback;
