import React from 'react';

import IconGoldenBall from '@/icons/IconGoldenBall';
import Text from '@/components/text/Text';
import FlexContainer from '@/components/flexContainer/FlexContainer';
import { BetItemDetail } from '@/services/bets/types';
import { Team } from '@/services/fixtures/types';

interface Props {
  team: Team;
  bestPlayers: BetItemDetail;
}

const PlayersDetails: React.FC<Props> = ({ team, bestPlayers }) => {
  const playersWithYear = bestPlayers.value as string[][];
  return (
    <>
      {playersWithYear.map((playerWithYear: string[]) => {
        const [name, year] = playerWithYear;
        return (
          <FlexContainer key={`${name}_${year}}`} columnGap>
            <>
              <IconGoldenBall />
              <Text
                variant="body1"
                text={`${team.teamName} has ${name} in the team, one of the 3 FIFA best players of the world in ${year}.`}
              />
            </>
          </FlexContainer>
        );
      })}
    </>
  );
};

export default React.memo(PlayersDetails);
