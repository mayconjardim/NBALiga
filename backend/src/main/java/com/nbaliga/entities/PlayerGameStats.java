package com.nbaliga.entities;

import com.nbaliga.entities.keys.PlayerGameStatsKey;
import lombok.*;

import javax.persistence.*;
import java.io.Serializable;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
@Entity
@IdClass(PlayerGameStatsKey.class)
public class PlayerGameStats implements Serializable {

    @Id
    private Long id;
    @Id
    private Integer seasonDay;
    private Integer league;
    @Id
    private String team;
    private Integer opponent;
    private Integer minutes;
    private Integer fgm;
    private Integer fga;
    private Integer ftm;
    private Integer fta;
    @Column(name = "3PM")
    private Integer threePm;
    @Column(name = "3PA")
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

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id", insertable = false, updatable = false)
    private Player player;

}
