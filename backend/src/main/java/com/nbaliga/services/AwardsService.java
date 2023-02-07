package com.nbaliga.services;

import com.nbaliga.dto.AwardsDTO;
import com.nbaliga.dto.AwardsDTO;
import com.nbaliga.entities.Awards;
import com.nbaliga.entities.Awards;
import com.nbaliga.repositories.AwardsRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class AwardsService {

    private final AwardsRepository awardsRepository;

    public AwardsService(AwardsRepository awardsRepository) {
        this.awardsRepository = awardsRepository;
    }

    @Transactional(readOnly = true)
    public List<AwardsDTO> findAwardsById(Long id) {
        List<Awards> stats = awardsRepository.findByPlayerId(id);
        return stats.stream().map(x -> new AwardsDTO(x)).collect(Collectors.toList());
    }
    
    @Transactional(readOnly = true)
    public List<AwardsDTO> findAllAwards() {
        List<Awards> list = awardsRepository.findAll();
        return list.stream().map(awards -> new AwardsDTO(awards)).collect(Collectors.toList());
    }
}
