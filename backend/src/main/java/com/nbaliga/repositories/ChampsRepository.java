package com.nbaliga.repositories;

import com.nbaliga.entities.Champs;
import com.nbaliga.entities.Team;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ChampsRepository extends JpaRepository<Champs, Long> {

}
