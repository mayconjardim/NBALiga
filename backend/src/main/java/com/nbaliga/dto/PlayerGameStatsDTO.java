package com.nbaliga.dto;

import com.nbaliga.entities.PlayerGameStats;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Id;
import java.io.Serializable;

@Getter
@Setter
@EqualsAndHashCode
public class PlayerGameStatsDTO implements Serializable {

    @Id
    private Long id;
    private Integer seasonDay;
    private Integer league;
    private String team;
    private String opponent;
    private Integer minutes;
    private Integer fgm;
    private Integer fga;
    private Integer ftm;
    private Integer fta;
    private Integer threePm;
    private Integer threePa;
    private Integer offensiveRebounds;
    private Integer rebounds;
    private Integer assists;
    private Integer steals;
    private Integer blocks;
    private Integer turnovers;
    private Integer points;
    private Integer fouls;
    private Integer plusMinus;
    private Integer position;
    private Integer starter;

    public PlayerGameStatsDTO(PlayerGameStats entity) {
        id = entity.getId();
        seasonDay = entity.getSeasonDay();
        league = entity.getLeague();
        team = entity.getTeam();
        opponent = entity.getOpponent();
        minutes = entity.getMinutes();
        fgm = entity.getFgm();
        fga = entity.getFga();
        ftm = entity.getFtm();
        fta = entity.getFta();
        threePm = entity.getThreePm();
        threePa = entity.getThreePa();
        offensiveRebounds = entity.getOffensiveRebounds();
        rebounds = entity.getRebounds();
        assists = entity.getAssists();
        steals = entity.getSteals();
        blocks = entity.getBlocks();
        turnovers = entity.getTurnovers();
        points = entity.getPoints();
        fouls = entity.getFouls();
        plusMinus = entity.getPlusMinus();
        position = entity.getPosition();
        starter = entity.getStarter();
    }



}
