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
    private String playerName;
    private Integer playerPosition;

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
        this.playerName = entity.getPlayer().getName();
        this.playerPosition = entity.getPlayer().getPositionNumber();
    }

    public Double getPpg() {
        if (Double.isNaN(points.doubleValue() / games)) {
            return 0.0;
        }
        return points.doubleValue() / games;
    }

    public Double getApg() {
        if (Double.isNaN(assists.doubleValue() / games)) {
            return 0.0;
        }
        return assists.doubleValue() / games;
    }

    public Double getRpg() {
        if (Double.isNaN(rebounds.doubleValue() / games)) {
            return 0.0;
        }
        return rebounds.doubleValue() / games;
    }

    public Double getORpg() {
        if (Double.isNaN(offensiveRebounds.doubleValue() / games)) {
            return 0.0;
        }
        return offensiveRebounds.doubleValue() / games;
    }

    public Double getDRpg() {
        if (Double.isNaN(rebounds - offensiveRebounds.doubleValue() / games)) {
            return 0.0;
        }
        return (rebounds - offensiveRebounds.doubleValue()) / games;
    }


    public Double getSpg() {
        if (Double.isNaN(steals.doubleValue() / games)) {
            return 0.0;
        }
        return steals.doubleValue() / games;
    }

    public Double getBpg() {
        if (Double.isNaN(blocks.doubleValue() / games)) {
            return 0.0;
        }
        return blocks.doubleValue() / games;
    }

    public Double getFgPct() {
        if (Double.isNaN(fgm.doubleValue() / fga)) {
            return 0.0;
        }
        return (fgm.doubleValue() / fga);
    }

    public Double getThreePct() {
        if (Double.isNaN(threePm.doubleValue() / threePa)) {
            return 0.0;
        }
        return threePm.doubleValue() / threePa;
    }

    public Double getFTPct() {
        if (Double.isNaN(ftm.doubleValue() / fta)) {
            return 0.0;
        }
        return (ftm.doubleValue() / fta);
    }

    public Double getMpg() {
        if (Double.isNaN(minutes.doubleValue() / games)) {
            return 0.0;
        }
        return (minutes.doubleValue() / games);
    }

    public Double getFGAPg() {
        if (Double.isNaN(fga.doubleValue() / games)) {
            return 0.0;
        }
        return fga.doubleValue() / games;
    }

    public Double getFGMPg() {
        if (Double.isNaN(fgm.doubleValue() / games)) {
            return 0.0;
        }
        return fgm.doubleValue() / games;
    }

    public Double getThreePAPg() {
        if (Double.isNaN(threePa.doubleValue() / games)) {
            return 0.0;
        }
        return threePa.doubleValue() / games;
    }

    public Double getThreePMPg() {
        if (Double.isNaN(threePm.doubleValue() / games)) {
            return 0.0;
        }
        return threePm.doubleValue() / games;
    }

    public Double getFTAPg() {
        if (Double.isNaN(fta.doubleValue() / games)) {
            return 0.0;
        }
        return fta.doubleValue() / games;
    }

    public Double getFTMPg() {
        if (Double.isNaN(ftm.doubleValue() / games)) {
            return 0.0;
        }
        return ftm.doubleValue() / games;
    }

    public Double getORebsPg() {
        if (Double.isNaN(offensiveRebounds.doubleValue() / games)) {
            return 0.0;
        }
        return offensiveRebounds.doubleValue() / games;
    }

    public Double getDRebsPg() {
        if (Double.isNaN(rebounds.doubleValue() - offensiveRebounds / games)) {
            return 0.0;
        }
        return (rebounds.doubleValue() - offensiveRebounds) / games;
    }

    public Double getPFouPg() {
        if (Double.isNaN( fouls.doubleValue() / games)) {
            return 0.0;
        }
        return fouls.doubleValue() / games;
    }

    public Double getTOPg() {
        if (Double.isNaN( turnovers.doubleValue()  / games)) {
            return 0.0;
        }
        return turnovers.doubleValue() / games;
    }

    public Double getPlusMinusPg() {
        if (Double.isNaN( plusMinus.doubleValue()  / games)) {
            return 0.0;
        }
        return plusMinus.doubleValue() / games;
    }



}
