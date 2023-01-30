package com.nbaliga.services;

import com.nbaliga.dto.TeamDTO;
import com.nbaliga.entities.Team;
import com.nbaliga.repositories.TeamRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
public class TeamService {

    private final TeamRepository teamRepository;

    public TeamService(TeamRepository teamRepository) {
        this.teamRepository = teamRepository;
    }

    @Transactional(readOnly = true)
    public TeamDTO findById(Long id) throws Exception {
        Optional<Team> obj = teamRepository.findById(id);
        Team entity = obj.orElseThrow(() -> new Exception("Time não encontrado"));
        return new TeamDTO(entity, entity.getPlayers());
    }

    @Transactional(readOnly = true)
    public Page<TeamDTO> findAllPaged(Pageable pageable) {
        Page<Team> page = teamRepository.findAll(pageable);
        return page.map(team -> new TeamDTO(team));
    }
}
