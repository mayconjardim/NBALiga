package com.nbaliga.resources;

import com.nbaliga.dto.PlayerGameStatsDTO;
import com.nbaliga.services.PlayerGameStatsService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@RequestMapping(value = "/playergamestats")
public class PlayerGameStatsResource {

   private final PlayerGameStatsService playerGameStatsService;

    public PlayerGameStatsResource(PlayerGameStatsService playerGameStatsService) {
        this.playerGameStatsService = playerGameStatsService;
    }

    @GetMapping
    public ResponseEntity<List<PlayerGameStatsDTO>> findPlayerByHomeTeam(String team, Integer day) {
        List<PlayerGameStatsDTO> list = playerGameStatsService.findPlayerByTeam(team, day);
        return ResponseEntity.ok().body(list);
    }

}
