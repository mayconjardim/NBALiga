package com.nbaliga.services;

import com.nbaliga.dto.PlayoffStatsDTO;
import com.nbaliga.entities.PlayoffStats;
import com.nbaliga.repositories.PlayoffStatsRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class PlayoffStatsService {

    private final PlayoffStatsRepository PlayoffStatsRepository;

    public PlayoffStatsService(PlayoffStatsRepository PlayoffStatsRepository) {
        this.PlayoffStatsRepository = PlayoffStatsRepository;
    }

    @Transactional(readOnly = true)
    public List<PlayoffStatsDTO> findStatsById(Long id) {
        List<PlayoffStats> stats = PlayoffStatsRepository.findStatsById(id);
        return stats.stream().map(x -> new PlayoffStatsDTO(x)).collect(Collectors.toList());
    }
    @Transactional(readOnly = true)
    public List<PlayoffStatsDTO> findAll(Integer season) {
        List<PlayoffStats> stats = PlayoffStatsRepository.findAllStats(season);
        return stats.stream().map(x -> new PlayoffStatsDTO(x)).collect(Collectors.toList());
    }

}