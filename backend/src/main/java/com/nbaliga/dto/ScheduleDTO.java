package com.nbaliga.dto;

import com.nbaliga.entities.Schedule;
import lombok.*;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.io.Serializable;

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
        this.day = entity.getDay();
        this.home = entity.getHome();
        this.away = entity.getAway();
        this.league = entity.getLeague();
        this.type = entity.getType();
        this.homeScore = entity.getHomeScore();
        this.awayScore = entity.getAwayScore();
        this.boxName = entity.getBoxName();
        this.playerOfGameId = entity.getPlayerOfGameId();
        this.playerOfGame = entity.getPlayerOfGame();
        this.homePointsID = entity.getHomePointsID();
        this.homePoints = entity.getHomePoints();
        this.homeRebID = entity.getHomeRebID();
        this.homeRebs = entity.getHomeRebs();
        this.homeAssistID = entity.getHomeAssistID();
        this.homeAssists = entity.getHomeAssists();
        this.awayPointsID = entity.getAwayPointsID();
        this.awayPoints = entity.getAwayPoints();
        this.awayRebID = entity.getAwayRebID();
        this.awayRebs = entity.getAwayRebs();
        this.awayAssistID = entity.getAwayAssistID();
        this.homeQ1 = entity.getHomeQ1();
        this.homeQ2 = entity.getHomeQ2();
        this.homeQ3 = entity.getHomeQ3();
        this.homeQ4 = entity.getHomeQ4();
        this.homeOT = entity.getHomeOT();
        this.awayQ1 = entity.getAwayQ1();
        this.awayQ2 = entity.getAwayQ2();
        this.awayQ3 = entity.getAwayQ3();
        this.awayQ4 = entity.getAwayQ4();
        this.awayOT = entity.getAwayOT();
    }


}
