package com.nbaliga.repositories;

import com.nbaliga.entities.Playoffs;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PlayoffsRepository extends JpaRepository<Playoffs, Long> {

}