package com.nbaliga.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nbaliga.entities.Team;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TeamRepository extends JpaRepository<Team, Long> {

    @Query("SELECT distinct obj FROM Team obj JOIN FETCH obj.players  WHERE obj.isHuman = 1")
    List<Team> listAll();

}
