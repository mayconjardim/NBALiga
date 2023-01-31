package com.nbaliga.resources;


import com.nbaliga.dto.ChampsDTO;
import com.nbaliga.services.ChampsService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(value = "*")
@RestController
@RequestMapping(value = "/champs")

public class ChampsResource {
    private final ChampsService champsService;

    public ChampsResource(ChampsService champsService) {
        this.champsService = champsService;
    }

    @GetMapping
    public ResponseEntity<List<ChampsDTO>> findAllChamps() {
        List<ChampsDTO> list = champsService.findAllChamps();
        return ResponseEntity.ok().body(list);
    }

}
