package com.nbaliga.services;

import com.nbaliga.dto.AwardsDTO;
import com.nbaliga.entities.PlayerAwards;
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
        List<PlayerAwards> stats = awardsRepository.findByPlayerId(id);
        return stats.stream().map(x -> new AwardsDTO(x)).collect(Collectors.toList());
    }
    
    @Transactional(readOnly = true)
    public List<AwardsDTO> findAllAwards() {
        List<PlayerAwards> list = awardsRepository.findAll();
        return list.stream().map(playerAwards -> new AwardsDTO(playerAwards)).collect(Collectors.toList());
    }
}
