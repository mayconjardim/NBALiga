package com.nbaliga.repositories;

import com.nbaliga.entities.Schedule;
import com.nbaliga.entities.Team;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ScheduleRepository extends JpaRepository<Schedule, String> {

    @Query("SELECT obj FROM Schedule obj ORDER BY obj.day ASC")
    List<Schedule> findAllSchedule();

    @Query("SELECT DISTINCT obj FROM Schedule obj WHERE obj.home = :team OR obj.away = :team"
            + "  ORDER BY obj.day ASC")
    List<Schedule> findSchedulesByTeam(String team);


}
