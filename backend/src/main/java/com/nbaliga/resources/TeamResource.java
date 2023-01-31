package com.nbaliga.resources;


import com.nbaliga.dto.TeamDTO;
import com.nbaliga.services.TeamService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(value = "*")
@RestController
@RequestMapping(value = "/teams")

public class TeamResource {
    private final TeamService teamService;

    public TeamResource(TeamService teamService) {
        this.teamService = teamService;
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<TeamDTO> findById(@PathVariable long id) throws Exception {
        TeamDTO dto = teamService.findById(id);
        return ResponseEntity.ok().body(dto);
    }
    @GetMapping
    public ResponseEntity<Page<TeamDTO>> findAll(Pageable pageable) {
        Page<TeamDTO> page = teamService.findAllPaged(pageable);
        return ResponseEntity.ok().body(page);
    }

}
