package com.nbaliga.services;

import com.nbaliga.dto.StandingsDTO;
import com.nbaliga.entities.Team;
import com.nbaliga.repositories.StandingsRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class StandingsService {
    private final StandingsRepository StandingsRepository;
    public StandingsService(StandingsRepository StandingsRepository) {
        this.StandingsRepository = StandingsRepository;
    }
    @Transactional(readOnly = true)
    public List<StandingsDTO> findAllStandings() {
        List<Team> list = StandingsRepository.findStandings();
        return list.stream().map(standings -> new StandingsDTO(standings)).collect(Collectors.toList());
    }
}
