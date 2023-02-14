package com.nbaliga.repositories;

import com.nbaliga.entities.PlayerGameStats;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PlayerGameStatsRepository extends JpaRepository<PlayerGameStats, Long> {

}
