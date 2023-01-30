package com.nbaliga.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nbaliga.entities.Team;

public interface TeamRepository extends JpaRepository<Team, Long> {

}
