package com.nbaliga.resources;


import com.nbaliga.dto.PlayerAwardsDTO;
import com.nbaliga.services.AwardsService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(value = "*")
@RestController
@RequestMapping(value = "/awards")

public class AwardsResource {

    private final AwardsService awardsService;

    public AwardsResource(AwardsService awardsService) {
        this.awardsService = awardsService;
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<List<PlayerAwardsDTO>> findStatsById(@PathVariable Long id) {
        List<PlayerAwardsDTO> stats = awardsService.findAwardsById(id);
        return ResponseEntity.ok().body(stats);
    }
    @GetMapping
    public ResponseEntity<List<PlayerAwardsDTO>> findAllAwards() {
        List<PlayerAwardsDTO> list = awardsService.findAllAwards();
        return ResponseEntity.ok().body(list);
    }

}
