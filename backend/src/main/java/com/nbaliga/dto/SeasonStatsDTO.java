package com.nbaliga.dto;

import com.nbaliga.entities.Player;
import com.nbaliga.entities.SeasonStats;
import com.nbaliga.entities.keys.SeasonStatsKey;
import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import java.io.Serializable;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
public class SeasonStatsDTO implements Serializable {

    private Integer season;
    private Long id;
    private Integer minutes;
    private Integer league;
    private String team;
    private Integer games;
    private Integer gamesStarted;
    private Double mpg;
    private Integer fga;
    private Integer fgm;
    private Double fgPct;
    private Integer threePa;
    private Integer threePm;
    private Double threePct;
    private Integer fta;
    private Integer ftm;
    private Double ftPct;
    private Integer offensiveRebounds;
    private Integer rebounds;
    private Double rpg;
    private Integer assists;
    private Double apg;
    private Integer steals;
    private Double spg;
    private Integer blocks;
    private Double bpg;
    private Integer turnovers;
    private Double tpg;
    private Integer points;
    private Double ppg;
    private Integer fouls;
    private Integer plusMinus;
    private Integer dq;
    private Integer doubleDoubles;
    private Integer tripleDoubles;
    private String playerName;
    private Integer playerPosition;

    public SeasonStatsDTO(SeasonStats entity) {
        id = entity.getId();
        season = entity.getSeason();
        league = entity.getLeague();
        team = entity.getTeam();
        games = entity.getGames();
        gamesStarted = entity.getGamesStarted();
        minutes = entity.getMinutes();
        mpg = entity.getMpg();
        fga = entity.getFga();
        fgm = entity.getFgm();
        fgPct = entity.getFgPct();
        threePa = entity.getThreePa();
        threePm = entity.getThreePm();
        threePct = entity.getThreePct();
        fta = entity.getFta();
        ftm = entity.getFtm();
        ftPct = entity.getFtPct();
        offensiveRebounds = entity.getOffensiveRebounds();
        rebounds = entity.getRebounds();
        rpg = entity.getRpg();
        assists = entity.getAssists();
        apg = entity.getApg();
        steals = entity.getSteals();
        spg = entity.getSpg();
        blocks = entity.getBlocks();
        bpg = entity.getBpg();
        turnovers = entity.getTurnovers();
        tpg = entity.getTpg();
        points = entity.getPoints();
        ppg = entity.getPpg();
        fouls = entity.getFouls();
        plusMinus = entity.getPlusMinus();
        dq = entity.getDq();
        doubleDoubles = entity.getDoubleDoubles();
        tripleDoubles = entity.getTripleDoubles();
        playerName = entity.getPlayer().getName();
        playerPosition = entity.getPlayer().getPositionNumber();
    }


    public Double getFGAPg() {
        return fga.doubleValue() / games;
    }

    public Double getFGMPg() {
        return fgm.doubleValue() / games;
    }

    public Double getThreePAPg() {
        return threePa.doubleValue() / games;
    }

    public Double getThreePMPg() {
        return threePm.doubleValue() / games;
    }

    public Double getFTAPg() {
        return fta.doubleValue() / games;
    }

    public Double getFTMPg() {
        return ftm.doubleValue() / games;
    }

    public Double getORebsPg() {
        return offensiveRebounds.doubleValue() / games;
    }

    public Double getDRebsPg() {
        return (rebounds.doubleValue() - offensiveRebounds) / games;
    }

    public Double getPFouPg() {
        return fouls.doubleValue() / games;
    }

    public Double getTOPg() {
        return turnovers.doubleValue() / games;
    }

    public Double getPlusMinusPg() {
        return turnovers.doubleValue() / games;
    }


}
