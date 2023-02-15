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

    List<PlayerGameStatsDTO> playerGameStats = new ArrayList<>();

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
    }

    public ScheduleDTO(Schedule entity, List<PlayerGameStats> playerGameStats) {
        this(entity);
        playerGameStats.forEach(gs -> this.playerGameStats.add(new PlayerGameStatsDTO(gs)));
    }

}
