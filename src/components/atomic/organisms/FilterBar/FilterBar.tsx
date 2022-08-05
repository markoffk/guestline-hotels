import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Stack } from '../Layout/Stack';

export type Filter = { adults: number; kids: number; stars: number };
type Props = {
  onChange: (filter: Filter) => void;
};

export const FilterBar: React.FC<Props> = ({ onChange }) => {
  const [stars, setStars] = useState(3);
  const [adults, setAdults] = useState(1);
  const [kids, setKids] = useState(0);
  const possibleStars = [1, 2, 3, 4, 5];

  useEffect(() => {
    onChange({
      adults,
      kids,
      stars,
    });
  }, [adults, kids, stars, onChange]);

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
          <button disabled={adults <= 1} onClick={(_) => setAdults(adults - 1)}>
            -
          </button>{' '}
          {adults} <button onClick={(_) => setAdults(adults + 1)}>+</button>
        </div>
        <div>
          children:{' '}
          <button disabled={kids <= 0} onClick={(_) => setKids(kids - 1)}>
            -
          </button>{' '}
          {kids} <button onClick={(_) => setKids(kids + 1)}>+</button>
        </div>
      </Stack>
    </Root>
  );
};

const Root = styled.div`
  border: 1px dashed black;
  padding: 8px;
`;
