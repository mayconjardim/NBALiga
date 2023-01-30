package com.nbaliga.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nbaliga.entities.Team;
import org.springframework.stereotype.Repository;

@Repository
public interface TeamRepository extends JpaRepository<Team, Long> {

}
