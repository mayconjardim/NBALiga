package com.nbaliga.entities;

import com.nbaliga.entities.keys.ScheduleKey;
import lombok.*;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Set;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
@Entity
@IdClass(ScheduleKey.class)
public class Schedule implements Serializable {

    @Id
    private Integer day;
    @Id
    private String home;
    @Id
    private String away;
    private Integer league;
    private Integer type;
    private Integer homeScore;
    private Integer awayScore;
    private String boxName;
    private Integer playerOfGameId;
    private String playerOfGame;

    @ManyToMany
    @JoinColumn(name = "day", referencedColumnName = "day")
    private Set<PlayerGameStats> playerGameStats;

}
