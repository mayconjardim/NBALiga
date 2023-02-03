package com.nbaliga.resources;


import com.nbaliga.dto.ScheduleDTO;
import com.nbaliga.services.ScheduleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/schedule")
public class ScheduleResource {

    private final ScheduleService scheduleService;

    public ScheduleResource(ScheduleService scheduleService) {
        this.scheduleService = scheduleService;
    }

    @GetMapping
    public ResponseEntity<List<ScheduleDTO>> findAll() {
        List<ScheduleDTO> schedule = scheduleService.findAll();
        return ResponseEntity.ok().body(schedule);
    }

    @GetMapping(value = "/{team}")
    public ResponseEntity<List<ScheduleDTO>> findSchedulesByTeam(@PathVariable String team) {
        List<ScheduleDTO> schedule = scheduleService.findSchedulesByTeam(team);
        return ResponseEntity.ok().body(schedule);
    }





}