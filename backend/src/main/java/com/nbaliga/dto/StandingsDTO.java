package com.nbaliga.dto;

import com.nbaliga.entities.Team;
import lombok.*;

import java.io.Serializable;

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
    public String getTeamName() {
        return cityName + " " + name;
    }

    public Integer getTotalWins() {
        return homeWins + roadWins;
    }

    public Integer getTotalLosses() {
        return homeLosses + roadLosses;
    }

    public Integer getTotalGames() {
        return  homeWins + roadWins + homeLosses + roadLosses;
    }

    public Double getPointsFor() {
        return Math.round((points.doubleValue() / getTotalGames()) * 10.0) / 10.0;
    }

    public Double getPointsAgainst() {
        return Math.round((allowedPoints.doubleValue() / getTotalGames()) * 10.0) / 10.0;
    }

    public Double getPointsDiff() {
        return Math.round((getPointsFor() - getPointsAgainst()) * 10.0) / 10.0;
    }

    public String getGamesBehind() {
        if (confGb > 0) {
            return confGb.toString();
        }
        return "-";

    }
    public String getSTRK() {
        if (streak > 0) {
            return "W" +  streak;
        }
        else if (streak == 0) {
            return "-";
        } else
            return "L" + Math.abs(streak);

    }


}
