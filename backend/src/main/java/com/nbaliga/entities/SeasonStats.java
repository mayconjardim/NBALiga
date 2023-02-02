package com.nbaliga.entities;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.io.Serializable;
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
@Entity
public class SeasonStats implements Serializable {

    private Integer season;
    private Long id;
    @Id
    private Integer minutes;
    private Integer league;
    private String team;
    private Integer games;
    private Integer gamesStarted;
    private Double mpg;
    private Integer fga;
    private Integer fgm;
    private Double fg_;
    private Integer _3pa;
    private Integer _3pm;
    private Double _3p_;
    private Integer fta;
    private Integer ftm;
    private Double ft_;
    private Integer offensiveRebounds;
    @Id
    private Integer rebounds;
    private Double rpg;
    @Id
    private Integer assists;
    private Double apg;
    @Id
    private Integer steals;
    private Double spg;
    private Integer blocks;
    private Double bpg;
    private Integer turnovers;
    private Double tpg;
    @Id
    private Integer points;
    private Double ppg;
    private Integer fouls;
    private Integer plusMinus;
    private Integer dq;
    private Integer doubleDoubles;
    private Integer tripleDoubles;

}
