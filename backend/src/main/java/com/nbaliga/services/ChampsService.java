package com.nbaliga.services;

import com.nbaliga.dto.ChampsDTO;
import com.nbaliga.entities.Champs;
import com.nbaliga.entities.Team;
import com.nbaliga.repositories.ChampsRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ChampsService {

    private final ChampsRepository champsRepository;

    public ChampsService(ChampsRepository champsRepository) {
        this.champsRepository = champsRepository;
    }

    @Transactional(readOnly = true)
    public List<ChampsDTO> findAllChamps() {
        List<Champs> list = champsRepository.findAll();
        return list.stream().map(champs -> new ChampsDTO(champs)).collect(Collectors.toList());
    }
}
