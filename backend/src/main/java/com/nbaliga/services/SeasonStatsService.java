package com.nbaliga.services;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import com.nbaliga.dto.SeasonStatsDTO;
import com.nbaliga.entities.SeasonStats;
import com.nbaliga.repositories.SeasonStatsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class SeasonStatsService {

    private final SeasonStatsRepository seasonStatsRepository;

    public SeasonStatsService(SeasonStatsRepository seasonStatsRepository) {
        this.seasonStatsRepository = seasonStatsRepository;
    }

    @Transactional(readOnly = true)
    public List<SeasonStatsDTO> findAll(Integer season) {
        List<SeasonStats> stats = seasonStatsRepository.findAllStats(season);
        return stats.stream().map(x -> new SeasonStatsDTO(x)).collect(Collectors.toList());
    }

}