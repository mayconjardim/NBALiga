package com.nbaliga.repositories;

import com.nbaliga.entities.Player;
import com.nbaliga.entities.Team;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PlayerRepository extends JpaRepository<Player, Long> {

    @Query("SELECT distinct obj FROM Player obj ORDER BY obj.overallRating DESC")
    Page<Player> listAll(Pageable pageable);

}
