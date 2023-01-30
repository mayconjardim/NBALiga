package com.nbaliga.resources;


import com.nbaliga.dto.PlayerDTO;
import com.nbaliga.services.PlayerService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/players")

public class PlayerResource {
    private final PlayerService PlayerService;

    public PlayerResource(PlayerService PlayerService) {
        this.PlayerService = PlayerService;
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<PlayerDTO> findById(@PathVariable long id) throws Exception {
        PlayerDTO dto = PlayerService.findById(id);
        return ResponseEntity.ok().body(dto);
    }
    @GetMapping
    public ResponseEntity<Page<PlayerDTO>> findAll(Pageable pageable) {
        Page<PlayerDTO> page = PlayerService.findAllPaged(pageable);
        return ResponseEntity.ok().body(page);
    }

}
