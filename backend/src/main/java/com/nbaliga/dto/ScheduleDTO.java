package com.nbaliga.dto;

import com.nbaliga.entities.PlayerGameStats;
import com.nbaliga.entities.Schedule;
import lombok.*;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
public class ScheduleDTO implements Serializable {

    private Integer day;
    private String home;
    private String away;
    private Integer league;
    private Integer type;
    private Integer homeScore;
    private Integer awayScore;
    private String boxName;
    private Integer playerOfGameId;
    private String playerOfGame;
    private Integer homePointsID;
    private Integer homePoints;
    private Integer homeRebID;
    private Integer homeRebs;
    private Integer homeAssistID;
    private Integer homeAssists;
    private Integer awayPointsID;
    private Integer awayPoints;
    private Integer awayRebID;
    private Integer awayRebs;
    private Integer awayAssistID;
    private Integer homeQ1;
    private Integer homeQ2;
    private Integer homeQ3;
    private Integer homeQ4;
    private Integer homeOT;
    private Integer awayQ1;
    private Integer awayQ2;
    private Integer awayQ3;
    private Integer awayQ4;
    private Integer awayOT;


    public ScheduleDTO(Schedule entity) {
        super();
        day = entity.getDay();
        home = entity.getHome();
        away = entity.getAway();
        league = entity.getLeague();
        type = entity.getType();
        homeScore = entity.getHomeScore();
        awayScore = entity.getAwayScore();
        boxName = entity.getBoxName();
        playerOfGameId = entity.getPlayerOfGameId();
        playerOfGame = entity.getPlayerOfGame();
        homePointsID = entity.getHomePointsID();
        homePoints = entity.getHomePoints();
        homeRebID = entity.getHomeRebID();
        homeRebs = entity.getHomeRebs();
        homeAssistID = entity.getHomeAssistID();
        homeAssists = entity.getHomeAssists();
        awayPointsID = entity.getAwayPointsID();
        awayPoints = entity.getAwayPoints();
        awayRebID = entity.getAwayRebID();
        awayRebs = entity.getAwayRebs();
        awayAssistID = entity.getAwayAssistID();
        homeQ1 = entity.getHomeQ1();
        homeQ2 = entity.getHomeQ2();
        homeQ3 = entity.getHomeQ3();
        homeQ4 = entity.getHomeQ4();
        homeOT = entity.getHomeOT();
        awayQ1 = entity.getAwayQ1();
        awayQ2 = entity.getAwayQ2();
        awayQ3 = entity.getAwayQ3();
        awayQ4 = entity.getAwayQ4();
        awayOT = entity.getAwayOT();
    }




}
