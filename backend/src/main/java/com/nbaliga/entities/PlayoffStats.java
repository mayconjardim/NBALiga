package com.nbaliga.entities;

import lombok.*;

import javax.persistence.*;
import java.io.Serializable;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
@Entity
@IdClass(PlayoffStats.class)
public class PlayoffStats implements Serializable {

    private Integer season;
    private Long id;
    @Id
    private Integer minutes;
    private Integer league;
    private String team;
    private Integer games;
    private Integer fga;
    private Integer fgm;
    @Column(name = "3PA")
    private Integer threePa;
    @Column(name = "3PM")
    private Integer threePm;
    private Integer fta;
    private Integer ftm;
    private Integer offensiveRebounds;
    @Id
    private Integer rebounds;
    @Id
    private Integer assists;
    @Id
    private Integer steals;
    private Integer blocks;
    private Integer turnovers;
    @Id
    private Integer points;
    private Integer fouls;
    private Integer plusMinus;
    private Integer dq;
    private Integer doubleDoubles;
    private Integer tripleDoubles;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id", insertable = false, updatable = false)
    private Player player;

}
