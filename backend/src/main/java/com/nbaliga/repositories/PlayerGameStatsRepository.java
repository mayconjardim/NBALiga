package com.nbaliga.repositories;

import com.nbaliga.entities.PlayerGameStats;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PlayerGameStatsRepository extends JpaRepository<PlayerGameStats, Long> {

    @Query("SELECT DISTINCT obj FROM PlayerGameStats obj WHERE obj.team = :team AND obj.seasonDay = :day")
    List<PlayerGameStats> findPlayerByTeam(String team, Integer day);

}
