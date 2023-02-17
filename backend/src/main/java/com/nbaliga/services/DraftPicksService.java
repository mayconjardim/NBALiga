package com.nbaliga.services;

import com.nbaliga.dto.DraftPicksDTO;
import com.nbaliga.entities.DraftPicks;
import com.nbaliga.repositories.DraftPicksRepository;
import com.nbaliga.services.exceptions.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class DraftPicksService {

    private final DraftPicksRepository draftPicksRepository;

    public DraftPicksService(DraftPicksRepository draftPicksRepository) {
        this.draftPicksRepository = draftPicksRepository;
    }

    @Transactional(readOnly = true)
    public DraftPicksDTO findById(Long id) {
        Optional<DraftPicks> obj = draftPicksRepository.findById(id);
        DraftPicks entity = null;
        try {
            entity = obj.orElseThrow( () -> new ResourceNotFoundException("Time não encontrado!") );
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        return new DraftPicksDTO(entity);
    }

    @Transactional(readOnly = true)
    public List<DraftPicksDTO> findAll( ) {
        List<DraftPicks> teams = draftPicksRepository.findAll();
        return teams.stream().map(x -> new DraftPicksDTO(x)).collect(Collectors.toList());
    }

}