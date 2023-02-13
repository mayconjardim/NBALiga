package com.nbaliga.services;

import com.nbaliga.dto.PlayoffsDTO;
import com.nbaliga.entities.Playoffs;
import com.nbaliga.repositories.PlayoffsRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class PlayoffsService {

    private final PlayoffsRepository seasonStatsRepository;

    public PlayoffsService(PlayoffsRepository seasonStatsRepository) {
        this.seasonStatsRepository = seasonStatsRepository;
    }

    @Transactional(readOnly = true)
    public List<PlayoffsDTO> findAll() {
        List<Playoffs> offs = seasonStatsRepository.findAll();
        return offs.stream().map(x -> new PlayoffsDTO(x)).collect(Collectors.toList());
    }

}