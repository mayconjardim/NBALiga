package com.nbaliga.dto;

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

    public SeasonStatsDTO(SeasonStats entity) {
        this.id = entity.getId();
        this.season = entity.getSeason();
        this.league = entity.getLeague();
        this.team = entity.getTeam();
        this.games = entity.getGames();
        this.gamesStarted = entity.getGamesStarted();
        this.minutes = entity.getMinutes();
        this.mpg = entity.getMpg();
        this.fga = entity.getFga();
        this.fgm = entity.getFgm();
        this.fgPct = entity.getFgPct();
        this.threePa = entity.getThreePa();
        this.threePm = entity.getThreePm();
        this.threePct = entity.getThreePct();
        this.fta = entity.getFta();
        this.ftm = entity.getFtm();
        this.ftPct = entity.getFtPct();
        this.offensiveRebounds = entity.getOffensiveRebounds();
        this.rebounds = entity.getRebounds();
        this.rpg = entity.getRpg();
        this.assists = entity.getAssists();
        this.apg = entity.getApg();
        this.steals = entity.getSteals();
        this.spg = entity.getSpg();
        this.blocks = entity.getBlocks();
        this.bpg = entity.getBpg();
        this.turnovers = entity.getTurnovers();
        this.tpg = entity.getTpg();
        this.points = entity.getPoints();
        this.ppg = entity.getPpg();
        this.fouls = entity.getFouls();
        this.plusMinus = entity.getPlusMinus();
        this.dq = entity.getDq();
        this.doubleDoubles = entity.getDoubleDoubles();
        this.tripleDoubles = entity.getTripleDoubles();
    }


}
