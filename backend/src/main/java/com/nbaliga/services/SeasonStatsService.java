package com.nbaliga.services;

import com.nbaliga.dto.SeasonStatsDTO;
import com.nbaliga.entities.SeasonStats;
import com.nbaliga.repositories.SeasonStatsRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class SeasonStatsService {

    private final SeasonStatsRepository seasonStatsRepository;

    public SeasonStatsService(SeasonStatsRepository seasonStatsRepository) {
        this.seasonStatsRepository = seasonStatsRepository;
    }

    @Transactional(readOnly = true)
    public List<SeasonStatsDTO> findStatsById(Long id) {
        List<SeasonStats> stats = seasonStatsRepository.findStatsById(id);
        return stats.stream().map(x -> new SeasonStatsDTO(x)).collect(Collectors.toList());
    }
    @Transactional(readOnly = true)
    public List<SeasonStatsDTO> findAll(Integer season) {
        List<SeasonStats> stats = seasonStatsRepository.findAllStats(season);
        return stats.stream().map(x -> new SeasonStatsDTO(x)).collect(Collectors.toList());
    }

}