package com.nbaliga.repositories;

import com.nbaliga.entities.PlayerAwards;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PlayerAwardsRepository extends JpaRepository<PlayerAwards, Long> {
    List<PlayerAwards> findByPlayerId(Long id);
}
