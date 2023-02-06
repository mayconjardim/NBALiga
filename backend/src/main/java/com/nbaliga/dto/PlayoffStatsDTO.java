package com.nbaliga.dto;

import com.nbaliga.entities.PlayoffStats;
import lombok.*;

import java.io.Serializable;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
public class PlayoffStatsDTO implements Serializable {

    private Integer season;
    private Long id;
    private Integer minutes;
    private Integer league;
    private String team;
    private Integer games;
    private Integer fga;
    private Integer fgm;
    private Integer threePa;
    private Integer threePm;
    private Integer fta;
    private Integer ftm;
    private Integer offensiveRebounds;
    private Integer rebounds;
    private Integer assists;
    private Integer steals;
    private Integer blocks;
    private Integer turnovers;
    private Integer points;
    private Integer fouls;
    private Integer plusMinus;
    private Integer dq;
    private Integer doubleDoubles;
    private Integer tripleDoubles;

    public PlayoffStatsDTO(PlayoffStats entity) {
        this.id = entity.getId();
        this.season = entity.getSeason();
        this.league = entity.getLeague();
        this.team = entity.getTeam();
        this.games = entity.getGames();
        this.minutes = entity.getMinutes();
        this.fga = entity.getFga();
        this.fgm = entity.getFgm();
        this.threePa = entity.getThreePa();
        this.threePm = entity.getThreePm();
        this.fta = entity.getFta();
        this.ftm = entity.getFtm();
        this.offensiveRebounds = entity.getOffensiveRebounds();
        this.rebounds = entity.getRebounds();
        this.assists = entity.getAssists();
        this.steals = entity.getSteals();
        this.blocks = entity.getBlocks();
        this.turnovers = entity.getTurnovers();
        this.points = entity.getPoints();
        this.fouls = entity.getFouls();
        this.plusMinus = entity.getPlusMinus();
        this.dq = entity.getDq();
        this.doubleDoubles = entity.getDoubleDoubles();
        this.tripleDoubles = entity.getTripleDoubles();
    }

    public Double getPpg() {
        return points.doubleValue() / games;
    }

    public Double getApg() {
        return assists.doubleValue() / games;
    }

    public Double getRpg() {
        return rebounds.doubleValue() / games;
    }

    public Double getORpg() {
        return offensiveRebounds.doubleValue() / games;
    }

    public Double getDRpg() {
        return (rebounds - offensiveRebounds.doubleValue()) / games;
    }


    public Double getSpg() {
        return steals.doubleValue() / games;
    }

    public Double getBpg() {
        return blocks.doubleValue() / games;
    }

    public Double getFgPct() {
        return (fgm.doubleValue() / fga);
    }

    public Double getThreePct() {
        return (threePm.doubleValue() / threePa);
    }

    public Double getFTPct() {
        return (ftm.doubleValue() / fta);
    }

    public Double getMpg() {
        return (minutes.doubleValue() / games);
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
