package com.nbaliga.resources;


import com.nbaliga.dto.StandingsDTO;
import com.nbaliga.services.StandingsService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/standings")

public class StandingsResource {
    private final StandingsService standingsService;

    public StandingsResource(StandingsService standingsService) {
        this.standingsService = standingsService;
    }

    @GetMapping
    public ResponseEntity<List<StandingsDTO>> findAllStandings() {
        List<StandingsDTO> list = standingsService.findAllStandings();
        return ResponseEntity.ok().body(list);
    }

}
