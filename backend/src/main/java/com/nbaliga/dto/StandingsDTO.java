package com.nbaliga.dto;

import com.nbaliga.entities.Player;
import com.nbaliga.entities.Team;
import lombok.*;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
public class StandingsDTO implements Serializable {

    private Long id;
    private String cityName;
    private String name;
    private String conference;
    private Integer streak;
    private Integer homeWins;
    private Integer homeLosses;
    private Integer roadWins;
    private Integer roadLosses;
    private Double winPct;
    private Integer points;
    private Integer allowedPoints;
    private Boolean isHuman;
    private Double confGb;

    public StandingsDTO(Team entity) {
        id = entity.getId();
        cityName = entity.getCityName();
        name = entity.getName();
        conference = entity.getConference();
        streak = entity.getStreak();
        homeWins = entity.getHomeWins();
        homeLosses = entity.getHomeLosses();
        roadWins = entity.getRoadWins();
        roadLosses = entity.getRoadLosses();
        winPct = entity.getWinPct();
        points = entity.getPoints();
        allowedPoints = entity.getAllowedPoints();
        isHuman = entity.getIsHuman();
        confGb = entity.getConfGb();
    }

}
