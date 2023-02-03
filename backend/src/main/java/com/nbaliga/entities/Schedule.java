package com.nbaliga.entities;

import com.nbaliga.entities.keys.ScheduleKey;
import lombok.*;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import java.io.Serializable;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
@Entity
@IdClass(ScheduleKey.class)
public class Schedule implements Serializable {

    @Id
    private Integer day;
    @Id
    private String home;
    @Id
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

}
