package com.nbaliga.services;

import com.nbaliga.dto.PlayerDTO;
import com.nbaliga.dto.PlayerGameStatsDTO;
import com.nbaliga.entities.Player;
import com.nbaliga.entities.PlayerGameStats;
import com.nbaliga.repositories.PlayerGameStatsRepository;
import com.nbaliga.repositories.PlayerRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class PlayerGameStatsService {

    private final PlayerGameStatsRepository playerGameStatsRepository;

    public PlayerGameStatsService(PlayerGameStatsRepository playerGameStatsRepository) {
        this.playerGameStatsRepository = playerGameStatsRepository;
    }

    @Transactional(readOnly = true)
    public List<PlayerGameStatsDTO> findPlayerByTeam(String team, Integer day) {
        List<PlayerGameStats> list = playerGameStatsRepository.findPlayerByTeam(team, day);
        return list.stream().map(gs -> new PlayerGameStatsDTO(gs)).collect(Collectors.toList());
    }

}
