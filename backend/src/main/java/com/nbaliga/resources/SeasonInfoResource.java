package com.nbaliga.resources;

import com.nbaliga.dto.SeasonInfoDTO;
import com.nbaliga.services.SeasonInfoService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/seasoninfo")
public class SeasonInfoResource {

    private final SeasonInfoService seasonStatsService;

    public SeasonInfoResource(SeasonInfoService seasonStatsService) {
        this.seasonStatsService = seasonStatsService;
    }

    @GetMapping
    public ResponseEntity<List<SeasonInfoDTO>> findAll() {
        List<SeasonInfoDTO> info = seasonStatsService.findAll();
        return ResponseEntity.ok().body(info);
    }

}