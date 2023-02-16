package com.nbaliga.resources;

import com.nbaliga.dto.DraftPicksDTO;
import com.nbaliga.services.DraftPicksService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

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