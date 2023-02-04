package com.nbaliga.repositories;

import com.nbaliga.entities.Champs;
import com.nbaliga.entities.DraftPicks;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DraftPicksRepository extends JpaRepository<DraftPicks, Long> {

    @Query("SELECT distinct obj FROM DraftPicks obj WHERE obj.year > 0 ORDER BY obj.year")
    List<DraftPicks> findAll();

}
