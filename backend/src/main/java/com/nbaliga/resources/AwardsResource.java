package com.nbaliga.resources;


import com.nbaliga.dto.AwardsDTO;
import com.nbaliga.services.AwardsService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(value = "*")
@RestController
@RequestMapping(value = "/awards")

public class AwardsResource {

    private final AwardsService awardsService;

    public AwardsResource(AwardsService awardsService) {
        this.awardsService = awardsService;
    }

    @GetMapping
    public ResponseEntity<List<AwardsDTO>> findAllAwards() {
        List<AwardsDTO> list = awardsService.findAllAwards();
        return ResponseEntity.ok().body(list);
    }

}
