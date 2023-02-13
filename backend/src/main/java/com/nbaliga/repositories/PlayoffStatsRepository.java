package com.nbaliga.repositories;

import com.nbaliga.entities.PlayoffStats;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PlayoffStatsRepository extends JpaRepository<PlayoffStats, Long> {
    @Query("SELECT obj FROM PlayoffStats obj WHERE obj.season = :season " +
            " ORDER BY (obj.points / obj.games) DESC")
    List<PlayoffStats> findAllStats(Integer season);

    @Query("SELECT DISTINCT obj FROM PlayoffStats obj WHERE obj.id = :id ORDER BY obj.season DESC")
    List<PlayoffStats> findStatsById(Long id);

}
