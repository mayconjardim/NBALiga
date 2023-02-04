package com.nbaliga.dto;

import com.nbaliga.entities.Team;
import lombok.*;

import java.io.Serializable;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
public class TeamRankingsDTO implements Serializable {

    private Long id;
    private Integer league;
    private String cityName;
    private String name;
    private String city;
    private Integer homeWins;
    private Integer homeLosses;
    private Integer roadWins;
    private Integer roadLosses;
    private Integer points;
    private Integer allowedPoints;
    private Integer rebounds;
    private Integer assists;

    public TeamRankingsDTO(Team entity) {
        id = entity.getId();
        cityName = entity.getCityName();
        name = entity.getName();
        city = entity.getCity();
        homeWins = entity.getHomeWins();
        homeLosses = entity.getHomeLosses();
        roadWins = entity.getRoadWins();
        roadLosses = entity.getRoadLosses();
        points = entity.getPoints();
        allowedPoints = entity.getAllowedPoints();
        rebounds = entity.getRebounds();
        assists = entity.getAssists();
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


    public Double getRpg() {
        if (rebounds > 0) {
            return Math.round((rebounds.doubleValue() / getTotalGames().doubleValue()) * 10.0) / 10.0 ;
        } else {
            return 0.0;
        }
    }

    public Double getApg() {
        if (assists > 0) {
            return Math.round((assists.doubleValue() / getTotalGames()) * 10.0) / 10.0;
        } else {
            return 0.0;
        }
    }

}
