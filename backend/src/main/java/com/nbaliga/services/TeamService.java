package com.nbaliga.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.nbaliga.dto.TeamDTO;
import com.nbaliga.entities.Team;
import com.nbaliga.repositories.TeamRepository;

@Service
public class TeamService {

    @Autowired
    private TeamRepository teamRepository;


    @Transactional(readOnly = true)
    public TeamDTO findById(Long id) throws Exception {
        Optional<Team> obj = teamRepository.findById(id);
        Team entity = obj.orElseThrow(() -> new Exception("Time não encontrado"));
        return new TeamDTO(entity);
    }
    @Transactional(readOnly = true)
    public Page<TeamDTO> findAllPaged(Pageable pageable) {
        Page<Team> page = teamRepository.findAll(pageable);
        return page.map(team -> new TeamDTO(team));
    }
}
