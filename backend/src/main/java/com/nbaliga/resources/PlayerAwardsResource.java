package com.nbaliga.resources;


import com.nbaliga.dto.PlayerAwardsDTO;
import com.nbaliga.services.PlayerAwardsService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping(value = "/awards")

public class PlayerAwardsResource {

    private final PlayerAwardsService playerAwardsService;

    public PlayerAwardsResource(PlayerAwardsService playerAwardsService) {
        this.playerAwardsService = playerAwardsService;
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<List<PlayerAwardsDTO>> findAwardsById(@PathVariable Long id) {
        List<PlayerAwardsDTO> stats = playerAwardsService.findAwardsById(id);
        return ResponseEntity.ok().body(stats);
    }
    @GetMapping
    public ResponseEntity<List<PlayerAwardsDTO>> findAllAwards() {
        List<PlayerAwardsDTO> list = playerAwardsService.findAllAwards();
        return ResponseEntity.ok().body(list);
    }

}
