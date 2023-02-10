package com.nbaliga.resources;

import com.nbaliga.dto.DraftPicksDTO;
import com.nbaliga.services.DraftPicksService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(value = "*")
@RestController
@RequestMapping(value = "/picks")
public class DraftPicksResource {

    private final DraftPicksService draftPicksService;

    public DraftPicksResource(DraftPicksService draftPicksService) {
        this.draftPicksService = draftPicksService;
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<DraftPicksDTO> findById(@PathVariable long id) {
        DraftPicksDTO dto = draftPicksService.findById(id);
        return ResponseEntity.ok().body(dto);
    }

    @GetMapping
    public ResponseEntity<List<DraftPicksDTO>> findAll() {
        List<DraftPicksDTO> picks = draftPicksService.findAll();
        return ResponseEntity.ok().body(picks);
    }
}