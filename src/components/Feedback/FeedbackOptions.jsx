import React from 'react';
import styled from '@emotion/styled';

const FeedbackButtons = styled.div`
  display: flex;
  gap: 10px;
`;

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackButtons onClick={onLeaveFeedback}>
      {options.map((elem, index) => {
        return (
          <button type="button" key={index}>
            {elem}
          </button>
        );
      })}
    </FeedbackButtons>
  );
};

export default FeedbackOptions;
