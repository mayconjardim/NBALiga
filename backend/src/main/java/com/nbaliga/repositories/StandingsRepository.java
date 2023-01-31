package com.nbaliga.repositories;

import com.nbaliga.entities.Team;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StandingsRepository extends JpaRepository<Team, Long> {
    @Query("SELECT distinct obj FROM Team obj" +
            " WHERE obj.isHuman = true ORDER BY obj.winPct DESC")
    List<Team> findStandings();

}
