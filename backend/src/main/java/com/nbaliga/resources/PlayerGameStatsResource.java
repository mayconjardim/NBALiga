package com.nbaliga.resources;

import com.nbaliga.dto.PlayerDTO;
import com.nbaliga.dto.PlayerGameStatsDTO;
import com.nbaliga.services.PlayerGameStatsService;
import com.nbaliga.services.PlayerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(value = "*")
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
