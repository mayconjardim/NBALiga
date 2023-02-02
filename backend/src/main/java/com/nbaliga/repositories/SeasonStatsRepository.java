package com.nbaliga.repositories;

import com.nbaliga.entities.SeasonStats;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SeasonStatsRepository extends JpaRepository<SeasonStats, Long> {

}
