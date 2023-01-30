package com.nbaliga.services;

import com.nbaliga.dto.PlayerDTO;
import com.nbaliga.entities.Player;
import com.nbaliga.repositories.PlayerRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
public class PlayerService {

    private final PlayerRepository PlayerRepository;

    public PlayerService(PlayerRepository PlayerRepository) {
        this.PlayerRepository = PlayerRepository;
    }

    @Transactional(readOnly = true)
    public PlayerDTO findById(Long id) throws Exception {
        Optional<Player> obj = PlayerRepository.findById(id);
        Player entity = obj.orElseThrow(() -> new Exception("Jogador não encontrado!"));
        return new PlayerDTO(entity);
    }

    @Transactional(readOnly = true)
    public Page<PlayerDTO> findAllPaged(Pageable pageable) {
        Page<Player> page = PlayerRepository.findAll(pageable);
        return page.map(Player -> new PlayerDTO(Player));
    }
}
