package com.nbaliga.repositories;

import com.nbaliga.entities.SeasonInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SeasonInfoRepository extends JpaRepository<SeasonInfo, Integer> {

}
