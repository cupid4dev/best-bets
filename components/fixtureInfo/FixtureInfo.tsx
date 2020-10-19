import React from 'react';
import { format, formatDistance } from 'date-fns';

import { FixtureWithBets } from '../../types';
import styles from './FixtureInfo.module.css';
import TeamName from '../teamName/TeamName';

interface Props {
  fixture: FixtureWithBets;
}

const getBestBetTeam = (fixture: FixtureWithBets) => {
  if (fixture.homeTeamPoints > fixture.awayTeamPoints) {
    return fixture.homeTeam.teamName;
  }

  if (fixture.awayTeamPoints > fixture.homeTeamPoints) {
    return fixture.awayTeam.teamName;
  }
  return undefined;
};

const FixtureInfo: React.FC<Props> = ({ fixture }: Props) => {
  const eventDate = new Date(fixture.eventDate);
  const inXdays = formatDistance(eventDate, new Date());
  const bestBetTeamName = getBestBetTeam(fixture);
  const { homeTeam, awayTeam } = fixture;

  return (
    <div className={styles.fixtureInfoContainer}>
      <img
        className={styles.leagueIcon}
        src="/pictures/premier-league.png"
        alt="Premier League Symbol"
      />
      <div>
        <p
          className={`${styles.fixtureItemTeams} ${styles.teamNamesContainer}`}
        >
          <TeamName
            team={homeTeam}
            isBestBet={bestBetTeamName === homeTeam.teamName}
          />
          <span className={styles.x}>x</span>
          <TeamName
            team={fixture.awayTeam}
            isBestBet={bestBetTeamName === awayTeam.teamName}
          />
        </p>
        <p className={styles.fixtureItemDate}>
          {format(eventDate, 'd/MM/yyyy')} ({inXdays})
        </p>
        <p className={styles.fixtureItemTime}>{format(eventDate, 'hh:mm')}H</p>
      </div>
    </div>
  );
};

export default React.memo(FixtureInfo);
