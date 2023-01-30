package com.nbaliga.repositories;

import com.nbaliga.entities.Player;
import com.nbaliga.entities.Team;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PlayerRepository extends JpaRepository<Player, Long> {

}
