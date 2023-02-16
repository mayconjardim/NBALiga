package com.nbaliga.resources;

import com.nbaliga.dto.PlayoffStatsDTO;
import com.nbaliga.services.PlayoffStatsService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping(value = "/playoffstats")
public class PlayoffStatsResource {

    private final PlayoffStatsService PlayoffStatsService;

    public PlayoffStatsResource(PlayoffStatsService PlayoffStatsService) {
        this.PlayoffStatsService = PlayoffStatsService;
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<List<PlayoffStatsDTO>> findStatsById(@PathVariable Long id) {
        List<PlayoffStatsDTO> stats = PlayoffStatsService.findStatsById(id);
        return ResponseEntity.ok().body(stats);
    }
    @GetMapping(value = "/season/{season}")
    public ResponseEntity<List<PlayoffStatsDTO>> findAll(@PathVariable Integer season) {
        List<PlayoffStatsDTO> stats = PlayoffStatsService.findAll(season);
        return ResponseEntity.ok().body(stats);
    }

}