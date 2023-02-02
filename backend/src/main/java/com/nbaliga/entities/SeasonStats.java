package com.nbaliga.entities;

import com.nbaliga.dto.SeasonStatsDTO;
import com.nbaliga.entities.keys.SeasonStatsKey;
import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
@Entity
@IdClass(SeasonStatsKey.class)
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
    @Column(name = "FG_")
    private Double fgPct;
    @Column(name = "3PA")
    private Integer threePa;
    @Column(name = "3PM")
    private Integer threePm;
    @Column(name = "3P_")
    private Double threePct;
    private Integer fta;
    private Integer ftm;
    @Column(name = "FT_")
    private Double ftPct;
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
