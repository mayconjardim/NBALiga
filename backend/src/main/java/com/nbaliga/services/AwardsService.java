package com.nbaliga.services;

import com.nbaliga.dto.PlayerAwardsDTO;
import com.nbaliga.entities.PlayerAwards;
import com.nbaliga.repositories.PlayerAwardsRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class AwardsService {

    private final PlayerAwardsRepository playerAwardsRepository;

    public AwardsService(PlayerAwardsRepository playerAwardsRepository) {
        this.playerAwardsRepository = playerAwardsRepository;
    }

    @Transactional(readOnly = true)
    public List<PlayerAwardsDTO> findAwardsById(Long id) {
        List<PlayerAwards> stats = playerAwardsRepository.findByPlayerId(id);
        return stats.stream().map(x -> new PlayerAwardsDTO(x)).collect(Collectors.toList());
    }
    
    @Transactional(readOnly = true)
    public List<PlayerAwardsDTO> findAllAwards() {
        List<PlayerAwards> list = playerAwardsRepository.findAll();
        return list.stream().map(playerAwards -> new PlayerAwardsDTO(playerAwards)).collect(Collectors.toList());
    }
}
