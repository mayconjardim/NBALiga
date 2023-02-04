package com.nbaliga.services;

import com.nbaliga.dto.SeasonInfoDTO;
import com.nbaliga.entities.SeasonInfo;
import com.nbaliga.repositories.SeasonInfoRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class SeasonInfoService {

    private final SeasonInfoRepository seasonStatsRepository;

    public SeasonInfoService(SeasonInfoRepository seasonStatsRepository) {
        this.seasonStatsRepository = seasonStatsRepository;
    }

    @Transactional(readOnly = true)
    public List<SeasonInfoDTO> findAll() {
        List<SeasonInfo> stats = seasonStatsRepository.findAll();
        return stats.stream().map(x -> new SeasonInfoDTO(x)).collect(Collectors.toList());
    }

}
