package com.nbaliga.resources;


import com.nbaliga.dto.ScheduleDTO;
import com.nbaliga.services.ScheduleService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/schedules")
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

    @GetMapping(value = "/boxscore/{boxName}")
    public ResponseEntity<ScheduleDTO> findByBoxName(@PathVariable String boxName) throws Exception {
        ScheduleDTO dto = scheduleService.findByBoxName(boxName);
        return ResponseEntity.ok().body(dto);
    }

}