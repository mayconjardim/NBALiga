package com.nbaliga.resources;


import com.nbaliga.dto.ScheduleDTO;
import com.nbaliga.services.ScheduleService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(value = "*")
@RestController
@RequestMapping(value = "/schedules")
public class ScheduleResource {

    private final ScheduleService scheduleService;

    public ScheduleResource(ScheduleService scheduleService) {
        this.scheduleService = scheduleService;
    }

    @GetMapping
    public ResponseEntity<Page<ScheduleDTO>> findAll(Pageable pageable) {
        Page<ScheduleDTO> schedule = scheduleService.findAll(pageable);
        return ResponseEntity.ok().body(schedule);
    }

    @GetMapping(value = "/{team}")
    public ResponseEntity<List<ScheduleDTO>> findSchedulesByTeam(@PathVariable String team) {
        List<ScheduleDTO> schedule = scheduleService.findSchedulesByTeam(team);
        return ResponseEntity.ok().body(schedule);
    }





}