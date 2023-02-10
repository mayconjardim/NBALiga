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

    }


}
