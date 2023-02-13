package com.nbaliga.resources;

import com.nbaliga.dto.PlayoffsDTO;
import com.nbaliga.services.PlayoffsService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/playoffs")
public class PlayoffsResource {

    private final PlayoffsService playoffsStatsService;

    public PlayoffsResource(PlayoffsService playoffsStatsService) {
        this.playoffsStatsService = playoffsStatsService;
    }

    @GetMapping
    public ResponseEntity<List<PlayoffsDTO>> findAll() {
        List<PlayoffsDTO> offs = playoffsStatsService.findAll();
        return ResponseEntity.ok().body(offs);
    }

}