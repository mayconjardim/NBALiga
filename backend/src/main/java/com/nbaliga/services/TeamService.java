package com.nbaliga.services;

import com.nbaliga.dto.TeamDTO;
import com.nbaliga.dto.TeamRankingsDTO;
import com.nbaliga.entities.Team;
import com.nbaliga.repositories.TeamRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

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
        return new TeamDTO(entity, entity.getPlayers(), entity.getPicks());
    }

    @Transactional(readOnly = true)
    public Page<TeamDTO> findAllPaged(Pageable pageable) {
        Page<Team> page = teamRepository.findAll(pageable);
        return page.map(team -> new TeamDTO(team));
    }

    @Transactional(readOnly = true)
    public List<TeamRankingsDTO> findRanking() {
        List<Team> list = teamRepository.listAll();
        return list.stream().map(team -> new TeamRankingsDTO(team)).collect(Collectors.toList());
    }
}
