package com.nbaliga.repositories;

import com.nbaliga.entities.Awards;
import com.nbaliga.entities.PlayoffStats;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AwardsRepository extends JpaRepository<Awards, Long> {
    List<Awards> findByPlayerId(Long id);
}
