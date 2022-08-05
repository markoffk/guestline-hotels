import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Stack } from '../Layout/Stack';

export type Filter = { desiredAdults: number; desiredChildren: number; stars: number };
type Props = {
  onChange: (filter: Filter) => void;
};

export const FilterBar: React.FC<Props> = ({ onChange }) => {
  const [stars, setStars] = useState(3);
  const [desiredAdults, setDesiredAdults] = useState(1);
  const [desiredChildren, setDesiredChildren] = useState(0);
  const possibleStars = [1, 2, 3, 4, 5];

  useEffect(() => {
    onChange({
      desiredAdults,
      desiredChildren,
      stars,
    });
  }, [desiredAdults, desiredChildren, stars, onChange]);

  return (
    <Root>
      <Stack gap={24} justifyContent="center">
        <div>
          {possibleStars.map((star) => (
            <button disabled={stars === star} key={star} onClick={(_) => setStars(star)}>
              {star}
            </button>
          ))}
        </div>
        <div>
          adults:{' '}
          <button disabled={desiredAdults <= 1} onClick={(_) => setDesiredAdults(desiredAdults - 1)}>
            -
          </button>{' '}
          {desiredAdults} <button onClick={(_) => setDesiredAdults(desiredAdults + 1)}>+</button>
        </div>
        <div>
          children:{' '}
          <button disabled={desiredChildren <= 0} onClick={(_) => setDesiredChildren(desiredChildren - 1)}>
            -
          </button>{' '}
          {desiredChildren} <button onClick={(_) => setDesiredChildren(desiredChildren + 1)}>+</button>
        </div>
      </Stack>
    </Root>
  );
};

const Root = styled.div`
  border: 1px dashed black;
  padding: 8px;
`;
