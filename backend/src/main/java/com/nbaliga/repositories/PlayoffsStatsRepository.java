package com.nbaliga.repositories;

import com.nbaliga.entities.PlayoffsStats;
import com.nbaliga.entities.SeasonStats;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PlayoffsStatsRepository extends JpaRepository<PlayoffsStats, Long> {
    @Query("SELECT obj FROM SeasonStats obj WHERE obj.season = :season AND obj.mpg > 5 ORDER BY obj.id ASC")
    List<PlayoffsStats> findAllStats(Integer season);

    @Query("SELECT DISTINCT obj FROM SeasonStats obj WHERE obj.id = :id ORDER BY obj.season ASC")
    List<PlayoffsStats> findStatsById(Long id);

}
