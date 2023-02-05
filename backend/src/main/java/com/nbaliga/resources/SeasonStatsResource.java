package com.nbaliga.resources;

import com.nbaliga.dto.SeasonStatsDTO;
import com.nbaliga.services.SeasonStatsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(value = "*")
@RestController
@RequestMapping(value = "/stats")
public class SeasonStatsResource {

    private final SeasonStatsService seasonStatsService;

    public SeasonStatsResource(SeasonStatsService seasonStatsService) {
        this.seasonStatsService = seasonStatsService;
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<List<SeasonStatsDTO>> findStatsById(@PathVariable Long id) {
        List<SeasonStatsDTO> stats = seasonStatsService.findStatsById(id);
        return ResponseEntity.ok().body(stats);
    }
    @GetMapping(value = "/season/{season}")
    public ResponseEntity<List<SeasonStatsDTO>> findAll(@PathVariable Integer season) {
        List<SeasonStatsDTO> stats = seasonStatsService.findAll(season);
        return ResponseEntity.ok().body(stats);
    }

}