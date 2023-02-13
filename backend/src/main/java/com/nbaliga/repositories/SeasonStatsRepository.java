package com.nbaliga.repositories;

import com.nbaliga.entities.SeasonStats;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SeasonStatsRepository extends JpaRepository<SeasonStats, Long> {
    @Query("SELECT obj FROM SeasonStats obj JOIN FETCH obj.player WHERE obj.season = :season AND obj.mpg > 5 ORDER BY obj.ppg DESC")
    List<SeasonStats> findAllStats(Integer season);

    @Query("SELECT DISTINCT obj FROM SeasonStats obj WHERE obj.id = :id ORDER BY obj.season DESC")
    List<SeasonStats> findStatsById(Long id);

}
